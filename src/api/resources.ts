import { http } from '../utils/request';

import { PaginationResponse } from '../types/GenericTypes';
import { CriteriaMiniProps } from '../types/CriteriaMiniTypes';

import {
    TransactionResponse
} from '../types/TransactionTypes';

export const FindAllTransactionsApi = ({
    filter = 'AVAILABLE',
    limit = 20,
    offset = 0,
}: CriteriaMiniProps) =>
    http
        .get<TransactionResponse>(
            `/PFManagementServices/api/v1/MerchantTransactions`,
        )
        .then((response) => response.data);