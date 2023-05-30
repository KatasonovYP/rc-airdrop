import { BrowserWalletConnector, ephemeralConnectorType, Network } from '@concordium/react-components';
import { ModuleReference } from '@concordium/web-sdk';

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);

export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(30_000);

export const CONTRACT_NAME = 'airdrop_project'

export const RAW_MODULE_REFERENCE  = 'c025219ce8b9d6c1e57fd43ceae056d08791a84d35c017b7234209849a4bdb30'
export const MODULE_REFERENCE  = new ModuleReference(RAW_MODULE_REFERENCE);


export const LP_RAW_SCHEMA  = '//8DAQAAAA8AAABhaXJkcm9wX3Byb2plY3QBABQABQAAAAkAAAB3aGl0ZWxpc3QQAgsJAAAAbmZ0X2xpbWl0BA4AAABuZnRfdGltZV9saW1pdAUHAAAAcmVzZXJ2ZQQIAAAAYmFzZV91cmwWAgIAAAAJAAAAY2xhaW1fbmZ0BhQAAgAAAAUAAABwcm9vZhACFgIEAAAAbm9kZQsUAAEAAAADAAAAdXJsFgIVCAAAABAAAABQYXJzZVBhcmFtc0Vycm9yAg8AAABORlRMaW1pdFJlYWNoZWQCFQAAAEFkZHJlc3NOb3RPbldoaXRlbGlzdAIQAAAAQWlyZHJvcE5vd0Nsb3NlZAITAAAATWludGluZ0xvZ01hbGZvcm1lZAIOAAAATWludGluZ0xvZ0Z1bGwCFAAAAE1ldGFEYXRhTG9nTWFsZm9ybWVkAg8AAABNZXRhRGF0YUxvZ0Z1bGwCBAAAAHZpZXcBFAABAAAAGAAAAGFtb3VudF9vZl9jbGFpbWVkX3Rva2VucwQA'
export const testnet: Network = {
	name: 'testnet',
	genesisHash: '4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
