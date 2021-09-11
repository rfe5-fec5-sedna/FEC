const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_TOKEN } = require('./config.js');

const app = express();
const PORT = process.env.PORT || 3000;
app.use('/sedna',express.static(__dirname + '/../client/dist'));


const API_SERVICE_URL = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfe'
const apiHeader = {
  'Authorization': API_TOKEN
};

app.use('/sedna', createProxyMiddleware({
  headers: apiHeader,
  target: API_SERVICE_URL,
  changeOrigin: true,
  pathRewrite: {
    [`^/sedna`]: '',
  },
}));

app.listen(PORT, () => {
  console.log(`Sedna test server listening at http://localhost:${PORT}`);
});