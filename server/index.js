const express = require('express');
const { createProxyMiddleware, responseInterceptor } = require('http-proxy-middleware');
const { API_TOKEN } = require('./config.js');

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/sedna', express.static(__dirname + '/../client/dist'));


const API_SERVICE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'
const apiHeader = {
  'Authorization': API_TOKEN,
  'Accept-Encoding': 'gzip, compress, br'
};

app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});

app.use('/sedna', createProxyMiddleware({
  headers: apiHeader,
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/sedna`]: '',
  },
  selfHandleResponse: true,
  onProxyRes: responseInterceptor(async (responseBuffer, proxyRes, req, res) => {
    proxyRes.headers['accept-encoding'] = 'gzip, compress, br';
    return responseBuffer;
  })
}));


app.listen(PORT, () => {
  console.log(`Sedna test server listening at http://localhost:${PORT}`);
});