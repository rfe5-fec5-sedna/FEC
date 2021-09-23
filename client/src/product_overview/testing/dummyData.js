const dummyStyle = {
  product_id: "1",
  results: [
    {
      style_id: 1,
      name: "Forest Green & Black",
      original_price: "140",
      sale_price: "0",
      "default?": true,
      photos: [
        {
          thumbnail_url: "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          url: "urlplaceholder/style_1_photo_number.jpg",
        },
        {
          thumbnail_url: "urlplaceholder/style_1_photo_number_thumbnail.jpg",
          url: "urlplaceholder/style_1_photo_number.jpg",
        },
      ],
      skus: {
        37: {
          quantity: 8,
          size: "XS",
        },
        38: {
          quantity: 16,
          size: "S",
        },
        39: {
          quantity: 17,
          size: "M",
        },
      },
    },
    {
      style_id: 2,
      name: "Desert Brown & Tan",
      original_price: "140",
      sale_price: "0",
      "default?": false,
      photos: [
        {
          thumbnail_url: "urlplaceholder/style_2_photo_number_thumbnail.jpg",
          url: "urlplaceholder/style_2_photo_number.jpg",
        },
      ],
      skus: {
        37: {
          quantity: 8,
          size: "XS",
        },
        38: {
          quantity: 16,
          size: "S",
        },
        39: {
          quantity: 17,
          size: "M",
        },
      },
    },
  ],
};

const dummyReview = {
  product_id: "37715",
  ratings: {
    1: "7",
    2: "4",
    3: "5",
    4: "9",
    5: "1",
  },
  recommended: {
    false: "7",
    true: "19",
  },
  characteristics: {
    Fit: {
      id: 126377,
      value: "2.4615384615384615",
    },
    Length: {
      id: 126378,
      value: "2.3076923076923077",
    },
    Comfort: {
      id: 126379,
      value: "2.9615384615384615",
    },
    Quality: {
      id: 126380,
      value: "2.6538461538461538",
    },
  },
};

export {
  dummyStyle,
  dummyReview
 };
