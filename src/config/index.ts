import { BrowserWalletConnector, ephemeralConnectorType, Network } from '@concordium/react-components';

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);
export const testnet: Network = {
	name: 'testnet',
	genesisHash: '4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
