import { type FC } from 'react';
import { type FieldErrors, type FieldValues, type Path, type UseFormRegister } from 'react-hook-form';
import { TextAlert } from '../../text-alert';

export const numberRegExp = /^(([+-]*\d*\.*\d+[Ee])?([+-]*\d*\.*\d+))$/;


interface NumberInputProperties<T extends FieldValues> {
	name: Path<T>;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
	defaultValue?: number;
}

// replace any to Record<string, unknown>
type customFC = FC<NumberInputProperties<any>>;

export const NumberInput: customFC = <T extends FieldValues>(props: NumberInputProperties<T>) => {
	const {
		name,
		register,
		errors,
		defaultValue,
	} = props;
	return (
		<>
			<div>{name}</div>
			<input
				id='standard-basic'
				placeholder={`Введите ${name}`}
				defaultValue={defaultValue}
				{...register(name, { required: true, pattern: numberRegExp })}
			/>
			{errors[name]?.type === 'required' && <TextAlert>Поле {name} необходимо</TextAlert>}
			{errors[name]?.type === 'pattern' && <TextAlert>Введите корректное число</TextAlert>}
		</>
	);
};
