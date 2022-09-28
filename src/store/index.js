/**
 * @description 导入所有 pinia 模块，请勿修改。
 */
// store 持久化
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
