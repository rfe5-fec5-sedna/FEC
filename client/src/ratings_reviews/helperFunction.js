import axios from 'axios';

const getAllData = {
// API Requests
  getAllReviews: (id) => {
    return axios.get(`/sedna/reviews/?product_id=${id}`)
  },

  // Rating Breakdown Data
  getAllMetaReviews: (id) => {
    return axios.get(`/sedna/reviews/meta/?product_id=${id}`);
  },

  // Logic
  dateFormat: () => {
    let monthNames = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
    let date = new Date();
    let currentDay = date.getDate();
    let currentMonth = date.getMonth() + 1;
    let currentYear = date.getFullYear();
    let finalDate = `${monthNames[currentMonth]} ${currentDay}, ${currentYear}`;
    return finalDate;
  }

}

export default getAllData;