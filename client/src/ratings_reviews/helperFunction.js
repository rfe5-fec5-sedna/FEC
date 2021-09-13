import axios from 'axios';

const getAllData = {
  getAllReviews: (id) => {
    // return axios.get(`/sedna/reviews/?product_id=${id}`)
    return axios.get(`/sedna/reviews/?product_id=37311`)
  }
}

export default getAllData;