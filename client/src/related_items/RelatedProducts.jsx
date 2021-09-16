import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './Card';
import helpers from './helpers';
import './styles/RelatedCarousel.css'

const RelatedProducts = (props) => {
  const currentId = props.currentProductId;

  const [productId, setProductId] = useState(currentId);
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
    setProductId(currentId)
  }, [currentId]);

  useEffect(() => {
    helpers.getRelated(productId)
      .then((res) => {
        setRelatedProducts(res);
      })
  }, [productId])

  const displayProducts = (productsAmount > 3) ? relatedProducts.slice(firstDisplayed, lastDisplayed) : relatedProducts;

  console.log('related products => ', relatedProducts)
  console.log('products displayed => ', displayProducts)

  return (
    <div id="related-products" >
      <h1 id="related-product-header">Related Products</h1>
      <div id="related-cards">
        {firstDisplayed !== 0 && <a onClick={handleBackward}>&#10094;</a>}
        {lastDisplayed !== productsAmount && <a onClick={handleForward}>&#10095;</a>}
        {displayProducts.map(productId => (
          <Card key={productId} productId={productId} />
        ))}
      </div>
    </div>
  )
}

export default RelatedProducts;

