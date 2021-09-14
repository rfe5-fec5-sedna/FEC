import axios from 'axios';

const helpers = {
  getRelated: (id) => {
    const url = `sedna/products/${id}/related`;
    return axios.get(url);
  }
}

export default helpers;