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
	'0c277947dc38bf3906fad88955b2ce6f3a8cc02e12ab149f66174adf611bf557';
export const MODULE_REFERENCE = new ModuleReference(RAW_MODULE_REFERENCE);

export const LP_RAW_SCHEMA =
	'//8DAQAAAA8AAABhaXJkcm9wX3Byb2plY3QBABQACQAAAAkAAAB3aGl0ZWxpc3QQAhYCCQAAAG5mdF9saW1pdAQVAAAAbmZ0X2xpbWl0X3Blcl9hZGRyZXNzBA4AAABuZnRfdGltZV9saW1pdAUHAAAAcmVzZXJ2ZQQIAAAAYmFzZV91cmwWAggAAABtZXRhZGF0YRYCDgAAAHdoaXRlbGlzdF9maWxlFgIOAAAAc2VsZWN0ZWRfaW5kZXgBBgAAAAoAAABiYWxhbmNlX29mAhQAAgAAAAYAAABfZHVtbXkIBAAAAG5vZGULBAsAAABjaGVja19vd25lcgIUAAEAAAAFAAAAdG9rZW4dABQAAQAAAAcAAABhZGRyZXNzFQIAAAAEAAAATm9uZQIEAAAAU29tZQEBAAAAFgIJAAAAY2xhaW1fbmZ0BBQABAAAAAUAAABwcm9vZhACFgIEAAAAbm9kZQsOAAAAc2VsZWN0ZWRfdG9rZW4dABAAAABhbW91bnRfb2ZfdG9rZW5zBBUIAAAADwAAAE5GVExpbWl0UmVhY2hlZAIVAAAAQWRkcmVzc05vdE9uV2hpdGVsaXN0AhAAAABBaXJkcm9wTm93Q2xvc2VkAhMAAABNaW50aW5nTG9nTWFsZm9ybWVkAg4AAABNaW50aW5nTG9nRnVsbAIUAAAATWV0YURhdGFMb2dNYWxmb3JtZWQCDwAAAE1ldGFEYXRhTG9nRnVsbAITAAAASW5kZXhBbHJlYWR5Q2xhaW1lZAIOAAAAY3VycmVudF9zdXBwbHkBBAwAAAB0b3RhbF9zdXBwbHkBBAQAAAB2aWV3ARQAAwAAAAgAAABtZXRhZGF0YRYCCQAAAHdoaXRlbGlzdBYCDgAAAG51bWJlcl9vZl9uZnRzBAA';
export const testnet: Network = {
	name: 'testnet',
	genesisHash:
		'4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
