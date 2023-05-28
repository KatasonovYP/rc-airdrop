import { RouteProps } from 'react-router-dom';
import { AppRoutes, RoutePath } from 'shared/config/route';
import { Find } from 'pages/find';
import { Home } from 'pages/home';
import { Create } from 'pages/create';
import { Claim } from 'pages/claim';
import { NotFound } from 'pages/not-found';

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.HOME]: {
		path: RoutePath[AppRoutes.HOME],
		element: <Home />,
	},
	[AppRoutes.CREATE]: {
		path: RoutePath[AppRoutes.CREATE],
		element: <Create />,
	},
	[AppRoutes.FIND]: {
		path: RoutePath[AppRoutes.FIND],
		element: <Find />,
	},
	[AppRoutes.CLAIM]: {
		path: RoutePath[AppRoutes.CLAIM],
		element: <Claim />,
	},
	[AppRoutes.NOT_FOUNT]: {
		path: RoutePath[AppRoutes.NOT_FOUNT],
		element: <NotFound />,
	},
};
