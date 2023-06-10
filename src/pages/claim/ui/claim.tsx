import { FormClaim } from 'widgets/form-claim';
import { useEffect, useState } from 'react';
import { Metadata } from 'widgets/form-init/model/metadata.ts';
import axios from 'axios';
import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { useParams } from 'react-router-dom';
import { Spinner } from 'shared/components/spinner';
import { contractView } from 'shared/lib/contract-view.ts';

export default function Claim() {
	const { connection } = useConcordiumApi();
	const { index } = useParams();
	const [metadata, setMetadata] = useState<Metadata>();

	useEffect(() => {
		(async () => {
			if (connection && index) {
				const state = await contractView(connection, +index);
				const metadata = (await axios.get(state.metadataUrl)).data;
				setMetadata(metadata);
			}
		})();
	}, [connection]);

	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-2 gap-12'>
				<div className='flex flex-grow justify-center align-middle'>
					<div>
						{metadata?.display.url ? (
							<img
								src={metadata?.display.url}
								alt=''
								className='max-h-[350px] max-w-[350px]'
								loading='lazy'
								width={512}
								height={512}
							/>
						) : (
							<Spinner />
						)}
						{<p>{metadata?.name}</p> || <Spinner />}
						{<p>{metadata?.description}</p> || <Spinner />}
					</div>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<FormClaim />
				</div>
			</div>
		</main>
	);
}
