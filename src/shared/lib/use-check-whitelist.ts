import { contractView } from 'shared/lib/contract-view.ts';
import axios from 'axios';
import { WalletConnection } from '@concordium/react-components';

export async function checkWhitelist(
	connection: WalletConnection,
	index: number,
	account: string,
) {
	const contractState = await contractView(connection, index);
	const whitelistRaw: string = (await axios.get(contractState.whitelistUrl))
		.data;
	const whitelist: string[] = whitelistRaw?.split(',');
	console.log('whitelist', whitelist);
	console.log('account', account);
	console.log('account in whitelist', account in whitelist);
	return {
		isOnWhitelist: whitelist.indexOf(account) >= 0,
		whitelistUrl: contractState.whitelistUrl,
	};
}
