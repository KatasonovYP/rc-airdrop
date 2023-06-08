import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import {
	CONTRACT_NAME,
	LP_RAW_SCHEMA,
	MAX_CONTRACT_EXECUTION_ENERGY,
} from '../config';
import { WalletConnection } from '@concordium/react-components';
import { create_hash_tree, get_hash_proof } from 'shared/lib/merkle-tree';
import { SHA256 } from 'crypto-js';
import { LOCAL_STORAGE_KEY_WHITELIST } from 'shared/config/local-storage.ts';

export function contractClaim(
	connection: WalletConnection,
	account: string,
	index: number,
	subindex: number,
	selectedToken: number,
): Promise<string> {
	// TODO: put the tree logic in a separate module
	const whitelist = localStorage
		.getItem(LOCAL_STORAGE_KEY_WHITELIST)
		?.split(',');
	console.log('using whitelist:', whitelist);
	if (!whitelist) {
		throw new Error('no stored whitelist');
	}
	const tree = create_hash_tree(whitelist);
	let proof: string[] | undefined;
	if (tree) {
		console.log('tree', tree);
		const hashed = SHA256(account).toString();
		try {
			proof = get_hash_proof(hashed, tree);
			console.log('success proof');
		} catch (error) {
			console.error('error proof');
			console.error(error);
		}
	} else {
		console.error('build tree error');
	}

	return connection.signAndSendTransaction(
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
			selected_token: selectedToken.toString().padStart(8, '0'),
		},
		LP_RAW_SCHEMA,
	);
}
