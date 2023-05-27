import { BrowserWalletConnector, ephemeralConnectorType, Network } from '@concordium/react-components';
import { ModuleReference } from '@concordium/web-sdk';

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);

export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(30_000);

export const CONTRACT_NAME = 'airdrop_project'

export const RAW_MODULE_REFERENCE  = 'bd0fafdd2384d23709f42ada1cd2f9f0ec2d262904adb2db4c1629f688961602'
export const MODULE_REFERENCE  = new ModuleReference(RAW_MODULE_REFERENCE);


export const LP_RAW_SCHEMA  = '//8DAQAAAA8AAABhaXJkcm9wX3Byb2plY3QBABQABgAAAAkAAAB3aGl0ZWxpc3QQAgsJAAAAbmZ0X2xpbWl0BBUAAABuZnRfbGltaXRfcGVyX2FkZHJlc3MEDgAAAG5mdF90aW1lX2xpbWl0BAcAAAByZXNlcnZlBAgAAAB0b2tlbl9pZB0AAgAAAAkAAABjbGFpbV9uZnQEFAACAAAABQAAAHByb29mEAIWAgQAAABub2RlFgIVAwAAABAAAABQYXJzZVBhcmFtc0Vycm9yAg8AAABORlRMaW1pdFJlYWNoZWQCFQAAAEFkZHJlc3NOb3RPbldoaXRlbGlzdAIEAAAAdmlldwEUAAEAAAAYAAAAYW1vdW50X29mX2NsYWltZWRfdG9rZW5zBAA'
export const testnet: Network = {
	name: 'testnet',
	genesisHash: '4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
