import { FC, useEffect } from 'react';
import { BROWSER_WALLET } from 'shared/config';
import { contractInit } from 'widgets/form-init/lib/contract-init.ts';
import { contractView } from 'shared/lib/contract-view.ts';
import { contractClaim } from 'shared/lib/contract-claim.ts';
import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { StyledLink } from 'shared/components/styled-link';
import { ConnectButton } from 'features/connect-button';

export const AirdropHeader: FC = () => {
	const { setActiveConnectorType, connection, account } = useConcordiumApi();

	useEffect(() => setActiveConnectorType(BROWSER_WALLET), []);

	function initHandler() {
		if (!connection || !account) return;
		console.log('sending init...');
		contractInit(connection, account, {
			whitelist: [],
			nft_limit: 1,
			nft_time_limit: 1,
			reserve: 0,
			base_url: '',
			selected_index: false,
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
		contractClaim(connection, account, 4762, 0);
	}

	return (
		<header className='flex items-center justify-between px-24 py-12'>
			<StyledLink
				to='/create'
				description='create new your own airdrop'
			>
				Create Airdrop
			</StyledLink>
			<StyledLink
				to='/find'
				description='find airdrops'
			>
				Find
			</StyledLink>
			<button onClick={initHandler}>init</button>
			<button onClick={viewHandler}>view</button>
			<button onClick={claimHandler}>claim</button>
			<button
				onClick={() => {
					console.log(account);
				}}
			>
				check
			</button>
			<ConnectButton />
		</header>
	);
};
