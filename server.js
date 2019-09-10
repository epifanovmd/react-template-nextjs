/* eslint-disable no-console */

const express = require('express');
const next = require('next');

const getProxyUrl = (env) => {
  switch (env) {
    case "development":
      return "https://jsonplaceholder.typicode.com/";
    case "production":
      return "https://jsonplaceholder.typicode.com/";
    default:
      return "https://jsonplaceholder.typicode.com/";
  }
};

const proxy = {
  '/api': {
    target: getProxyUrl(process.env.NODE_ENV),
    pathRewrite: {'^/api': '/'},
    changeOrigin: true
  },
  // '/api': {
  //   target: getProxyUrl(process.env.NODE_ENV) + "api",
  //   pathRewrite: {'^/api': '/'},
  //   changeOrigin: true
  // },
  // '/images': {
  //   target: getProxyUrl(process.env.NODE_ENV) + "images",
  //   pathRewrite: {'^/images/': '/'},
  //   changeOrigin: true
  // }
};

const port = parseInt(process.env.PORT, 10) || 3000;
const env = process.env.NODE_ENV;
const dev = env !== 'production';
const app = next({
  dir: '.', // base directory where everything is, could move to src later
  dev
});

const handle = app.getRequestHandler();

let server;
app
  .prepare()
  .then(() => {
    server = express();

    // Set up the proxy.
    if (proxy) {
      const proxyMiddleware = require('http-proxy-middleware');
      Object.keys(proxy).forEach(function (context) {
        server.use(proxyMiddleware(context, proxy[context]))
      })
    }

    // Default catch-all handler to allow Next.js to handle all other routes
    server.all('*', (req, res) => handle(req, res));

    server.listen(port, err => {
      if (err) {
        throw err
      }
      console.log(`> Ready on http://localhost:${port}/ [${env}]`)
    })
  })
  .catch(err => {
    console.log('An error occurred, unable to start the server');
    console.log(err)
  });
