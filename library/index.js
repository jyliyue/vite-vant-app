// 加载全局样式样式
import 'normalize.css'
import './styles/index.scss'
// 路由
import router from '@/router'
// pinia
import pinia from '@/store'

export default function setupApp(app) {
    app.use(pinia)
    app.use(router)
}
