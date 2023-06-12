import { type FC } from 'react';

import { useFormFind } from '../hooks/use-form-find.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';
import { StyledButton } from 'shared/components/styled-button';
import { LOCAL_STORAGE_KEY_LAST_CONTRACT_INDEX } from 'shared/config/local-storage.ts';
import { TextAlert } from 'shared/components/text-alert';
import { Spinner } from 'shared/components/spinner';

export const FormFind: FC = () => {
	const { register, errors, handleAction, errorMessage, isLoading } =
		useFormFind();

	const { isAuth } = useAuth();

	const index = Number.parseInt(
		localStorage.getItem(LOCAL_STORAGE_KEY_LAST_CONTRACT_INDEX) || '4878',
	);

	return (
		<form onSubmit={handleAction}>
			<div>
				<InputNumber
					{...{
						register,
						errors,
						name: 'index',
						defaultValue: index,
					}}
				/>
				<InputNumber
					{...{ register, errors, name: 'subindex', defaultValue: 0 }}
				/>

				<StyledButton
					type='submit'
					disabled={!isAuth}
				>
					{isLoading ? (
						<Spinner />
					) : isAuth ? (
						'Find airdrop'
					) : (
						'need to connect'
					)}
				</StyledButton>
				{errorMessage && <TextAlert>{errorMessage}</TextAlert>}
			</div>
		</form>
	);
};
