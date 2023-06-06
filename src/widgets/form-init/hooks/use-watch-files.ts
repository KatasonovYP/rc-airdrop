import { useEffect, useState } from 'react';
import { listenerFabric, type listenerFabricResult } from 'widgets/form-init/lib/listner-fabric.ts';

interface UseWatchFilesResult {
	listenerMetadata: listenerFabricResult,
	listenerWhitelist: listenerFabricResult,
	metadata: string | undefined,
	whitelist: string | undefined,
}

/*
Hook to perform an action after the data from both files are received
 */
export function useWatchFiles(script: () => void): UseWatchFilesResult {

	const [metadata, setMetadata] = useState<string | undefined>(undefined);
	const [whitelist, setWhitelist] = useState<string | undefined>(undefined);

	useEffect(() => {
		if (metadata !== undefined && whitelist !== undefined) {
			script();
			setMetadata(undefined);
			setWhitelist(undefined);
		}
	}, [metadata, whitelist]);

	return {
		listenerMetadata: listenerFabric(setMetadata),
		listenerWhitelist: listenerFabric(setWhitelist),
		metadata,
		whitelist,
	};
}
