import { FC } from 'react';
import { AirdropTransactionInit } from 'entities/transaction-init-card/model/airdrop-transaction-init.ts';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';
import { IpfsCidLink } from 'shared/components/ipfs-cid-link';

export const TransactionInitCard: FC<AirdropTransactionInit> = (
	transaction,
) => {
	return (
		<div className='flex flex-col gap-1 p-4 border-2 border-slate-400 bg-gray-100 rounded-lg'>
			<p>date: {transaction.initDate.toDateString()}</p>
			<p>time: {transaction.initDate.toTimeString()}</p>
			<IpfsCidLink
				name='metadata'
				link={transaction.metadataUrl}
			/>
			<IpfsCidLink
				name='whitelist'
				link={transaction.whitelistUrl}
			/>
			<p>nft limit: {transaction.nftLimit}</p>
			<p>reserve: {transaction.reserve}</p>
			<p>nft limit per address: {transaction.nftLimitPerAddress}</p>
			<p>airdrop end time: {transaction.endTime.toString()}</p>
			<p>selected index: {String(transaction.selectedIndex)}</p>
			<TransactionHashLink transactionHash={transaction.hash} />
		</div>
	);
};
