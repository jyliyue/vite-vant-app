import { defineConfig } from 'vite'
import resolve from './build/resolve'
import plugins from './build/plugins'
import server from './build/server'
import css from './build/css'

// https://vitejs.dev/config/
export default ({ mode }) => {
    return defineConfig({
        resolve,
        plugins: plugins(mode),
        css,
        server
    })
}
