import { type FC } from 'react';
import { type FieldErrors, type FieldValues, type Path, type UseFormRegister } from 'react-hook-form';
import { TextAlert } from 'shared/components/text-alert';
import cls from './input-number.module.css';
import classNames from 'classnames';

export const numberRegExp = /^\d+$/;
// export const numberRegExp = /^([^0\D]\d+)|0$/;


interface NumberInputProperties<T extends FieldValues> {
	className?: string;
	name: Path<T>;
	register: UseFormRegister<T>;
	errors: FieldErrors<T>;
	defaultValue?: number;
}

// replace any to Record<string, unknown>
type customFC = FC<NumberInputProperties<any>>;

export const InputNumber: customFC = <T extends FieldValues>(props: NumberInputProperties<T>) => {
	const {
		name,
		register,
		errors,
		defaultValue,
		className
	} = props;
	return (
		<div className={classNames(cls.inputBox, className)}>
			<input
				type='text'
				required={true}
				defaultValue={defaultValue}
				{...register(name, { required: true, pattern: numberRegExp })}
			/>
			<span>{name}</span>
			{errors[name]?.type === 'required' && <TextAlert>Field {name} is required</TextAlert>}
			{errors[name]?.type === 'pattern' && <TextAlert>Input correct number</TextAlert>}
		</div>
	);
};
