import http from '@/utils/request'

export default {
    getToken: (params) => {
        return http.get('/shareApi/test/token', params)
    }
}
