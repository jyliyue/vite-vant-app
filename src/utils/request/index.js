import axios from 'axios'
import {
    BASE_URL,
    CODE_MESSAGE,
    STATUS_NAME,
    REQUEST_TIMEOUT,
    CONTENT_TYPE,
    SUCCESS_CODE,
    MESSAGE_NAME,
    TOKEN_NAME
} from './config'
import { useUserStore } from '@/store/modules/user'

/**
 * axios 请求拦截器配置
 * @param config
 * @returns {any}
 */
const requestConf = (config) => {
    const userStore = useUserStore()
    const { token } = userStore
    if (token) config.headers[TOKEN_NAME] = token
    return config
}

/**
 * axios 响应拦截器配置
 * @param config 请求配置
 * @param data response数据
 * @param status HTTP status
 * @param statusText HTTP status text
 * @returns {Promise<*|*>}
 */
const responseConf = ({ data, status, statusText }) => {
    let code = data?.[STATUS_NAME] | status
    // 判断编码是否为正常操作
    if (SUCCESS_CODE.indexOf(code) !== -1) {
        code = 200
    }
    // 正常状态处理
    if (code === 200) {
        return data
    }
    // 其他异常处理
    // 若 data.msg 存在，覆盖默认提醒消息
    const errMsg = data?.[MESSAGE_NAME] || CODE_MESSAGE[code] || statusText

    console.log(errMsg)
    return Promise.reject(data)
}

/**
 * @description http 初始化
 */
const http = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
    headers: {
        'Content-Type': CONTENT_TYPE
    }
})

/**
 * @description http 请求拦截器
 */
http.interceptors.request.use(requestConf, (error) => {
    return Promise.reject(error)
})

/**
 * @description http 响应拦截器
 */
http.interceptors.response.use(responseConf, (error) => {
    return Promise.reject(error)
})

export default http
