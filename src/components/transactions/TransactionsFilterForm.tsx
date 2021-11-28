import { useState } from 'react';
import {
    FormControl,
    FormLabel,
    Select,
    Input,
    Flex,
    Box,
    Button,
    SimpleGrid
} from '../../libraries/chakra';
import { useForm } from '../../libraries/hook-form';

import { CriteriaMiniProps, TransactionFormFilterProps } from '../../types/CriteriaMiniTypes';
import { FILTERS, FilterList, getFilterList } from '../../constants';
import { mapCriteria } from '../../utils/criteria';

interface TransactionsFilterFormProps {
    handleForm: (values: CriteriaMiniProps) => void;
}

export const TransactionsFilterForm = ({ handleForm }: TransactionsFilterFormProps) => {
    const [filterType, setFilterType] = useState<string>(FILTERS.FIELD);

    const {
        handleSubmit,
        register,
        resetField,
        reset
    } = useForm<TransactionFormFilterProps>();

    const onFilterTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterType(event.target.value);
        resetField('field');
        resetField('value');
        resetField('rangeValueA');
        resetField('rangeValueB');
    };

    const onFieldChange = () => {
        resetField('rangeValueA');
        resetField('rangeValueB');
    };

    const onSubmit = (values: TransactionFormFilterProps) => {
        const criteriaValues = mapCriteria(filterType, values);
        handleForm(criteriaValues);
    };

    const clear = () => {
        reset();
        handleForm({});
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4} mb={8}>
                <Box>
                    <FormControl id="filterType">
                        <FormLabel htmlFor="filterType">Filtrar por:</FormLabel>
                        <Select value={filterType} onChange={onFilterTypeChange}>
                            {FilterList.map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="field">
                        <FormLabel htmlFor="field">
                            {filterType === FILTERS.FIELD ? 'Campo' : 'Rango'}:
                        </FormLabel>
                        <Select
                            {...register('field')}
                            onChange={onFieldChange}
                        >
                            <option key={'nothing'} value={undefined}>
                                {''}
                            </option>
                            {getFilterList(filterType).map((item) => (
                                <option key={item.value} value={item.value}>
                                    {item.name}
                                </option>
                            ))}
                        </Select>                        
                    </FormControl>
                </Box>
                {filterType === FILTERS.FIELD ? (
                    <Box>
                        <FormControl id="value">
                            <FormLabel htmlFor="value">Valor:</FormLabel>
                            <Input type="text" {...register('value')} />
                        </FormControl>
                    </Box>
                ) : null}
                {filterType === FILTERS.RANGE ? (
                    <Box>
                        <FormControl id="rangeValueA">
                            <FormLabel htmlFor="rangeValueA">Desde:</FormLabel>
                            <Input type="text" {...register('rangeValueA')} />
                        </FormControl>
                    </Box>
                ) : null}
                {filterType === FILTERS.RANGE ? (
                    <Box>
                        <FormControl id="rangeValueB">
                            <FormLabel htmlFor="rangeValueB">Hasta:</FormLabel>
                            <Input type="text" {...register('rangeValueB')} />
                        </FormControl>
                    </Box>
                ) : null}
                <Box>
                    <FormControl id="limit">
                        <FormLabel htmlFor="limit">Cantidad:</FormLabel>
                        <Select defaultValue={10} {...register('limit')}>
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                        </Select>
                    </FormControl>
                </Box>
            </SimpleGrid>

            <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                <Box>
                    <Flex h="100%" direction="column" justify="flex-end">
                        <Button type="submit" colorScheme="green">
                            Filtrar
                        </Button>
                    </Flex>
                </Box>
                <Box>
                    <Flex h="100%" direction="column" justify="flex-end">
                        <Button type="button" onClick={clear}>
                            Limpiar
                        </Button>
                    </Flex>
                </Box>
            </SimpleGrid>
        </form>
    );
};
