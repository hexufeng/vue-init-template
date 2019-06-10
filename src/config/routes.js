import App from '../app'

/**
 * auth true登录才能访问，false不需要登录，默认true
 */
export default [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '/login', // 登录
        meta: { auth: false },
        component: resolve => require(['../pages/login/'], resolve)
      },
      {
        path: '/home', // 个人主页
        meta: { auth: false },
        component: resolve => require(['../pages/home/'], resolve)
      },
      {
        path: '/', // 首页
        meta: { auth: false },
        component: resolve => require(['../pages/home/'], resolve)
      },
      {
        path: '/expose/:id',
        meta: { auth: false },
        component: resolve => require(['../pages/expose/exposeDetail'], resolve)
      },
      {
        path: '/exposeone',
        meta: { auth: false },
        component: resolve => require(['../pages/expose/newExpose'], resolve)
      },
      {
        path: '*', // 其他页面，强制跳转到登录页面
        redirect: '/login'
      }
    ]
  }
]
