const routes = [
    {
        path: '/',
        redirect: '/demo'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/common/login.vue'),
        meta: {
            title: '登录',
            keepAlive: false
        }
    },
    {
        path: '/demo',
        name: 'demo',
        component: () => import('@/views/demo/demo.vue'),
        meta: {
            title: 'Demo',
            keepAlive: true
        }
    },
    {
        path: '/list',
        name: 'list',
        component: () => import('@/views/demo/list.vue'),
        meta: {
            title: 'list',
            keepAlive: true
        }
    },
    {
        path: '/tabList',
        name: 'tabList',
        component: () => import('@/views/demo/tabList.vue'),
        meta: {
            title: 'tabList',
            keepAlive: true
        }
    }
]

export default routes
