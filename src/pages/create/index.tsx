export default function Create() {
	return (
		<main className='flex min-h-max flex-col items-center justify-between px-24 py-12'>
			<div className='grid grid-cols-2 gap-12'>
				<div className='grid grid-cols-2 gap-4'>
					<p>Metadata</p>
					<input type='file' />
					<p>Whitelist Accounts</p>
					<input type='file' />
					<p>Max Token Amount</p>
					<input />
					<p>Max Number Of Claims</p>
					<input />
					<p>Airdrop End Time</p>
					<input />
				</div>
				<div>
					<img
						src='/nft.png'
						alt=''
						width={512}
						height={512}
					/>
				</div>
			</div>
		</main>
	);
}
