import { FC } from 'react';
import { useConnectButton } from '../hooks/use-connect-button.ts';
import { StyledButton } from 'shared/components/styled-button';

export const ConnectButton: FC = () => {
	const { toggleConnection, actionConnection } = useConnectButton();
	return (
		<StyledButton
			onClick={toggleConnection}
			description={'wallet connection'}
		>
			{actionConnection}
		</StyledButton>
	);
};
