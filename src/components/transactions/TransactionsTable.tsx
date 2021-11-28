import { Table, Thead, Tbody, Tr, Th, Td, Stack, Box, Text } from '../../libraries/chakra';

import { Transaction } from '../../types/TransactionTypes';
import { Pagination, PaginationProps } from '../elements/Pagination';
import { Message } from '../elements/Message';

interface TransactionsTableProps {
    columns: Array<string>;
    rows: Array<Transaction>;
    handleRowOnClick: (code: string) => void;
    pagination?: PaginationProps;
}

export const TransactionsTable = ({
    columns,
    rows = [],
    handleRowOnClick,
    pagination,
}: TransactionsTableProps) => {
    return (
        <Stack>
            <Box overflowX="scroll">
                <Table variant="simple">
                    <Thead>
                        <Tr>
                            {columns.map((item) => (
                                <Th key={item}>{item}</Th>
                            ))}
                        </Tr>
                    </Thead>
                    <Tbody>
                        {rows.map((item) => (
                            <Tr
                                key={item.codOper}
                                _hover={{
                                    backgroundColor: 'gray.50',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleRowOnClick(item.codOper)}
                            >
                                <Td>{item.dateTms}</Td>
                                <Td>{item.codOper}</Td>
                                <Td>{item.status}</Td>
                                <Td>
                                    <Text>{item.cardholderFullName}</Text>
                                    <Text>{item.email}</Text>
                                    <Text>{`${item.cardType} ${item.displayCardNum || ''} ${
                                        item.fraudInfo ? `Score: ${item.fraudInfo.risk_score}` : ''
                                    }`}</Text>
                                </Td>
                                <Td>{item.amount}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </Box>
            {!pagination?.hasData ? (
                <Box py={4}>
                    <Message status="info" text="No hay datos para mostrar" />
                </Box>
            ) : null}
            {pagination ? (
                <Box py={4}>
                    <Pagination {...pagination} />
                </Box>
            ) : null}
        </Stack>
    );
};
