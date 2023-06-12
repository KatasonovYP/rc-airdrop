import { type FC } from 'react';

import { useFormInit } from '../hooks/use-form-init.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';
import { TextAlert } from 'shared/components/text-alert';
import { StyledButton } from 'shared/components/styled-button';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';
import { Spinner } from 'shared/components/spinner';
import { Link } from 'react-router-dom';
import { RoutePath } from 'shared/config/route.ts';

export const FormInit: FC = () => {
	const {
		register,
		errors,
		handleAction,
		transactionHash,
		isLoading,
		createdContractId,
	} = useFormInit();

	const { isAuth } = useAuth();

	const date = new Date();
	const futureDate = date.getDate() + 3;
	date.setDate(futureDate);
	const defaultDate = date.toLocaleDateString('en-CA');

	return (
		<form onSubmit={handleAction}>
			<div className='flex flex-col gap-4'>
				<InputNumber
					{...{
						register,
						errors,
						name: 'nft limit',
						defaultValue: 10,
					}}
				/>

				<InputNumber
					{...{
						register,
						errors,
						name: 'reserve',
						defaultValue: 3,
					}}
				/>

				<InputNumber
					{...{
						register,
						errors,
						name: 'nft limit per address',
						defaultValue: 3,
					}}
				/>

				<div className='flex flex-row gap-4'>
					<p>airdrop end time</p>
					<input
						type='date'
						defaultValue={defaultDate}
						{...register('nft time limit', { required: true })}
					/>
				</div>
				{errors['nft time limit']?.type === 'required' && (
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
					disabled={!isAuth || isLoading}
				>
					{isLoading ? (
						<Spinner />
					) : isAuth ? (
						'Drop'
					) : (
						'please connect wallet'
					)}
				</StyledButton>
			</div>
			<div>
				{transactionHash &&
					(createdContractId ? (
						<Link
							className='text-blue-500 hover:text-blue-700'
							to={`${
								RoutePath.claim
							}/${createdContractId.toString()}/0`}
						>
							{`address: <${createdContractId.toString()}, 0>`}{' '}
						</Link>
					) : (
						<p>address: loading...</p>
					))}
				{transactionHash && (
					<TransactionHashLink transactionHash={transactionHash} />
				)}
			</div>
		</form>
	);
};
