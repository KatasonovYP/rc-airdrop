import { SubmitHandler, useForm } from 'react-hook-form';
import { listenerFabric } from 'widgets/form-init/lib/listner-fabric.ts';
import { useEffect, useState } from 'react';
import { TextAlert } from 'shared/components/text-alert';
import { useMetadataStore } from 'shared/model/use-metadata-store.ts';
import { postIpfs } from 'widgets/form-init/lib/post-ipfs.ts';

interface FormMetadataProps {
	metadata: FileList;
}

export function FormMetadata() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormMetadataProps>();

	// const setMetadata = useMetadataStore((store) => store.setMetadata);
	const [metadata, setMetadata] = useState<string | undefined>('');
	const setStoreMetadata = useMetadataStore((state) => state.setMetadata);
	const setMetadataUrl = useMetadataStore((state) => state.setMetadataUrl);
	const setMetadataFile = useMetadataStore((state) => state.setMetadataFile);

	useEffect(() => {
		if (metadata) {
			setStoreMetadata(JSON.parse(metadata));
		} else {
			setStoreMetadata(undefined);
		}
	}, [metadata]);

	const onAction: SubmitHandler<FormMetadataProps> = async (
		data,
	): Promise<void> => {
		const metadataReader = new FileReader();
		metadataReader.onloadend = listenerFabric(setMetadata);
		metadataReader.readAsText(data.metadata[0]);
		setMetadataFile(data.metadata);

		setMetadataUrl(await postIpfs(data.metadata[0]));
	};

	return (
		<form onChange={handleSubmit(onAction)}>
			<div className='flex gap-4'>
				<p>Metadata: </p>
				<input
					type='file'
					placeholder={`Input whitelist`}
					accept='.json'
					{...register('metadata', { required: true })}
				/>
				{errors.metadata?.type === 'required' && (
					<TextAlert>Metadata is required</TextAlert>
				)}
			</div>
		</form>
	);
}
