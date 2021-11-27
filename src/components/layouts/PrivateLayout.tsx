import { Switch, Route } from '../../libraries/react-router';
import {
    Box
} from '../../libraries/chakra';

import { PrivateRouters } from '../../routers/PrivateRouters';
import { RouteWithSubRoutes } from '../../routers/RouteWithSubRoutes';
import { NotFound } from '../../pages/NotFound';

export default function PrivateLayout() {
    return (
        <Box minH="100vh">
            <Box p={4}>
                <Switch>
                    {PrivateRouters.map((item, index) => (
                        <RouteWithSubRoutes key={index} {...item} />
                    ))}
                    <Route path="*" key="404">
                        <NotFound />
                    </Route>
                </Switch>
            </Box>
        </Box>
    );
}
