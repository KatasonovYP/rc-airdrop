import { AirdropTransactionInit } from 'entities/transaction-init-card';
import { LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT } from 'shared/config/local-storage.ts';
import axios from 'axios';
import { getErrorMessage } from 'shared/lib/get-error-message.ts';
import { EXPLORER_URL, GOOGLE_SHEETS_URL } from 'shared/config/urls.ts';

export function pushLocalStorageInit(transaction: AirdropTransactionInit) {
	const transactions: AirdropTransactionInit[] = JSON.parse(
		localStorage.getItem(LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT) ||
			'[]',
	);
	transactions.push(transaction);
	localStorage.setItem(
		LOCAL_STORAGE_KEY_AIRDROP_TRANSACTIONS_INIT,
		JSON.stringify(transactions),
	);
	axios
		.get(GOOGLE_SHEETS_URL, {
			params: {
				...transaction,
				type: 'init',
				initDate: transaction.initDate.toString(),
				endTime: transaction.endTime.toString(),
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
