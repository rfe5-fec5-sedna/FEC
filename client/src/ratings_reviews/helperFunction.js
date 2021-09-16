import axios from 'axios';

const getAllData = {
// API Requests
  getAllReviews: (id) => {
    return axios.get(`/sedna/reviews/?product_id=${id}`)
  },

  // Sorting Data
  getAllSortOptions: (id, sortOption) => {
    return axios.get(`/sedna/reviews/?product_id=${id}&sort=${sortOption}`)
  },

  // Rating Breakdown Data
  getAllMetaReviews: (id) => {
    return axios.get(`/sedna/reviews/meta/?product_id=${id}`);
  },

  // Review Tile Logic
  reviewListLength: (list, sortingOption) => {
    if (list.length === 1) {
      return `${list.length} review, sorted by ${sortingOption}`
    } else if (list.length > 1) {
      return `${list.length} reviews, sorted by ${sortingOption}`
    } else if (list.length === 0) {
      return `Sorry, there are no reviews for this product.`
    }
  },

  dateFormat: (reviewDate) => {
    let monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    let date = new Date(reviewDate);
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    let finalDate = `${monthNames[currentMonth]} ${currentDay}, ${currentYear}`;
    return finalDate;
  },

  summaryFormat: (summaryString) => {
    return summaryString.length > 60 ? summaryString.slice(0, 57) + '...' : summaryString;
  },

  bodyFormat: (bodyText) => {
    // TODO "Show More"
    if (bodyText.length > 250) {
      bodyText.slice(0, 247) + '...';
    } else {
      return bodyText;
    }
  },

  reviewRecommend: (recommendBoolean) => {
    return recommendBoolean ? 'I recommend this product' : '';
  },

  responseFormat: (responseText) => {
    // TODO
    if (responseText === null) {
      return '';
    } else {
      return `Response
      ${responseText}`;
    }
  }

}

export default getAllData;