import { AccountAddress, CcdAmount } from '@concordium/web-sdk';

export interface Info {
	version: number;
	index: bigint;
	name: string;
	amount: CcdAmount;
	owner: AccountAddress;
	methods: string[];
}
