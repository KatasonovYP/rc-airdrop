import { type FC } from 'react';

import { useFormInit } from '../hooks/use-form-init.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';
import { TextAlert } from 'shared/components/text-alert';
import { StyledButton } from 'shared/components/styled-button';

export const FormInit: FC = () => {
	const { register, errors, handleAction } = useFormInit();

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
					{...register('metadata', { required: true })}
				/>
				{errors.metadata?.type === 'required' && (
					<TextAlert>Metadata is Required</TextAlert>
				)}
				<p>Whitelist Accounts</p>
				<input
					type='file'
					placeholder={`Input whitelist`}
					accept='.txt'
					{...register('whitelist', { required: true })}
				/>
				{errors.whitelist?.type === 'required' && (
					<TextAlert>Whitelist is Required</TextAlert>
				)}
				<InputNumber
					{...{
						register,
						errors,
						name: 'max token amount',
						defaultValue: 0,
					}}
				/>
				<InputNumber
					{...{
						register,
						errors,
						name: 'max number of claims',
						defaultValue: 0,
					}}
				/>

				<div className='flex flex-row gap-4'>
					<p>airdrop end time</p>
					<input
						type='date'
						defaultValue={'2023-06-10'}
						{...register('airdrop end time')}
					/>
				</div>

				{/*TODO: redirect user to claim page*/}
				<StyledButton
					type='submit'
					disabled={!isAuth}
				>
					{isAuth ? 'Drop' : 'please connect wallet'}
				</StyledButton>
			</div>
		</form>
	);
};
