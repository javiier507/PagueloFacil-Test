import { useState } from 'react';
import { useQuery } from '../libraries/react-query';
import { Box, Stack } from '../libraries/chakra';

import { CriteriaMiniProps } from '../types/CriteriaMiniTypes';
import { FindAllTransactionsApi } from '../api/resources';

import { RequestMessage } from '../components/elements/RequestMessage';
import { Message } from '../components/elements/Message';
import { TransactionsFilterForm } from '../components/transactions/TransactionsFilterForm';
import { TransactionsTable } from '../components/transactions/TransactionsTable';

export const Transactions = () => {
    const [criteria, setCriteria] = useState<CriteriaMiniProps>({});

    const { isLoading, isError, data } = useQuery(
        ['transactions', criteria],
        () => FindAllTransactionsApi(criteria),
        {
            keepPreviousData: true,
        },
    );

    const handleFilterForm = (values: CriteriaMiniProps) => {
        setCriteria(values);
    };

    const handlePagination = (page: number) => {
        setCriteria({ ...criteria, offset: page });
    };

    if (isLoading || isError || !data) {
        return <RequestMessage isLoading={isLoading} isError={isError} data={data} />;
    }

    if (!data.success) {
        return <Message status="error" text={'Lo sentimos. No podemos mostrar la información'} />;
    }

    const transactions = data.data;

    return (
        <Stack>
            <Box p={4} bg="white">
                <TransactionsFilterForm handleForm={handleFilterForm} />
            </Box>
            <Box p={4} bg="white">
                <TransactionsTable
                    columns={[
                        'Fecha',
                        'Código de Operación	',
                        'Estado',
                        'Correo Electrónico',
                        'Monto $',
                    ]}
                    rows={transactions}
                    pagination={{
                        offset: criteria.offset || 0,
                        limit: criteria.limit || 10,
                        handleSetPage: handlePagination,
                        hasData: !!transactions.length
                    }}
                />
            </Box>
        </Stack>
    );
};
