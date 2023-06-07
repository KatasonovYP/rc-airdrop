export interface AirdropTransactionInit {
	initDate: Date;
	metadata: string;
	whitelist: string;
	nftLimit: number;
	reserve: number;
	endTime: Date;
	selectedIndex: boolean;
	hash: string;
}
