import { FC } from 'react';
import cls from './not-found.module.css';

interface NotFoundProps {
	className?: string;
}

export const NotFound: FC<NotFoundProps> = () => {
	return <div className={cls.notFound}>not found</div>;
};
