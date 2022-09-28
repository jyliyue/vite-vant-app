/**
 * @description: 缓存控制
 */

export const useKeepAliverStore = defineStore('keepAliver', {
    state: () => ({
        caches: [],
        scrollList: new Map()
    }),
    getters: {},
    actions: {
        add(name) {
            if (!this.caches.includes(name)) {
                this.caches.push(name)
            }
        },
        remove(name) {
            this.caches = this.caches.filter((item) => item !== name)
        },
        clear() {
            this.caches = []
        }
    }
})
