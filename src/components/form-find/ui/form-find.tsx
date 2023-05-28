import { type FC } from 'react';

import { NumberInput } from 'components/input-number';
import { useFormFind } from '../hooks/use-form-find.ts';

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