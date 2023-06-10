import { FC } from 'react';
import { AirdropTransactionClaim } from 'entities/transaction-claim-card';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';
import { IpfsCidLink } from 'shared/components/ipfs-cid-link';

export const TransactionClaimCard: FC<AirdropTransactionClaim> = (
	transaction,
) => {
	return (
		<div className='p-4 border-2 border-slate-400 bg-gray-100 rounded-lg'>
			<p>date: {transaction.claimDate.toDateString()}</p>
			<p>time: {transaction.claimDate.toTimeString()}</p>
			<IpfsCidLink
				name='whitelist'
				link={transaction.whitelist}
			/>
			<p>selected index: {String(transaction.selectedToken)}</p>
			<p>amount of tokens: {String(transaction.amountOfTokens)}</p>
			<TransactionHashLink transactionHash={transaction.hash} />
		</div>
	);
};
