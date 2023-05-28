import { FC, ReactNode } from 'react';

interface TextAlertProps {
	className?: string;
	children?: ReactNode;
}

export const TextAlert: FC<TextAlertProps> = ({ className, children }) => {
	return (
		<p className={`${className} text-xl text-red-500`}>
			{children}
		</p>
	);
};
