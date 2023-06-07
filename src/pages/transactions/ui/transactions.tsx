import { LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT } from 'shared/config/local-storage.ts';
import {
	AirdropTransactionInit,
	TransactionInitCard,
} from 'entities/transaction-card';

export default function Transactions() {
	const transactions: AirdropTransactionInit[] = JSON.parse(
		localStorage.getItem(LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT) ||
			'[]',
	);

	transactions.forEach((transaction) => {
		transaction.initDate = new Date(transaction.initDate);
		transaction.endTime = new Date(transaction.endTime);
		transaction.reserve = +transaction.reserve;
		transaction.nftLimit = +transaction.nftLimit;
		transaction.selectedIndex = Boolean(transaction.selectedIndex);
	});

	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-1 gap-12'>
				<div>
					<p>inits</p>
					<ul>
						{transactions.length === 0 && (
							<p>No Init Transactions</p>
						)}
						{transactions.map((transaction, key) => {
							return (
								<li>
									<TransactionInitCard
										key={key}
										{...transaction}
									/>
								</li>
							);
						})}
					</ul>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<p>claims</p>
				</div>
			</div>
		</main>
	);
}
