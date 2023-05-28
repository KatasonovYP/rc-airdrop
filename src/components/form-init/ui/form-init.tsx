import { type FC } from 'react';

import { NumberInput } from 'components/input-number';
import { useFormInit } from '../hooks/use-form-init.ts';

export const FormInit: FC = () => {
	const {
		register,
		errors,
		handleAction,
	} = useFormInit();

	return (
		<form onSubmit={handleAction}>
			<div>
				{/*TODO: make FileInput*/}
				<p>Metadata</p>
				<input type='file' disabled />
				<p>Whitelist Accounts</p>
				<input type='file' disabled />
				<NumberInput {...{ register, errors, name: 'max token amount', defaultValue: 1 }} />
				<NumberInput {...{ register, errors, name: 'max number of claims', defaultValue: 0 }} />
				{/*TODO: make DataInput*/}
				<NumberInput {...{ register, errors, name: 'airdrop end time', defaultValue: 1 }} />

				{/*TODO: redirect user to claim page*/}
				<button type='submit' disabled={false}>Find airdrop</button>
			</div>
		</form>
	);
};