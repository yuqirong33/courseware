import request from '../utils/request';

export function getUsersList({page = 1,limit = 5}) {
  return request(`/api/users?_page=${page}&_limit=${limit}`);
}
