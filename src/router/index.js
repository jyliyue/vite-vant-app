import { createRouter, createWebHashHistory } from 'vue-router'
import { setupKeepAliver } from './guards/setupKeepAliver'
import { setupPermission } from './guards/setupPermission'
import routes from './routes'

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

setupPermission(router)
setupKeepAliver(router)

export default router
