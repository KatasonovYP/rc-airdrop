import { StyledLink } from '../../components/styled-link';

export default function Find() {
	return (<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
		<div className='grid grid-cols-2 gap-4'>
			<p>Contract Index</p>
			<input/>
			<p>Contract Subindex</p>
			<input/>
			<StyledLink href='/claim' description={''}>Find</StyledLink>
		</div>
	</main>);
}
