import { FormInit } from 'widgets/form-init';
import { FormMetadata } from 'features/form-metadata';
import { useMetadataStore } from 'shared/model/use-metadata-store.ts';
import { FormWhitelist } from 'features/form-whitelist';
import { NftCard } from 'entities/nft-card/ui/nft-card.tsx';
import { NftCardSkeleton } from 'entities/nft-card';

export default function Create() {
	const metadata = useMetadataStore((state) => state.metadata);
	return (
		<main className='grid grid-cols-2 gap-12'>
			<div className='flex flex-col gap-4'>
				<FormMetadata />
				<FormWhitelist />
				<FormInit />
			</div>

			{metadata ? <NftCard metadata={metadata} /> : <NftCardSkeleton />}
		</main>
	);
}
