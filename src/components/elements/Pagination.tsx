import { Stack, Button } from '../../libraries/chakra';
import { FiArrowLeft, FiArrowRight } from '../../libraries/react-icons';
export interface PaginationProps {
    offset: number;     // current page; start in zero
    limit: number;      // increment o decrement
    handleSetPage: (page: number) => void;
    hasData: boolean;
}

export const Pagination = ({ offset, limit, handleSetPage, hasData }: PaginationProps) => {
    const setPrevPage = () => {
        let page = offset - limit;
        page = page < 0 ? 0 : page;
        handleSetPage(page);
    };

    const setNextPage = () => {
        handleSetPage(offset + limit);
    };
    
    const currentPage = (offset / limit) + 1;

    return (
        <Stack direction="row">
            <Button
                colorScheme="cyan"
                size="sm"
                leftIcon={<FiArrowLeft />}
                onClick={setPrevPage}
                isDisabled={offset === 0}
            >
                {''}
            </Button>
            <Button colorScheme="cyan" size="sm" variant="outline" disabled={true}>
                {currentPage}
            </Button>
            <Button
                colorScheme="cyan"
                size="sm"
                leftIcon={<FiArrowRight />}
                onClick={setNextPage}
                isDisabled={!hasData}
            >
                {''}
            </Button>            
        </Stack>
    );
};
