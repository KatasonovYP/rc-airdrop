import { FC, InputHTMLAttributes, useState } from 'react';
import cls from './input-file.module.css';
import classNames from 'classnames';

interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
	buttonText?: string;
	leftText?: string;
	className?: string;
}

export const InputFile: FC<InputFileProps> = (props) => {
	const {
		className,
		buttonText = 'select the file',
		leftText = 'No more than 10 mb',
		...otherProps
	} = props;
	const [currentLeftText, setCurrentLeftText] = useState(leftText);
	return (
		<label className={classNames(cls.inputFile, className)}>
			<input
				onChange={(event) => {
					const files = event?.target?.files;
					if (files) {
						setCurrentLeftText(files[0].name);
					}
				}}
				type='file'
				{...otherProps}
			/>
			<span className={cls.inputFileButton}>{buttonText}</span>
			<span className={cls.inputFileText}>{currentLeftText}</span>
		</label>
	);
};
