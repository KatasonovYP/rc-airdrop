import { useParams } from 'react-router-dom';
import { contractClaim } from 'shared/lib/contract-claim.ts';
import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { StyledButton } from 'shared/components/styled-button';

export default function Claim() {
	const { index, subindex } = useParams();
	const { connection, account } = useConcordiumApi();

	function claimHandler() {
		if (!connection || !account || !index || !subindex) {
			return;
		}
		contractClaim(connection, account, +index, +subindex);
	}

	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-2 gap-12'>
				<div>
					<img
						src='/public/nft.png'
						alt=''
						width={512}
						height={512}
					/>
				</div>
				<div className='grid grid-cols-2 gap-4'>
					<p>perfect name</p>
					<p>awesome description</p>
				</div>
				<StyledButton
					onClick={claimHandler}
					description={''}
				>
					Claim
				</StyledButton>
			</div>
		</main>
	);
}
