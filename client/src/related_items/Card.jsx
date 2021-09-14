import React from 'react';
import './styles/Card.css';

const Card = (props) => {
  return (
    <div className="Card-Component">
      <div className="product-name">{props.productName}</div>
      <div className="product-category">{props.productCategory}</div>
      <div className="product-price">{props.productPrice}</div>
    </div>
  )
}

export default Card;