import axios from 'axios';

const api = {
  getReview: function (id, callback) {
    const url = `/sedna/reviews/meta/?product_id=${id}`;
    axios.get(url)
      .then((res) => {
        callback(null, res.data.ratings);
      })
      .catch((error) => {
        callback(error, null)
      })
  },

  starCalc: function (ratings) {
    var total = 0;
    var count = 0;

    for (var key in ratings) {
      total += Number(key) * ratings[key];
      count += Number(ratings[key]);
    }

    return total / count;
  },

  getCount: function (id, callback) {
    const url = `/sedna/reviews/?product_id=${id}`;
    axios.get(url)
      .then((res) => {
        callback(null, res.data.count);
      })
      .catch((error) => {
        callback(error, null)
      })
  },

  getProduct: function (id, callback) {
    const url = `/sedna/products/${id}`;
    axios.get(url)
      .then((res) => {
        callback(null, res.data);
      })
      .catch((error) => {
        callback(error, null)
      })

  },

  getStyles: function (id, callback) {
    const url = `/sedna/products/${id}/styles`;
    axios.get(url)
      .then((res) => {
        callback(null, res.data.results);
      })
      .catch((error) => {
        callback(error, null)
      })

  },

  addCart: function (id, callback) {
    const url = '/sedna/cart';
    const product = {
      sku_id: Number(id)
    }
    axios.post(url, product)
      .then((res) => {
        callback(null, res);
      })
      .then((error) => {
        callback(error, null);
      })
  }
}

export default api;
