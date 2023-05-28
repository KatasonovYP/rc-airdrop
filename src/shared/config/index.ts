import { BrowserWalletConnector, ephemeralConnectorType, Network } from '@concordium/react-components';
import { ModuleReference } from '@concordium/web-sdk';

export const BROWSER_WALLET = ephemeralConnectorType(BrowserWalletConnector.create);

export const MAX_CONTRACT_EXECUTION_ENERGY = BigInt(30_000);

export const CONTRACT_NAME = 'airdrop_project'

export const RAW_MODULE_REFERENCE  = 'dc178647f4e221853933eec0b875d3bf510c466bc3ea05249443ccd241dc058d'
export const MODULE_REFERENCE  = new ModuleReference(RAW_MODULE_REFERENCE);


export const LP_RAW_SCHEMA  = '//8DAQAAAA8AAABhaXJkcm9wX3Byb2plY3QBABQABQAAAAkAAAB3aGl0ZWxpc3QQAgsJAAAAbmZ0X2xpbWl0BA4AAABuZnRfdGltZV9saW1pdAUHAAAAcmVzZXJ2ZQQIAAAAYmFzZV91cmwWAgIAAAAJAAAAY2xhaW1fbmZ0BhQAAgAAAAUAAABwcm9vZhACFgIEAAAAbm9kZQsUAAEAAAAIAAAAdG9rZW5faWQdABUIAAAAEAAAAFBhcnNlUGFyYW1zRXJyb3ICDwAAAE5GVExpbWl0UmVhY2hlZAIVAAAAQWRkcmVzc05vdE9uV2hpdGVsaXN0AhAAAABBaXJkcm9wTm93Q2xvc2VkAhMAAABNaW50aW5nTG9nTWFsZm9ybWVkAg4AAABNaW50aW5nTG9nRnVsbAIUAAAATWV0YURhdGFMb2dNYWxmb3JtZWQCDwAAAE1ldGFEYXRhTG9nRnVsbAIEAAAAdmlldwEEAA'
export const testnet: Network = {
	name: 'testnet',
	genesisHash: '4221332d34e1694168c2a0c0b3fd0f273809612cb13d000d5c2e00e85f50f796',
	jsonRpcUrl: 'https://json-rpc.testnet.concordium.com',
	ccdScanBaseUrl: 'https://testnet.ccdscan.io',
};
