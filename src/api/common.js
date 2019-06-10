import request from '@/utils/request'

export function exposeList(callback) {
  callback(
    [
      {
        id: 123,
        title: '*ST新海',
        content: 'According to CNN, China\'s Internet censorship is considered more extensive and advanced than any other country in the world. Chinese government and authorities not only block website content, but may also monitor any individual\'s Internet access. ... Since May 2015, Chinese Wikipedia has been blocked in mainland China.'
      }
    ]
  )
}
