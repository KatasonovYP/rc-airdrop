import { useState } from 'react';
import { FormInitProps } from '../model/form-init-props.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useWatchFiles } from 'widgets/form-init/hooks/use-watch-files.ts';
import { useContractInit } from 'widgets/form-init/hooks/use-contract-init.ts';
import { Metadata } from 'widgets/form-init/model/metadata.ts';
import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';

export function useFormInit() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInitProps>();

	const [storedData, setStoredData] = useState<FormInitProps>();
	const [transactionHash, setTransactionHash] = useState<string>('');
	const contractInit = useContractInit();

	const { listenerWhitelist, listenerMetadata, metadata, whitelist } =
		useWatchFiles(sendContract);

	const { connection } = useConcordiumApi();

	function sendContract() {
		if (!storedData || metadata === undefined || whitelist === undefined) {
			return;
		}

		console.log('storedData', storedData);
		console.log('metadata', metadata);
		console.log('whitelist', whitelist);
		console.log('data', new Date(storedData['airdrop end time']).getTime());

		localStorage.setItem('whitelist', whitelist);

		contractInit(
			whitelist !== '' ? whitelist.split(',') : [],
			+storedData['max token amount'],
			+storedData['max number of claims'],
			new Date(storedData['airdrop end time']).getTime(),
			// TODO: write type guard for metadata
			(JSON.parse(metadata) as Metadata).display.url,
			Boolean(storedData['selected index']),
		)
			.then((transactionHash) => {
				setTransactionHash(transactionHash);
				const transactions: string[] = JSON.parse(
					localStorage.getItem('transactions') || '[]',
				);
				transactions.push(transactionHash);
				localStorage.setItem(
					'transactions',
					JSON.stringify(transactions),
				);
				return connection
					?.getJsonRpcClient()
					.getTransactionStatus(transactionHash);
			})
			.then((transactionStatus) => {
				console.log(transactionStatus);
			})
			.catch((error) => {
				console.error('init error', error);
			});
	}

	const onAction: SubmitHandler<FormInitProps> = async (
		data,
	): Promise<void> => {
		setStoredData(data);

		// TODO: move logic to use-watch-files.ts

		const metadataReader = new FileReader();
		const whitelistReader = new FileReader();

		metadataReader.onloadend = listenerMetadata;
		whitelistReader.onloadend = listenerWhitelist;

		metadataReader.readAsText(data.metadata[0]);
		whitelistReader.readAsText(data.whitelist[0]);
	};

	return {
		register,
		errors,
		handleAction: handleSubmit(onAction),
		transactionHash,
	};
}
