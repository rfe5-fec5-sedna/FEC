import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import helpers from '../helpers';
import '../styles/RelatedCarousel.css'

const RelatedProducts = ({ currentProductId }) => {

  const inRelatedCarousel = true;

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(3);

  const productsAmount = relatedProducts.length;

  const handleBackward = () => {
    setFirstDisplayed(firstDisplayed - 1);
    setLastDisplayed(lastDisplayed - 1);
  }

  const handleForward = () => {
    setLastDisplayed(lastDisplayed + 1);
    setFirstDisplayed(firstDisplayed + 1);
  }

  useEffect(() => {
    helpers.getRelated(currentProductId)
      .then((res) => {
        setRelatedProducts(res);
      })
  }, [currentProductId])

  const displayProducts = (productsAmount > 3) ? relatedProducts.slice(firstDisplayed, lastDisplayed) : relatedProducts;

  return (
    <div id="related-products" >
      <h1 id="related-product-header">Related Products</h1>
      <div id="related-cards">
        {firstDisplayed !== 0 && <a id="left-arrow" onClick={handleBackward}>&#10094;</a>}
        {lastDisplayed !== productsAmount && <a id="right-arrow" onClick={handleForward}>&#10095;</a>}
        {displayProducts.map(productId => (
          <Card
            key={productId}
            cardProductId={productId}
            currentProductId={currentProductId}
            inRelatedCarousel={inRelatedCarousel}
          />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts;