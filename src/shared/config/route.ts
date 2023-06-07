export enum AppRoutes {
	HOME = 'main',
	CREATE = 'create',
	FIND = 'find',
	CLAIM = 'claim',
	NOT_FOUNT = 'not-found',
	TRANSACTIONS = 'transactions',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.HOME]: '/',
	[AppRoutes.CREATE]: `/${AppRoutes.CREATE}`,
	[AppRoutes.FIND]: `/${AppRoutes.FIND}`,
	[AppRoutes.CLAIM]: `/${AppRoutes.CLAIM}`,
	[AppRoutes.TRANSACTIONS]: `/${AppRoutes.TRANSACTIONS}`,
	[AppRoutes.NOT_FOUNT]: '*',
};
