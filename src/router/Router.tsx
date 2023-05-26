import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Create, Find, Claim, Home } from '../pages';

export const Router: FC = () => {
	return (
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='/create'
				element={<Create />}
			/>
			<Route
				path='/find'
				element={<Find />}
			/>
			<Route
				path='/claim'
				element={<Claim />}
			/>
		</Routes>
	);
};
