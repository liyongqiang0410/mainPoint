import request from '../libs/servers.js';

export function login(params) {
  return request({
    url: '/users/findUserByUname',
    method: 'get',
    params
  })
}

