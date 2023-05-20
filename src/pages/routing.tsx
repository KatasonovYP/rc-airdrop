import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Create from './create';
import Find from './find';
import Claim from './claim';
import Home from './home';

export const Routing: FC = () => {
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
