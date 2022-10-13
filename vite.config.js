import { defineConfig, loadEnv } from 'vite'
import resolve from './build/resolve'
import plugins from './build/plugins'
import server from './build/server'
import css from './build/css'

// https://vitejs.dev/config/
export default ({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return defineConfig({
        base: env.VITE_PUBLIC_PATH,
        resolve,
        plugins: plugins(env),
        css,
        server
    })
}
