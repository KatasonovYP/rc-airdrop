import { StyledLink } from 'components/styled-link';
import { FormInit } from 'components/form-init';

export default function Create() {
	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-2 gap-12'>
				<FormInit />
				<div>
					<img
						src='/nft.png'
						alt=''
						width={512}
						height={512}
					/>
				</div>
				<StyledLink href='/find' description={''}>Drop</StyledLink>
			</div>
		</main>
	);
}