import { type FC } from 'react';

import { useFormFind } from '../hooks/use-form-find.ts';
import { InputNumber } from 'features/input-number';
import { useAuth } from 'shared/hooks/use-auth.ts';
import { StyledButton } from 'shared/components/styled-button';

export const FormFind: FC = () => {
	const { register, errors, handleAction } = useFormFind();

	const { isAuth } = useAuth();

	return (
		<form onSubmit={handleAction}>
			<div>
				<InputNumber
					{...{ register, errors, name: 'index', defaultValue: 4762 }}
				/>
				<InputNumber
					{...{ register, errors, name: 'subindex', defaultValue: 0 }}
				/>

				<StyledButton
					type='submit'
					disabled={!isAuth}
				>
					{isAuth ? 'Find airdrop' : 'please connect wallet'}
				</StyledButton>
			</div>
		</form>
	);
};
