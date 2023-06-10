import { useState } from 'react';
import { FormInitProps } from '../model/form-init-props.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { AirdropTransactionInit } from 'entities/transaction-init-card';
import { LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT } from 'shared/config/local-storage.ts';
import { contractInit } from 'widgets/form-init/lib/contract-init.ts';
import { useMetadataStore } from 'shared/model/use-metadata-store.ts';
import { useWhitelistStore } from 'shared/model/use-whitelist-store.ts';

export function useFormInit() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInitProps>();

	const [transactionHash, setTransactionHash] = useState<string>('');
	const { connection, account } = useConcordiumApi();
	const metadata = useMetadataStore((state) => state.metadata);
	const metadataUrl = useMetadataStore((state) => state.metadataUrl);
	const whitelist = useWhitelistStore((state) => state.whitelist);
	const whitelistUrl = useWhitelistStore((state) => state.whitelistUrl);

	const onAction: SubmitHandler<FormInitProps> = async (
		data,
	): Promise<void> => {
		if (
			!data ||
			metadataUrl === undefined ||
			metadata === undefined ||
			whitelistUrl === undefined ||
			whitelist === undefined
		) {
			return;
		}

		if (!connection || !account) {
			return;
		}

		const transactionHash = await contractInit(connection, account, {
			whitelist: whitelist !== '' ? whitelist.split(',') : [],
			nft_limit: +data['nft limit'],
			nft_limit_per_address: 1,
			nft_time_limit: new Date(data['nft time limit']).getTime(),
			reserve: +data['reserve'],
			base_url: metadata.display.url,
			metadata: metadataUrl,
			whitelist_file: whitelistUrl,
			selected_index: Boolean(data['selected index']),
		});
		setTransactionHash(transactionHash);
		const transactions: AirdropTransactionInit[] = JSON.parse(
			localStorage.getItem(LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT) ||
				'[]',
		);
		transactions.push({
			initDate: new Date(),
			metadataUrl: metadataUrl,
			whitelistUrl: whitelistUrl,
			endTime: new Date(data['nft time limit']),
			hash: transactionHash,
			nftLimit: +data['nft limit'],
			nftLimitPerAddress: +data['nft limit per address'],
			reserve: +data['reserve'],
			selectedIndex: Boolean(data['selected index']),
		});
		localStorage.setItem(
			LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT,
			JSON.stringify(transactions),
		);
	};

	return {
		register,
		errors,
		handleAction: handleSubmit(onAction),
		transactionHash,
	};
}
