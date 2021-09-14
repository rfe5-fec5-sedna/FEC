import axios from 'axios';

const getAllData = {
  getAllReviews: (id) => {
    return axios.get(`/sedna/reviews/?product_id=${id}`)
  }
}

export default getAllData;