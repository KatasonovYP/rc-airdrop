import { useConcordiumApi } from '../../concordium-provider';
import { contractView } from '../../../lib/contract-view.ts';
import { FormFindProps } from '../model/form-find-props.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';

export function useFormFind() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFindProps>();

	const { connection, account } = useConcordiumApi();

	const onAction: SubmitHandler<FormFindProps> = (data): void => {
		console.log(data);
		// TODO: make error handler
		if (!connection || !account) return;
		contractView(connection, account, +data.index, +data.subindex);
	};

	return { register, errors, handleAction: handleSubmit(onAction) };
}
