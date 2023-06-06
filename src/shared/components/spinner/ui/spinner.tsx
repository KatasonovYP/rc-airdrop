import { FC } from 'react';
import cls from './spinner.module.css';
import classNames from 'classnames';

interface SpinnerProps {
	className?: string;
}

export const Spinner: FC<SpinnerProps> = ({ className }) => {
	return <div className={classNames(cls.spinner, className)} />;
};
