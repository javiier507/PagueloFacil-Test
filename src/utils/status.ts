import { TRANSACTION_STATUS_CHOICES } from '../constants';

export function getStatusName(status: number): string|null {
    let response = null;
    if(TRANSACTION_STATUS_CHOICES.hasOwnProperty(status)) {
        response = TRANSACTION_STATUS_CHOICES[status];
    }    
    return response;
}