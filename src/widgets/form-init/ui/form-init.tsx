import { type FC } from 'react';

import { useFormInit } from '../hooks/use-form-init.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';
import { TextAlert } from 'shared/components/text-alert';
import { StyledButton } from 'shared/components/styled-button';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';

export const FormInit: FC = () => {
	const { register, errors, handleAction, transactionHash } = useFormInit();

	const { isAuth } = useAuth();

	return (
		<form onSubmit={handleAction}>
			<div className='flex flex-col gap-4'>
				<div className='flex gap-4'>
					<p>Metadata: </p>
					<input
						type='file'
						placeholder={`Input whitelist`}
						accept='.json'
						{...register('metadata', { required: true })}
					/>
				</div>
				{errors.metadata?.type === 'required' && (
					<TextAlert>Metadata is Required</TextAlert>
				)}

				<div className='flex gap-4'>
					<p>Whitelist Accounts: </p>
					<input
						type='file'
						placeholder={`Input whitelist`}
						accept='.txt'
						{...register('whitelist', { required: true })}
					/>
				</div>
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
						{...register('airdrop end time', { required: true })}
					/>
				</div>
				{errors['airdrop end time']?.type === 'required' && (
					<TextAlert>airdrop end time is required</TextAlert>
				)}

				<div className='flex flex-row gap-4'>
					<p>selected index</p>
					<input
						type='checkbox'
						{...register('selected index')}
					/>
				</div>

				<StyledButton
					type='submit'
					disabled={!isAuth}
				>
					{isAuth ? 'Drop' : 'please connect wallet'}
				</StyledButton>
			</div>
			<div>
				{transactionHash && (
					<TransactionHashLink transactionHash={transactionHash} />
				)}
			</div>
		</form>
	);
};
