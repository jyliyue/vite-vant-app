const server = {
    host: '0.0.0.0',
    port: 3000,
    open: true,
    proxy: {
        '/proxyApi/': {
            target: 'https://target',
            changeOrigin: true,
            rewrite: (path) => path
        }
    }
}

export default server
