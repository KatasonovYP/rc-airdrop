import { FC } from 'react';
import { useButtonConnect } from '../hooks/use-button-connect.ts';
import cls from './button-connect.module.css';
import classNames from 'classnames';

export const ButtonConnect: FC = () => {
	const { toggleConnection, actionConnection } = useButtonConnect();
	return (
		<button
			onClick={toggleConnection}
			className={classNames('group', cls.buttonConnect)}
		>
			<h2 className={cls.title}>
				{actionConnection}
				<span className={cls.arrow}>-&gt;</span>
			</h2>
			<p className={cls.description}>Connect Wallet</p>
		</button>
	);
};
