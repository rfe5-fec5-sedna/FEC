const express = require('express');
const app = express();

const { router } = require('./routes.js')

const PORT = process.env.PORT || 3000;

app.use(router);

app.listen(PORT, () => {
  console.log(`Sedna test server listening at http://localhost:${PORT}`);
})