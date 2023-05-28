import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import { CONTRACT_NAME, LP_RAW_SCHEMA, MAX_CONTRACT_EXECUTION_ENERGY } from '../config';
import { WalletConnection } from '@concordium/react-components';

export function contractClaim(connection: WalletConnection, account: string) {
	connection.signAndSendTransaction(
		account,
		AccountTransactionType.Update,
		{
			amount: new CcdAmount(BigInt(0)),
			address: {
				index: BigInt(0),
				subindex: BigInt(0),
			},
			receiveName: `${CONTRACT_NAME}.contract_claim_nft`,
			maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
		},
		{
			proof: [],
			node: '00000001',
		},
		LP_RAW_SCHEMA,
	).then((result) => {
		console.log('result', result);
	}).catch((error) => {
		console.error('view error', error);
	});
}
