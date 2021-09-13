import axios from 'axios';

const helpers = {
  getProductInfo: (id) => {
    const url = `/sedna/products/${id}`;
    return axios.get(url)
  }
}

export default helpers;