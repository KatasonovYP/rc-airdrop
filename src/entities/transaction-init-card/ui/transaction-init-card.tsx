import { FC } from 'react';
import { AirdropTransactionInit } from 'entities/transaction-init-card/model/airdrop-transaction-init.ts';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';

export const TransactionInitCard: FC<AirdropTransactionInit> = (
	transaction,
) => {
	return (
		<div className='p-4 border-2 border-slate-400 bg-gray-100 rounded-lg'>
			<p>date: {transaction.initDate.toDateString()}</p>
			<p>time: {transaction.initDate.toTimeString()}</p>
			<p>whitelist: {transaction.whitelist}</p>
			<p>max token amount: {transaction.nftLimit}</p>
			<p>max number of claims: {transaction.reserve}</p>
			<p>airdrop end time: {transaction.endTime.toString()}</p>
			<p>selected index: {String(transaction.selectedIndex)}</p>
			<TransactionHashLink transactionHash={transaction.hash} />
		</div>
	);
};
