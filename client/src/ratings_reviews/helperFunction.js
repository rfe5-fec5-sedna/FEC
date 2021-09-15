import axios from 'axios';

const getAllData = {
  getAllReviews: (id) => {
    return axios.get(`/sedna/reviews/?product_id=${id}`)
  },

  // Rating Breakdown Data
  getAllMetaReviews: (id) => {
    return axios.get(`/sedna/reviews/meta/?product_id=${id}`);
  }
}

export default getAllData;