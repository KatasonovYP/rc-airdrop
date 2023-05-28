import { FC, useEffect } from 'react';
import { StyledLink } from 'components/styled-link';
import { BROWSER_WALLET } from 'config';
import { ConnectButton } from 'components/connect-button';
import { useConcordiumApi } from 'components/concordium-provider';
import { contractInit } from 'lib/contract-init.ts';
import { contractView } from 'lib/contract-view.ts';
import { contractClaim } from 'lib/contract-claim.ts';

export const AirdropHeader: FC = () => {
	const {
		setActiveConnectorType,
		connection,
		account,
	} = useConcordiumApi();

	useEffect(() => setActiveConnectorType(BROWSER_WALLET), []);

	function initHandler() {
		if (!connection || !account) return;
		console.log('sending init...');
		contractInit(connection, account, {
			whitelist: [],
			nft_limit: 1,
			nft_time_limit: 1,
			nft_limit_per_address: 1,
			reserve: 0,
			token_id: '000001',
		});
	}

	function viewHandler() {
		if (!connection || !account) return;
		console.log('sending view...');
		contractView(connection, account, 0, 0);
	}

	function claimHandler() {
		if (!connection || !account) return;
		console.log('sending claim...');
		contractClaim(connection, account);
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
			<button onClick={initHandler}>init</button>
			<button onClick={viewHandler}>view</button>
			<button onClick={claimHandler}>claim</button>
			<button onClick={() => {
				console.log(account);
			}}>check
			</button>
			<ConnectButton />
		</header>
	);
};
