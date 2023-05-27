import { ConcordiumContext, ConcordiumContextProps } from '../../../config/concordium-context.ts';
import { useContext } from 'react';

export function useConcordiumApi(): ConcordiumContextProps {
	const walletConnectionProps = useContext(
		ConcordiumContext,
	) as ConcordiumContextProps;

	return { ...walletConnectionProps };
}
