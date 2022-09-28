import { useUserStore } from '@/store/modules/user'

const whiteListPath = ['/login']

export function setupPermission(router) {
    router.beforeEach((to, from, next) => {
        // console.log('permission')
        if (isWhitePath(to)) {
            next()
        } else {
            const { token } = useUserStore()
            if (token) {
                next()
            } else {
                next({
                    path: 'login',
                    replace: true
                })
            }
        }
    })
}

function isWhitePath(route) {
    return whiteListPath.includes(route.path)
}
