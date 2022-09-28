import { useKeepAliverStore } from '@/store/modules/keepAliver'

export function setupKeepAliver(router) {
    router.beforeEach((to, from, next) => {
        // console.log('keepAliver')
        if (to.meta.keepAlive) {
            const { add } = useKeepAliverStore()
            add(to.name)
        }
        next()
    })
}
