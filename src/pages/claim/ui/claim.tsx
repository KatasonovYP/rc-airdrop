import { StyledLink } from 'shared/components/styled-link';

export default function Claim() {
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
				<StyledLink href='/find' description={''}>Claim</StyledLink>
			</div>
		</main>
	);
}
