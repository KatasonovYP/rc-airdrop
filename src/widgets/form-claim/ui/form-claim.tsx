import { type FC } from 'react';

import { useFormClaim } from '../hooks/use-form-claim.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';
import { StyledButton } from 'shared/components/styled-button';
import { TransactionHashLink } from 'shared/components/transaction-hash-link';
import { Spinner } from 'shared/components/spinner';
import { getErrorMessage } from 'shared/lib/get-error-message.ts';

export const FormClaim: FC = () => {
	const {
		register,
		errors,
		handleAction,
		transactionHash,
		isLoading,
		errorCode,
	} = useFormClaim();

	const { isAuth } = useAuth();

	return (
		<form onSubmit={handleAction}>
			<div>
				<InputNumber
					{...{
						register,
						errors,
						name: 'selected token',
						defaultValue: 0,
					}}
				/>

				<InputNumber
					{...{
						register,
						errors,
						name: 'amount of tokens',
						defaultValue: 1,
					}}
				/>

				<StyledButton
					type='submit'
					disabled={!isAuth}
				>
					{isLoading ? (
						<Spinner />
					) : isAuth ? (
						'Claim token'
					) : (
						'need to connect'
					)}
				</StyledButton>
				{transactionHash &&
					(isLoading ? (
						<p>status: loading...</p>
					) : errorCode ? (
						<p>{getErrorMessage(errorCode)}</p>
					) : (
						<p>Success</p>
					))}
				{transactionHash && (
					<TransactionHashLink transactionHash={transactionHash} />
				)}
			</div>
		</form>
	);
};
