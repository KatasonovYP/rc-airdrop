import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import { CONTRACT_NAME, LP_RAW_SCHEMA, MAX_CONTRACT_EXECUTION_ENERGY } from '../config';
import { WalletConnection } from '@concordium/react-components';

export function contractView(connection: WalletConnection, account: string, index: number, subindex: number) {
	connection.signAndSendTransaction(
		account,
		AccountTransactionType.Update,
		{
			amount: new CcdAmount(BigInt(0)),
			address: {
				index: BigInt(index),
				subindex: BigInt(subindex),
			},
			receiveName: `${CONTRACT_NAME}.view`,
			maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
		},
		{},
		LP_RAW_SCHEMA,
	).then((result) => {
		console.log('result', result);
	}).catch((error) => {
		console.error('view error', error);
	});
}
