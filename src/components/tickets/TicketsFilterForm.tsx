import {
    FormControl,
    FormLabel,
    Select,
    Flex,
    Box,
    Button,
    SimpleGrid,
} from '../../libraries/chakra';
import { useForm } from '../../libraries/hook-form';

import { CriteriaMiniProps } from '../../types/CriteriaMiniTypes';

interface TicketsFilterFormProps {
    handleForm: (values: CriteriaMiniProps) => void;
}

export const TicketsFilterForm = ({ handleForm }: TicketsFilterFormProps) => {
    const { handleSubmit, register } = useForm<CriteriaMiniProps>();

    const onSubmit = (values: CriteriaMiniProps) => {
        handleForm(values);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={4}>
                <Box>
                    <FormControl id="filter">
                        <FormLabel htmlFor="filter">Filtrar por:</FormLabel>
                        <Select defaultValue={'AVAILABLE'} {...register('filter')}>
                            <option value="AVAILABLE">Disponibles</option>
                            <option value="OPEN">Abiertos</option>
                            <option value="RESOLVED">Resueltos</option>
                            <option value="ALL">Todos</option>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <FormControl id="limit">
                        <FormLabel htmlFor="limit">Cantidad:</FormLabel>
                        <Select defaultValue={'20'} {...register('limit')}>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                            <option value="50">50</option>
                        </Select>
                    </FormControl>
                </Box>
                <Box>
                    <Flex h="100%" direction="column" justify="flex-end">
                        <Button type="submit" colorScheme="blue">
                            Aplicar
                        </Button>
                    </Flex>
                </Box>
            </SimpleGrid>
        </form>
    );
};
