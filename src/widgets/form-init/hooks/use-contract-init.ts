import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { contractInit } from 'widgets/form-init/lib/contract-init.ts';

export function useContractInit() {
	const { connection, account } = useConcordiumApi();

	return (
		whiteList: string[],
		nftLimit: number,
		reserve: number,
		nftTimeLimit: number,
		baseUrl: string,
		selectedIndex: boolean,
	): Promise<string> => {
		if (!connection || !account) {
			throw new Error('no connection');
		}

		return contractInit(connection, account, {
			whitelist: whiteList,
			nft_limit: nftLimit,
			reserve: reserve,
			nft_time_limit: nftTimeLimit,
			base_url: baseUrl,
			selected_index: selectedIndex,
		});
	};
}
