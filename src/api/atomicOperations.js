import request from '../service/request';

export function atomicOperations () {
  const url = '/atomicOperations';
  return request({
    url,
    method: 'GET'
  })
}
