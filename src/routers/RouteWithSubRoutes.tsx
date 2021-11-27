import { Route } from '../libraries/react-router';

import { RouterType } from './RouterTypes';

export function RouteWithSubRoutes({
    path,
    component: RouteComponent,
    routes,
    exact = false,
}: RouterType) {
    return (
        <Route
            path={path}
            render={(props) => <RouteComponent {...props} routes={routes} />}
            exact={exact}
        />
    );
}
