export interface AirdropTransactionClaim {
	claimDate: Date;
	whitelist: string;
	selectedToken: number;
	amountOfTokens: number;
	hash: string;
	error: number;
	contractIndex: number;
}
