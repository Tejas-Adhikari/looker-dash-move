const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://127.0.0.1:5000', // Update with the correct URL of your Python backend
      changeOrigin: true,
    })
  );
};
