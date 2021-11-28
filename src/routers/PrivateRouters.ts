import { RouterType } from './RouterTypes';
import { ROUTES } from './names';

import { Transactions } from '../pages/Transactions';

export const PrivateRouters: Array<RouterType> = [
    {
        path: ROUTES.TICKETS,
        component: Transactions,
        exact: true,
    }
];
