import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { FormClaimProps } from '../model/form-claim-props.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { contractClaim } from 'shared/lib/contract-claim.ts';
import { useState } from 'react';
import { LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_CLAIM } from 'shared/config/local-storage.ts';
import { AirdropTransactionClaim } from 'entities/transaction-claim-card';
import { contractView } from 'shared/lib/contract-view.ts';

export function useFormClaim() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormClaimProps>();

	const { connection, account } = useConcordiumApi();
	const { index, subindex } = useParams();
	const [transactionHash, setTransactionHash] = useState<string>('');

	const onAction: SubmitHandler<FormClaimProps> = async (
		data,
	): Promise<void> => {
		console.log(data);

		if (!connection || !account || !index || !subindex) {
			return;
		}

		const transactionHash = await contractClaim(
			connection,
			account,
			+index,
			+subindex,
			+data['selected token'],
			+data['amount of tokens'],
		);
		setTransactionHash(transactionHash);
		const transactions: AirdropTransactionClaim[] = JSON.parse(
			localStorage.getItem(
				LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_CLAIM,
			) || '[]',
		);
		transactions.push({
			claimDate: new Date(),
			hash: transactionHash,
			whitelist: (await contractView(connection, +index)).whitelistUrl,
			selectedToken: data['selected token'],
			amountOfTokens: data['amount of tokens'],
		});
		localStorage.setItem(
			LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_CLAIM,
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
