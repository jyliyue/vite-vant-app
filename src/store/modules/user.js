/**
 * @description: 用户信息
 */

export const useUserStore = defineStore('user', {
    // 开启数据持久化
    persist: true,
    state: () => ({
        token: 'token'
    }),
    getters: {},
    actions: {
        setToken() {
            this.token = 'admin'
        }
    }
})
