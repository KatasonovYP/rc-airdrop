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
	'9d4a28bde33a49073729410e40b5235f7b167cb59df235a0b1a9593efc139dbe';
export const MODULE_REFERENCE = new ModuleReference(RAW_MODULE_REFERENCE);

export const LP_RAW_SCHEMA =
	'//8DAQAAAA8AAABhaXJkcm9wX3Byb2plY3QBABQABgAAAAkAAAB3aGl0ZWxpc3QQAgsJAAAAbmZ0X2xpbWl0BA4AAABuZnRfdGltZV9saW1pdAUHAAAAcmVzZXJ2ZQQIAAAAYmFzZV91cmwWAg4AAABzZWxlY3RlZF9pbmRleAEFAAAACwAAAGNoZWNrX293bmVyAhQAAQAAAAUAAAB0b2tlbh0AFAABAAAABwAAAGFkZHJlc3MVAgAAAAQAAABOb25lAgQAAABTb21lAQEAAAALCQAAAGNsYWltX25mdAQUAAMAAAAFAAAAcHJvb2YQAhYCBAAAAG5vZGULDgAAAHNlbGVjdGVkX3Rva2VuHQAVCAAAAA8AAABORlRMaW1pdFJlYWNoZWQCFQAAAEFkZHJlc3NOb3RPbldoaXRlbGlzdAIQAAAAQWlyZHJvcE5vd0Nsb3NlZAITAAAATWludGluZ0xvZ01hbGZvcm1lZAIOAAAATWludGluZ0xvZ0Z1bGwCFAAAAE1ldGFEYXRhTG9nTWFsZm9ybWVkAg8AAABNZXRhRGF0YUxvZ0Z1bGwCEwAAAEluZGV4QWxyZWFkeUNsYWltZWQCDgAAAGN1cnJlbnRfc3VwcGx5AQQMAAAAdG90YWxfc3VwcGx5AQQEAAAAdmlldwEUAAEAAAAOAAAAY2xhaW1lZF90b2tlbnMSAh0ACwA';
export const testnet: Network = {
	name: 'testnet',
	genesisHash:
		'4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
