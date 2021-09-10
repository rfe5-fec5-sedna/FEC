const express = require('express');
const router = express.Router()

router.route('/sedna')
  .get((req, res, next) => {
    res.send('GET')
  })
  .post((req, res, next) => {
    res.send('POST')
  })
  .put((req, res, next) => {
    res.send('PUT')
  })
  .delete((req, res, next) => {
    res.send('DELETE')
  })

module.exports = {
  router
}