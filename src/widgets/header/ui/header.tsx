import { FC, useEffect } from 'react';
import { BROWSER_WALLET } from 'shared/config';
import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { StyledLink } from 'shared/components/styled-link';
import { ConnectButton } from 'features/connect-button';

export const AirdropHeader: FC = () => {
	const { setActiveConnectorType } = useConcordiumApi();

	useEffect(() => setActiveConnectorType(BROWSER_WALLET), []);
	return (
		<header className='flex items-center justify-between px-24 py-12'>
			<div className='flex'>
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
			</div>

			<ConnectButton />
		</header>
	);
};
