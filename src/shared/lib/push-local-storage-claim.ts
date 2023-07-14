import { AirdropTransactionClaim } from 'entities/transaction-claim-card';
import { LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_CLAIM } from 'shared/config/local-storage.ts';
import axios from 'axios';
import { getErrorMessage } from 'shared/lib/get-error-message.ts';
import { EXPLORER_URL, GOOGLE_SHEETS_URL } from 'shared/config/urls.ts';

export function pushLocalStorageClaim(transaction: AirdropTransactionClaim) {
	const transactions: AirdropTransactionClaim[] = JSON.parse(
		localStorage.getItem(LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_CLAIM) ||
			'[]',
	);
	transactions.push(transaction);
	localStorage.setItem(
		LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_CLAIM,
		JSON.stringify(transactions),
	);
	axios
		.get(GOOGLE_SHEETS_URL, {
			params: {
				...transaction,
				type: 'claim',
				claimDate: transaction.claimDate.toString(),
				error:
					transaction.error === 0
						? 'success'
						: getErrorMessage(transaction.error),
				hash: `${EXPLORER_URL}/${transaction.hash}`,
			},
		})
		.then(console.log)
		.catch(console.error);
}
