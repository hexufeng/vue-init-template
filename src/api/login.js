import request from '@/utils/request'

export function login(user) {
  /*if (user.username !== 'admin' || user.password !== 'admin1') {
    return Promise.reject("用户名或者密码错误")
  } else {
    return Promise.resolve('1111adada111')
  }*/
  return request({
    url: '/api/login',
    method: 'post',
    user
  })
}
