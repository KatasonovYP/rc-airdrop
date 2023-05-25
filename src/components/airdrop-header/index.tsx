'use client';

import { FC, useEffect } from 'react';
import { StyledLink } from '../styled-link';
import { WalletConnectionProps } from '@concordium/react-components/dist/WithWalletConnector';
import { useConnection } from '@concordium/react-components/dist/useConnection';
import {
	BROWSER_WALLET,
	CONTRACT_NAME,
	LP_RAW_SCHEMA,
	MAX_CONTRACT_EXECUTION_ENERGY,
	MODULE_REFERENCE,
} from '../../config';
import { ConnectButton } from '../connect-button';
import { AccountTransactionType, CcdAmount, ModuleReference } from '@concordium/web-sdk';

export const AirdropHeader: FC<WalletConnectionProps> = ({
															 activeConnector,
															 connectedAccounts,
															 genesisHashes,
															 setActiveConnectorType,
														 }) => {
	const { setConnection, connection, account } = useConnection(connectedAccounts, genesisHashes);

	useEffect(() => setActiveConnectorType(BROWSER_WALLET), []);
	const moduleReference = new ModuleReference(MODULE_REFERENCE);


	function inithandler() {
		if (!connection || !account) return;
		console.log('sending init...');
		console.log(`account: ${account}`);
		connection.signAndSendTransaction(
			account,
			AccountTransactionType.InitContract,
			{
				amount: new CcdAmount(BigInt(0)),
				moduleRef: moduleReference,
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

	function viewHandler() {
		if (!connection || !account) return;
		console.log('sending view...');
		console.log(`account: ${account}`);

		connection.signAndSendTransaction(
			account,
			AccountTransactionType.Update,
			{
				amount: new CcdAmount(BigInt(0)),
				address: {
					index: BigInt(0),
					subindex: BigInt(0),
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

	function claimHandler() {
		if (!connection || !account) return;
		console.log('sending claim...');

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
				node: '00000001',
			},
			LP_RAW_SCHEMA,
		).then((result) => {
			console.log('result', result);
		}).catch((error) => {
			console.error('view error', error);
		});
	}

	let connectButtonMessage = 'Connect';


	function connectHandle() {
		activeConnector?.connect().then(setConnection).catch(console.error);
	}

	return (
		<header className='flex items-center justify-between px-24 py-12'>
			<StyledLink
				href='/create'
				description='create new your own airdrop'
			>
				Create Airdrop
			</StyledLink>
			<StyledLink
				href='/find'
				description='find airdrops'
			>
				Find
			</StyledLink>
			<button onClick={inithandler}>init</button>
			<button onClick={viewHandler}>view</button>
			<button onClick={claimHandler}>claim</button>
			<ConnectButton onClick={connectHandle}>{connectButtonMessage}</ConnectButton>
		</header>
	);
};
