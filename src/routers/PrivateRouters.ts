import { RouterType } from './RouterTypes';
import { ROUTES } from './names';

import { Tickets } from '../pages/Tickets';

export const PrivateRouters: Array<RouterType> = [
    {
        path: ROUTES.TICKETS,
        component: Tickets,
        exact: true,
    }
];
