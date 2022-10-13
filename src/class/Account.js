import { reactive } from 'vue'
import router from '@/router'
import { useUserStore } from '@/store/modules/user'

class Account {
    constructor() {
        this.loginForm = reactive({
            account: 'admin',
            password: '123456'
        })
    }

    login = () => {
        const { setToken } = useUserStore()
        setToken('token')
        router.push({
            name: 'demo'
        })
    }
}

export default Account
