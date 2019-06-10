import request from '@/utils/request'

export function getDownloadList() {
  return request({
    url: '/api/downloadList',
    method: 'get'
  })
}

export function download(number) {
  window.location = process.env.BASE_API + '/files/sample' + number + '.xlsx'
  /*return request({
    url: '/files/sample' + number + '.xlsx',
    method: 'get'
  })*/
}