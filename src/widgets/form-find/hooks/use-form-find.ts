import { useConcordiumApi } from 'shared/hooks/use-concordium-api.ts';
import { FormFindProps } from '../model/form-find-props.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/route.ts';

export function useFormFind() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormFindProps>();
	const navigate = useNavigate();

	const { connection, account } = useConcordiumApi();

	const onAction: SubmitHandler<FormFindProps> = async (data): Promise<void> => {
		console.log(data);
		// TODO: make error handler
		if (!connection || !account) return;
		const address = {
			index: BigInt(+data.index),
			subindex: BigInt(+data.subindex),
		};
		const instanceInfo = await connection
			.getJsonRpcClient()
			.getInstanceInfo(address);

		if (instanceInfo !== undefined) {
			navigate(`${RoutePath.claim}/${address.index}/${address.subindex}`);
		} else {
			console.error('contract not exist');
		}
	};

	return { register, errors, handleAction: handleSubmit(onAction) };
}
