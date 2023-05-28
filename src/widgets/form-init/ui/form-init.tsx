import { type FC } from 'react';

import { useFormInit } from '../hooks/use-form-init.ts';
import { InputNumber } from 'features/input-number';

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
				<InputNumber {...{ register, errors, name: 'max token amount', defaultValue: 1 }} />
				<InputNumber {...{ register, errors, name: 'max number of claims', defaultValue: 0 }} />
				{/*TODO: make DataInput*/}
				<InputNumber {...{ register, errors, name: 'airdrop end time', defaultValue: 1 }} />

				{/*TODO: redirect user to claim page*/}
				<button type='submit' disabled={false}>Find airdrop</button>
			</div>
		</form>
	);
};
