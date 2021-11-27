import { Stack, Button } from '../../libraries/chakra';
import { FiArrowLeft, FiArrowRight } from '../../libraries/react-icons';

import { PaginationBase } from '../../types/GenericTypes';

// the currentPage start in zero

export interface PaginationProps extends PaginationBase {
    handleSetPage: (page: number) => void;
}

export const Pagination = ({ currentPage, totalPages, handleSetPage }: PaginationProps) => {
    const setFirstPage = () => {
        handleSetPage(0);
    };

    const setPrevPage = () => {
        let page = currentPage - 1;
        page = page < 0 ? 0 : page;
        handleSetPage(page);
    };

    const setNextPage = () => {
        let page = currentPage + 1;
        page = page >= totalPages ? totalPages - 1 : page;
        handleSetPage(page);
    };

    const setLastPage = () => {
        handleSetPage(totalPages - 1);
    };

    return (
        <Stack direction="row">
            <Button
                colorScheme="cyan"
                size="sm"
                onClick={setFirstPage}
                disabled={currentPage === 0}
            >
                {1}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                leftIcon={<FiArrowLeft />}
                onClick={setPrevPage}
                disabled={currentPage === 0}
            >
                {''}
            </Button>
            <Button colorScheme="cyan" size="sm" variant="outline" disabled={true}>
                {currentPage + 1}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                leftIcon={<FiArrowRight />}
                onClick={setNextPage}
                disabled={currentPage === totalPages - 1}
            >
                {''}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                onClick={setLastPage}
                disabled={currentPage === totalPages - 1}
            >
                {totalPages}
            </Button>
        </Stack>
    );
};
