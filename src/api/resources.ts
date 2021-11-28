import { http } from '../utils/request';

import { CriteriaMiniProps } from '../types/CriteriaMiniTypes';

import { TransactionResponse } from '../types/TransactionTypes';

export const FindAllTransactionsApi = ({
    param = undefined,
    filter = undefined,
    limit = 10,
    offset = 0,
}: CriteriaMiniProps) => {
    let endpoint = `/PFManagementServices/api/v1/MerchantTransactions?Limit=${limit}&Offset=${offset}`;
    if(param && filter) {
        endpoint = `${endpoint}&${param}=${filter}`;
    }
    return http
        .get<TransactionResponse>(endpoint)
        .then((response) => response.data);
};
