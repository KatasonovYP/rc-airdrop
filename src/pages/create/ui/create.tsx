import { FormInit } from 'widgets/form-init';
import { FormMetadata } from 'features/form-metadata';
import { useMetadataStore } from 'shared/model/use-metadata-store.ts';
import { FormWhitelist } from 'features/form-whitelist';

export default function Create() {
	const metadata = useMetadataStore((state) => state.metadata);
	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-2 gap-12'>
				<div>
					<FormMetadata />
					<FormWhitelist />
					<FormInit />
				</div>
				<div>
					{metadata ? (
						<div className='flex flex-col gap-2'>
							<p>{metadata?.name}</p>
							<p>{metadata?.description}</p>
							<img
								src={metadata.display.url}
								alt=''
								loading='lazy'
								width={512}
								height={512}
							/>
						</div>
					) : (
						<div className='flex flex-col gap-2'>
							<div className='w-96 h-2 bg-slate-300 rounded-2xl' />
							<div className='w-52 h-2 bg-slate-300 rounded-2xl' />
							<div className='w-40 h-2 bg-slate-300 rounded-2xl' />
							<div className='w-[512px] h-[512px] bg-slate-300 rounded-2xl' />
						</div>
					)}
				</div>
			</div>
		</main>
	);
}
