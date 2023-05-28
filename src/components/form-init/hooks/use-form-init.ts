import { useConcordiumApi } from 'components/concordium-provider';
import { FormInitProps } from '../model/form-init-props.ts';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { contractInit } from 'lib/contract-init.ts';

export function useFormInit() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInitProps>();

	const { connection, account } = useConcordiumApi();

	const onAction: SubmitHandler<FormInitProps> = (data): void => {
		console.log(data);
		// TODO: make error handler
		if (!connection || !account) {
			console.error('user doesn\'t authorised');
			return;
		}
		contractInit(connection, account, {
			// TODO: include white list
			whitelist: [],
			nft_limit: +data['max token amount'],
			reserve: +data['max number of claims'],
			nft_time_limit: +data['airdrop end time'],
			// TODO: parse metadata
			base_url: 'https://awesome-nft-address.jpeg',
		});
	};

	return { register, errors, handleAction: handleSubmit(onAction) };
}
