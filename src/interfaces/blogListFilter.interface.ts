export interface IBlogListFilter {
  page: number;
  limit: number;
  sortBy: string;
  order: string;
  search?: string;
}
