const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:8888',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
  app.use(
    '/api1',
    createProxyMiddleware({
      target: 'http://localhost:8889',
      changeOrigin: true,
      pathRewrite: {
        '^/api1': ''
      }
    })
  )
}