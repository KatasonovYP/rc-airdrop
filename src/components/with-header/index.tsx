import { WithWalletConnector } from '@concordium/react-components/dist/WithWalletConnector';
import { testnet } from '../../config';
import { AirdropHeader } from '../airdrop-header';
import { FC } from 'react';

export const WithHeader: FC = () => {
	return <WithWalletConnector network={testnet}>{(props) => <AirdropHeader {...props} />}</WithWalletConnector>;
};
