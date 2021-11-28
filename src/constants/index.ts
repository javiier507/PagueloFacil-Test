type ReferenceListProp<T> = {
    value: T;
    name: string;
};


/**
 *  Filters
 */

export enum FILTERS {
    FIELD = 'FIELD',
    RANGE = 'RANGE'
};

export const FILTERS_CHOICES = {
    [FILTERS.FIELD]: 'Campo',
    [FILTERS.RANGE]: 'Rango',
}

export const FilterList: Array<ReferenceListProp<string>> = Object.entries(
    FILTERS_CHOICES,
).map(([value, name]) => ({
    value,
    name,
}));

/**
 *  Filters Fields
 */

export enum FILTER_FIELDS {
    CODE =  'codOper',
    EMAIL = 'email',
    CARD_TYPE = 'cardType'
};

export const FILTER_FIELDS_CHOICES = {
    [FILTER_FIELDS.CODE]: 'Código',
    [FILTER_FIELDS.EMAIL]: 'Correo',
    [FILTER_FIELDS.CARD_TYPE]: 'Tipo de Tarjeta',
};

export const FilterFieldsList: Array<ReferenceListProp<string>> = Object.entries(
    FILTER_FIELDS_CHOICES,
).map(([value, name]) => ({
    value,
    name,
}));

/**
 *  Filters Ranges
 */

export enum FILTER_RANGES {
    DATE =  'dateTms',
    AMOUNT = 'amount',
};

export const FILTER_RANGES_CHOICES = {
    [FILTER_RANGES.DATE]: 'Fecha',
    [FILTER_RANGES.AMOUNT]: 'Monto',
}

export const FilterRangesList: Array<ReferenceListProp<string>> = Object.entries(
    FILTER_RANGES_CHOICES,
).map(([value, name]) => ({
    value,
    name,
}));

/**
 *  Get Filters
 */

export function getFilterList(filter: string): Array<ReferenceListProp<string>> {
    const filters = {
        [FILTERS.FIELD.toString()]: FilterFieldsList,
        [FILTERS.RANGE.toString()]: FilterRangesList,
    }
    return filters[filter];
}