import { AccountTransactionType, CcdAmount } from '@concordium/web-sdk';
import { CONTRACT_NAME, LP_RAW_SCHEMA, MAX_CONTRACT_EXECUTION_ENERGY } from '../config';
import { WalletConnection } from '@concordium/react-components';
import { MerkleTree } from 'merkletreejs';
import sha256 from 'crypto-js/sha256';
import { DUMMY_WHITELIST } from 'shared/config/dummy.ts';

export function contractClaim(connection: WalletConnection, account: string) {
	const leaves = DUMMY_WHITELIST.map(x => sha256(x));
	const tree = new MerkleTree(leaves, sha256);
	const leaf = sha256(DUMMY_WHITELIST[0]).toString();
	console.log('leaf hash', leaf);
	let proofArray = tree.getProof(leaf);
	console.log('array', proofArray);
	const proof = proofArray.map(x => x.data)
	console.log('proof', proof);
	const proofString = proof.map(x => JSON.stringify(x))


	console.log(proofString);
	connection.signAndSendTransaction(
		account,
		AccountTransactionType.Update,
		{
			amount: new CcdAmount(BigInt(0)),
			address: {
				index: BigInt(0),
				subindex: BigInt(0),
			},
			receiveName: `${CONTRACT_NAME}.claim_nft`,
			maxContractExecutionEnergy: MAX_CONTRACT_EXECUTION_ENERGY,
		},
		{
			proof: [],
			node: '38aZhohfE8AfJhLuPUtHNv9qPvnWMh2eD9trt7zeSQpjJYpv3L',
		},
		LP_RAW_SCHEMA,
	).then((result) => {
		console.log('result', result);
	}).catch((error) => {
		console.error('view error', error);
	});
}
