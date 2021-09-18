import axios from 'axios';

const calculateRatings = (ratingsObj) => {
  let ratingAverage = 0;
  let totalReviews = 0;
  for (let num in ratingsObj) {
    ratingAverage += num * ratingsObj[num];
    totalReviews += ratingsObj[num]
  }
  return ratingAverage / totalReviews;
}

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
  },
  getProductReview: async (id) => {
    const url = `/sedna/reviews/meta/?product_id=${id}`;
    const ratings = await axios.get(url);
    const stars = calculateRatings(ratings.data.ratings);
    return stars;
  },
  getOutfitData: async (productId, styleId) => {
    const url = `/sedna/products/${productId}/styles`;
    const outfitStyle = await axios.get(url);

    if (styleId === '') return [productId, outfitStyle.data.results[0]];
    for (let style of outfitStyle.data.results) {
      if (style.style_id === styleId) return [productId, style];
    }
  }
}

export default helpers;