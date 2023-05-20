'use client';

import { FC, useEffect } from 'react';
import { StyledLink } from '../styled-link';
import { WalletConnectionProps } from '@concordium/react-components/dist/WithWalletConnector';
import { useConnection } from '@concordium/react-components/dist/useConnection';
import { BROWSER_WALLET } from '../../config';
import { ConnectButton } from '../connect-button';

export const AirdropHeader: FC<WalletConnectionProps> = ({
	activeConnector,
	connectedAccounts,
	genesisHashes,
	setActiveConnectorType,
}) => {
	const { setConnection } = useConnection(connectedAccounts, genesisHashes);

	useEffect(() => setActiveConnectorType(BROWSER_WALLET), []);

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
			<ConnectButton onClick={connectHandle}>Connect</ConnectButton>
		</header>
	);
};
