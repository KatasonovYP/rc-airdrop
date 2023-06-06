import { type FC } from 'react';

import { useFormInit } from '../hooks/use-form-init.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';

export const FormInit: FC = () => {
	const {
		register,
		errors,
		handleAction,
	} = useFormInit();

	const { isAuth } = useAuth();

	return (
		<form onSubmit={handleAction}>
			<div>
				{/*TODO: make FileInput*/}
				<p>Metadata</p>
				<input
					type='file'
					placeholder={`Input whitelist`}
					accept='.json'
					{...register('metadata')}
				/>
				<p>Whitelist Accounts</p>
				<input
					type='file'
					placeholder={`Input whitelist`}
					accept='.txt'
					{...register('whitelist')}
				/>
				<InputNumber {...{ register, errors, name: 'max token amount', defaultValue: 0 }} />
				<InputNumber {...{ register, errors, name: 'max number of claims', defaultValue: 0 }} />

				<div className='flex flex-row gap-4'>
					<p>airdrop end time</p>
					<input
						type='date'
						defaultValue={'2023-06-10'}
						{...register('airdrop end time')}
					/>
				</div>

				{/*TODO: redirect user to claim page*/}
				<button
					className='px-8 py-4 bg-gray-200 mt-4 rounded-xl hover:bg-blue-500 transition'
					type='submit'
					disabled={!isAuth}
				>
					{isAuth ? 'Drop' : 'please connect wallet'}
				</button>
			</div>
		</form>
	);
};
