import { useState } from 'react';
import { useQuery } from '../libraries/react-query';
import { Box, Stack } from '../libraries/chakra';

import { CriteriaMiniProps } from '../types/CriteriaMiniTypes';
import { FindAllTransactionsApi } from '../api/resources';

import { RequestMessage } from '../components/elements/RequestMessage';
import { TicketsFilterForm } from '../components/tickets/TicketsFilterForm';
import { TicketsTable } from '../components/tickets/TicketsTable';

export const Tickets = () => {
    const [criteria, setCriteria] = useState<CriteriaMiniProps>({});

    const { isLoading, isError, data } = useQuery(
        ['transactions', criteria],
        () => FindAllTransactionsApi(criteria),
        {
            keepPreviousData: true,
            select: x => x.data
        },
    );

    const handleFilterForm = (values: CriteriaMiniProps) => {
        setCriteria(values);
    };

    const handleGoToDetail = () => {};

    const handlePagination = (page: number) => {
        setCriteria({ ...criteria, offset: page });
    };

    if (isLoading || isError || !data) {
        return <RequestMessage isLoading={isLoading} isError={isError} data={data} />;
    }

    return (
        <Stack>
            <Box p={4} bg="white">
                <TicketsFilterForm handleForm={handleFilterForm} />
            </Box>
            <Box p={4} bg="white">
                <TicketsTable
                    columns={['Fecha', 'Código de Operación	', 'Estado', 'Correo Electrónico', 'Monto $']}
                    rows={data}
                    handleRowOnClick={handleGoToDetail}
                    /* pagination={{
                        currentPage: data?.currentPage || 0,
                        totalRecords: data?.totalRecords || 0,
                        totalPages: data?.totalPages || 0,
                        handleSetPage: handlePagination,
                    }} */
                />
            </Box>
        </Stack>
    );
};
