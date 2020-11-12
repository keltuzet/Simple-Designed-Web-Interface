export interface Pagination {
  page: number;
  pageSize: number;
}

export interface PaginationResponse<T> extends Pagination {
  totalCount: number;
  items: T[];
}
