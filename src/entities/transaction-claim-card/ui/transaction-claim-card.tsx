import { FC } from 'react';
import { AirdropTransactionClaim } from '../model/airdrop-transaction-claim';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';

export const TransactionClaimCard: FC<AirdropTransactionClaim> = (
	transaction,
) => {
	return (
		<div className='p-4 border-2 border-slate-400 bg-gray-100 rounded-lg'>
			<p>date: {transaction.claimDate.toDateString()}</p>
			<p>time: {transaction.claimDate.toTimeString()}</p>
			<p>whitelist: {transaction.whitelist}</p>
			<p>selected index: {String(transaction.selectedToken)}</p>
			<TransactionHashLink transactionHash={transaction.hash} />
		</div>
	);
};
