import axios from 'axios';

const helpers = {
  getRelated: async (id) => {
    const url = `/sedna/products/${id}/related`;
    const products = await axios.get(url);
    return products.data;
  },
  getProductData: async (id) => {
    const url = `/sedna/products/${id}`;
    const productData = await axios.get(url);
    return productData.data;
  },
  getProductImage: async (id) => {
    const url = `/sedna/products/${id}/styles`;
    const styles = await axios.get(url);
    return styles.data
  }
}

export default helpers;