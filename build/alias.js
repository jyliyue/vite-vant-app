import { resolve } from 'path'

const pathResolve = (dir) => {
    return resolve(__dirname, dir)
}

const alias = {
    '~': pathResolve('../library'),
    '@': pathResolve('../src')
}

export default alias
