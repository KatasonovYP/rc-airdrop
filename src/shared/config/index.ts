import {
	BrowserWalletConnector,
	ephemeralConnectorType,
	Network,
} from '@concordium/react-components';
import { ModuleReference } from '@concordium/web-sdk';

export const BROWSER_WALLET = ephemeralConnectorType(
	BrowserWalletConnector.create,
);

export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(30_000);

export const CONTRACT_NAME = 'airdrop_project';

export const RAW_MODULE_REFERENCE =
	'1ff33abc80eaaa0467ad20107cc0daa7c31d9cb58e365e8756594c197548b074';
export const MODULE_REFERENCE = new ModuleReference(RAW_MODULE_REFERENCE);

export const LP_RAW_SCHEMA =
	'//8DAQAAAA8AAABhaXJkcm9wX3Byb2plY3QBABQABgAAAAkAAAB3aGl0ZWxpc3QQAhYCCQAAAG5mdF9saW1pdAQOAAAAbmZ0X3RpbWVfbGltaXQFBwAAAHJlc2VydmUECAAAAGJhc2VfdXJsFgIOAAAAc2VsZWN0ZWRfaW5kZXgBBQAAAAsAAABjaGVja19vd25lcgIUAAEAAAAFAAAAdG9rZW4dABQAAQAAAAcAAABhZGRyZXNzFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAFgIJAAAAY2xhaW1fbmZ0BBQAAwAAAAUAAABwcm9vZhACFgIEAAAAbm9kZRYCDgAAAHNlbGVjdGVkX3Rva2VuHQAVCAAAAA8AAABORlRMaW1pdFJlYWNoZWQCFQAAAEFkZHJlc3NOb3RPbldoaXRlbGlzdAIQAAAAQWlyZHJvcE5vd0Nsb3NlZAITAAAATWludGluZ0xvZ01hbGZvcm1lZAIOAAAATWludGluZ0xvZ0Z1bGwCFAAAAE1ldGFEYXRhTG9nTWFsZm9ybWVkAg8AAABNZXRhRGF0YUxvZ0Z1bGwCEwAAAEluZGV4QWxyZWFkeUNsYWltZWQCDgAAAGN1cnJlbnRfc3VwcGx5AQQMAAAAdG90YWxfc3VwcGx5AQQEAAAAdmlldwEUAAEAAAAOAAAAY2xhaW1lZF90b2tlbnMSAh0AFgIA';
export const testnet: Network = {
	name: 'testnet',
	genesisHash:
		'4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
