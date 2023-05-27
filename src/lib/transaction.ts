import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import { WalletConnection } from '@concordium/react-components';
import { Info } from '../model';
import { MAX_CONTRACT_EXECUTION_ENERGY } from '../config';

function contractUpdatePayload(amount: CcdAmount, contract: Info, method: string) {
	return {
		amount,
		address: {
			index: contract.index,
			subindex: BigInt(0),
		},
		receiveName: `${contract.name}.${method}`,
		maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
	};
}

export async function initAirdrop(
	connection: WalletConnection,
	account: string, contract: Info,
	whitelist: string[] = [],
	nftLimit: number
) {
	console.log("🚀 ~ file: transaction.ts:25 ~ nftLimit:", nftLimit)
	console.log("🚀 ~ file: transaction.ts:25 ~ whitelist:", whitelist)
	return connection.signAndSendTransaction(
		account,
		AccountTransactionType.Update,
		contractUpdatePayload(
			new CcdAmount(BigInt(0)),
			contract,
			'Init'
		),
		{},
		'',
	);
}

export async function claimAirdrop(connection: WalletConnection, account: string, contract: Info) {
	return connection.signAndSendTransaction(
		account,
		AccountTransactionType.Update,
		contractUpdatePayload(new CcdAmount(BigInt(0)), contract, 'contract_claim_nft'),
		{},
		'',
	);
}