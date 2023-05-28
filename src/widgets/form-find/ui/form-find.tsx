import { type FC } from 'react';

import { useFormFind } from '../hooks/use-form-find.ts';
import { NumberInput } from 'features/input-number';

export const FormFind: FC = () => {
	const {
		register,
		errors,
		handleAction,
	} = useFormFind();

	return (
		<form onSubmit={handleAction}>
			<div>
				<NumberInput {...{ register, errors, name: 'index', defaultValue: 0 }} />
				<NumberInput {...{ register, errors, name: 'subindex', defaultValue: 0 }} />

				<button type='submit' disabled={false}>Find airdrop</button>
			</div>
		</form>
	);
};
