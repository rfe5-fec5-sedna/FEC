import React, { useEffect, useState } from 'react';

import helpers from './helpers';
import './styles/Card.css';

const Card = (props) => {
  const productId = props.productId;

  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    helpers.getProductData(productId)
      .then(res => {
        setName(res.name);
        setCategory(res.category);
        setPrice(res.default_price);
      })
  }, [productId])

  useEffect(() => {
    helpers.getProductImage(productId)
      .then(res => {
        setImage(res.results[0].photos[0].thumbnail_url)
      })
  }, [productId])

  return (
    <div className="Card-Component">
      <img className="product-image" src={image} />
      <h5 className="product-name">{name}</h5>
      <h5 className="product-category">{category}</h5>
      <h5 className="product-price">{price}</h5>
    </div>
  )
}

export default Card;