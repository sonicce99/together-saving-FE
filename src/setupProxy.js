const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api/", {
      target: "http://183.99.247.17:8881",
      changeOrigin: true,
    })
  );
};
