import { Switch, Route } from '../../libraries/react-router';
import {
    Stack,
    Box
} from '../../libraries/chakra';

import { PrivateRouters } from '../../routers/PrivateRouters';
import { RouteWithSubRoutes } from '../../routers/RouteWithSubRoutes';
import { NotFound } from '../../pages/NotFound';
import { Header } from '../elements/Header';

export default function PrivateLayout() {
    return (
        <Stack minH="100vh" maxWidth="1400px" margin="0 auto">
            <Box>
                <Header/>
            </Box>
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
        </Stack>
    );
}
