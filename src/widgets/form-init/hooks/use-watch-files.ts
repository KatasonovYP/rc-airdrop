import { useEffect, useState } from 'react';
import { listenerFabric, type listenerFabricResult } from 'widgets/form-init/lib/listner-fabric.ts';

interface UseWatchFilesResult {
	listenerMetadata: listenerFabricResult,
	listenerWhitelist: listenerFabricResult,
	metadata: string,
	whitelist: string,
}

/*
Hook to perform an action after the data from both files are received
 */
export function useWatchFiles(script: () => void): UseWatchFilesResult {

	const [metadata, setMetadata] = useState('');
	const [whitelist, setWhitelist] = useState('');

	useEffect(() => {
		if (metadata && whitelist) {
			script();
			setMetadata('');
			setWhitelist('');
		}
	}, [metadata, whitelist]);

	return {
		listenerMetadata: listenerFabric(setMetadata),
		listenerWhitelist: listenerFabric(setWhitelist),
		metadata,
		whitelist,
	};
}
