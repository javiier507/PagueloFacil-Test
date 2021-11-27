import { ReactNode } from 'react';

export interface RouterType {
    path: string;
    component: ReactNode | any;
    routes?: Array<RouterType>;
    exact?: boolean;
}
