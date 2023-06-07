import { TransactionHashLink } from 'shared/components/transaction-hash-link';

export default function Transactions() {
	const transactions: string[] = JSON.parse(
		localStorage.getItem('transactions') || '[]',
	);

	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-1 gap-12'>
				<div>
					<p>inits</p>
					<ul>
						{transactions.map((transaction) => {
							return (
								<li>
									<TransactionHashLink
										transactionHash={transaction}
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
