import { useConcordiumApi } from 'components/concordium-provider';

type ButtonAction = 'connecting...' | 'disconnect' | 'connect';

export function useButtonActionConnection(): ButtonAction {
	const {
		isConnecting
		, connection,
	} = useConcordiumApi();

	if (isConnecting) {
		return 'connecting...';
	}
	return connection ? 'disconnect' : 'connect';
}
