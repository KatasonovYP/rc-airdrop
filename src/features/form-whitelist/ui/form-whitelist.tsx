import { SubmitHandler, useForm } from 'react-hook-form';
import { listenerFabric } from 'widgets/form-init/lib/listner-fabric.ts';
import { useEffect, useState } from 'react';
import { TextAlert } from 'shared/components/text-alert';
import { useWhitelistStore } from 'shared/model/use-whitelist-store.ts';
import { postIpfs } from 'widgets/form-init/lib/post-ipfs.ts';

interface FormWhitelistProps {
	whitelist: FileList;
}

export function FormWhitelist() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormWhitelistProps>();

	// const setWhitelist = useWhitelistStore((store) => store.setWhitelist);
	const [whitelist, setWhitelist] = useState<string | undefined>('');
	const setStoreWhitelist = useWhitelistStore((state) => state.setWhitelist);
	const setStoreWhitelistUrl = useWhitelistStore(
		(state) => state.setWhitelistUrl,
	);

	useEffect(() => {
		if (whitelist) {
			setStoreWhitelist(whitelist);
		}
	}, [whitelist]);

	const onAction: SubmitHandler<FormWhitelistProps> = async (
		data,
	): Promise<void> => {
		const whitelistReader = new FileReader();
		whitelistReader.onloadend = listenerFabric(setWhitelist);
		whitelistReader.readAsText(data.whitelist[0]);

		setStoreWhitelistUrl(await postIpfs(data.whitelist[0]));
	};

	return (
		<form onChange={handleSubmit(onAction)}>
			<div className='flex gap-4'>
				<p>Whitelist: </p>
				<input
					type='file'
					placeholder={`Input whitelist`}
					accept='.txt'
					{...register('whitelist', { required: true })}
				/>
				{errors.whitelist?.type === 'required' && (
					<TextAlert>Whitelist is required</TextAlert>
				)}
			</div>
		</form>
	);
}
