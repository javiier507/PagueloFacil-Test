export interface CriteriaMiniProps {
    filter?: string;
    limit?: number;
    offset?: number;
}

export interface TransactionFormFilterProps {
    field: string;
    value?: string;
    rangeValueA?: string;
    rangeValueB?: string;
    limit: number;
}
