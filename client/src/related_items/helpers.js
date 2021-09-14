import axios from 'axios';

const helpers = {
  getRelated: async (id) => {
    const url = `/sedna/products/${id}/related`;
    const products = await axios.get(url);
    return products;
  },
  getProductsData: async (relatedProducts) => {
    const relatedProductsData = [];
    for await (let productId of relatedProducts) {
      const url = `/sedna/products/${productId}`;
      try {
        const data = await axios.get(url);
        relatedProductsData.push(data.data)
      } catch (error) {
        console.error(error);
      }
    }
    return relatedProductsData
  }
}

export default helpers;