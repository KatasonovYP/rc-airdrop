import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import {
	CONTRACT_NAME,
	LP_RAW_SCHEMA,
	MAX_CONTRACT_EXECUTION_ENERGY,
} from '../config';
import { WalletConnection } from '@concordium/react-components';
import { DUMMY_WHITELIST } from 'shared/config/dummy.ts';
import { create_hash_tree, get_hash_proof } from 'shared/lib/merkle-tree';
import { SHA256 } from 'crypto-js';

export function contractClaim(
	connection: WalletConnection,
	account: string,
	index: number,
	subindex: number,
) {
	const tree = create_hash_tree(DUMMY_WHITELIST);
	let proof: string[] | undefined;
	if (tree) {
		console.log('tree', tree);
		const hashed = SHA256(account).toString();
		try {
			proof = get_hash_proof(hashed, tree);
		} catch (error) {
			console.error(error);
		}
	}

	connection
		.signAndSendTransaction(
			account,
			AccountTransactionType.Update,
			{
				amount: new CcdAmount(BigInt(0)),
				address: {
					index: BigInt(index),
					subindex: BigInt(subindex),
				},
				receiveName: `${CONTRACT_NAME}.claim_nft`,
				maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
			},
			{
				proof: proof ?? [],
				node: account,
				selected_token: '00000000',
			},
			LP_RAW_SCHEMA,
		)
		.then((transactionHash) => {
			console.log('transactionHash', transactionHash);
		})
		.catch((error) => {
			console.error('view error', error);
		});
}
