import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import helpers from './helpers';
import './styles/RelatedCarousel.css'

const RelatedProducts = (props) => {
  const currentId = props.currentProductId;

  const [productId, setProductId] = useState(currentId);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    setProductId(currentId)
  }, [currentId]);

  // useEffect(() => {
  //   helpers.getRelated(productId)
  //     .then((res) => {
  //       setRelatedProducts(res);
  //     })
  // }, [productId])

  return (
    <div id="related-products" >
      <h1 id="related-product-header">Related Products</h1>
      <div id="related-cards">
        {relatedProducts.map(productId => (
          <Card key={productId} productId={productId} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts;