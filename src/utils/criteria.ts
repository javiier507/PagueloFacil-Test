import { CriteriaMiniProps, TransactionFormFilterProps } from '../types/CriteriaMiniTypes';
import { FILTERS, FILTER_RANGES } from '../constants';

export function mapCriteria(type: string, values: TransactionFormFilterProps): CriteriaMiniProps {
    let filter: string = '';

    if (type === FILTERS.FIELD && values.field && values.value) {
        filter = `${values.field}::${values.value}`;
    } else if (type === FILTERS.RANGE) {
        const prefix = `${values.field}$bt`;
        if (values.field === FILTER_RANGES.AMOUNT) {
            filter = `${prefix}${values.rangeValueA}::${values.rangeValueB}`;
        } else if (values.field === FILTER_RANGES.DATE) {
            filter = `${prefix}${values.rangeValueA}T00:00:00::${values.rangeValueB}T23:59:59`;
        }
    }

    const response: CriteriaMiniProps = {
        param: type === FILTERS.FIELD ? 'filter' : 'conditional',
        filter,
        limit: values.limit,
    };
    return response;
}
