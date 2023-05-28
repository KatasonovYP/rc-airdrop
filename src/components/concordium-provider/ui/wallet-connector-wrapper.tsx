import { FC, PropsWithChildren } from 'react';
import { WithWalletConnector } from '@concordium/react-components/dist/WithWalletConnector';
import { testnet } from 'config';
import { ConcordiumProvider } from './concordium-provider.tsx';

export const WalletConnectorWrapper: FC<PropsWithChildren> = ({children}) => {
	return (
		<div>
			<WithWalletConnector network={testnet}>
				{(props) => {
					return (<ConcordiumProvider walletConnectionPropsDefault={props}>
						{children}
					</ConcordiumProvider>);
				}}
			</WithWalletConnector>;
		</div>
	);
};
