export interface GenericResponse {
    success: boolean;
}

export interface HeaderReponse {
    code: number;
    description: string;
}

export interface PaginationBase {
    currentPage: number;
    totalRecords: number;
    totalPages: number;
}

export interface PaginationResponse<T> extends PaginationBase {
    items: Array<T>;
}
