import { Dispatch, SetStateAction } from 'react';

export type listenerFabricResult = (event: ProgressEvent<FileReader>) => void;
export function listenerFabric(set: Dispatch<SetStateAction<string>>): listenerFabricResult {
	function listener(event: ProgressEvent<FileReader>): void {
		const buffer = event.target?.result;
		if (typeof buffer === 'string') {
			set(buffer);
		}
	}

	return listener;
}
