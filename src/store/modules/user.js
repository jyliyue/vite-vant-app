/**
 * @description: 用户信息
 */

export const useUserStore = defineStore('user', {
    // 开启数据持久化
    persist: true,
    state: () => ({
        token: 'token',
        count: 1
    }),
    getters: {
        double() {
            return this.count * 2
        }
    },
    actions: {
        setToken(data) {
            this.token = data
        }
    }
})
