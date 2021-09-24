import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import helpers from '../helpers';
import '../styles.css';

const RelatedProducts = ({ currentProductId, handleCardClick }) => {

  const inRelatedCarousel = true;

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(4);

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
      .catch(error => {
        console.error(error);
      })
  }, [currentProductId])

  const displayProducts = (productsAmount > 4) ? relatedProducts.slice(firstDisplayed, lastDisplayed) : relatedProducts;

  return (
    <>
      <h1 id="related-product-header">RELATED PRODUCTS</h1>
      {firstDisplayed !== 0 && <a id="left-arrow" onClick={handleBackward}>&#10094;</a>}
      {lastDisplayed !== productsAmount && <a id="right-arrow" onClick={handleForward}>&#10095;</a>}
      <div id="related-cards">
        {displayProducts.map(productId => (
          <Card
            key={productId}
            cardProductId={productId}
            currentProductId={currentProductId}
            handleCardClick={handleCardClick}
            inRelatedCarousel={inRelatedCarousel}
          />
        ))}
      </div>
    </>
  )
}

export default RelatedProducts;