import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import { CONTRACT_NAME, LP_RAW_SCHEMA, MAX_CONTRACT_EXECUTION_ENERGY, MODULE_REFERENCE } from '../config';
import { WalletConnection } from '@concordium/react-components';

export function contractInit(connection: WalletConnection, account: string) {
	connection.signAndSendTransaction(
		account,
		AccountTransactionType.InitContract,
		{
			amount: new CcdAmount(BigInt(0)),
			moduleRef: MODULE_REFERENCE,
			initName: `${CONTRACT_NAME}`,
			maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
		},
		{
			whitelist: [],
			nft_limit: 1,
			nft_limit_per_address: 1,
			nft_time_limit: 1,
			reserve: 0,
			token_id: '00000001',
		},
		LP_RAW_SCHEMA,
	).then((result) => {
		console.log('result', result);
	}).catch((error) => {
		console.error('init error', error);
	});
}
