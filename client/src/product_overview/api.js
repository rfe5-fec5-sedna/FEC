import axios from 'axios';

const api = {
  getReview: function(id, callback) {
    const url = `/sedna/reviews/meta/?product_id=${id}`;
    axios.get(url)
      .then((res) => {
        console.log('this is res', res)
        callback(null, res.data.ratings);
      })
      .catch((error) => {
        callback(error, null)
      })
  },

  starCalc: function(ratings) {
    var total = 0;
    var length = Object.keys(ratings).length;

    for(var key in ratings) {
      total += key * ratings[key]
    }

    return total/length;
  },

  getCount: function(id, callback) {
    const url = `/sedna/reviews/?product_id=${id}`;
    axios.get(url)
      .then((res) => {
        console.log('this is res', res)
        callback(null, res.data.count);
      })
      .catch((error) => {
        callback(error, null)
      })
  }
}

export default api;
