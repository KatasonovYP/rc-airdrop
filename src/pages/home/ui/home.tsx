import { StyledButton } from 'shared/components/styled-button';

export default function Home() {
	function clickHandler() {
		localStorage.clear();
	}

	return (
		<div className='min-h-screen'>
			<main className='flex min-h-max flex-col items-center justify-between p-24'>
				<h1>Hello web3 User!</h1>
				<StyledButton onClick={clickHandler}>
					clean localStorage
				</StyledButton>
			</main>
		</div>
	);
}
