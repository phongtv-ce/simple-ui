import axios from 'axios';
import { stringify as queryStringify } from 'querystring';

const apiUrl = 'https://5f55a98f39221c00167fb11a.mockapi.io';

export function fetchBlog(query?: {
  page?: number;
  limit?: number;
  sortBy?: string;
  order?: 'asc' | 'desc';
  search?: string;
}): any {
  const queryString = queryStringify(query);
  return axios.get(`${apiUrl}/blogs?${queryString}`);
}

export function fetchBlogDetail(id: string): any {
  return axios.get(`${apiUrl}/blogs/${id}`);
}
