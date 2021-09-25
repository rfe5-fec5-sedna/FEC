const express = require('express');
var expressStaticGzip = require("express-static-gzip");
const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_TOKEN } = require('./config.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/sedna', express.static(__dirname + '/../client/dist'));
app.use('/sedna', expressStaticGzip(path.join(__dirname, '/../client/dist')));

app.use('/', expressStaticGzip('/my/rootFolder/', {
  enableBrotli: true,
  customCompressions: [{
      encodingName: 'deflate',
      fileExtension: 'zz'
  }],
  orderPreference: ['br']
}));

const API_SERVICE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'
const apiHeader = {
  'Authorization': API_TOKEN,
  'Accept-Encoding': 'gzip,compress,br'
};

app.use('/sedna', createProxyMiddleware({
  headers: apiHeader,
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/sedna`]: '',
  },
}));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../client/dist/index.html"));
// });

app.listen(PORT, () => {
  console.log(`Sedna test server listening at http://localhost:${PORT}`);
});