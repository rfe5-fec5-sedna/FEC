import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'

import ModalWindow from './ModalWindow';
import helpers from '../helpers';
import '../styles/Card.css';

const Card = (props) => {
  const currentOverviewId = props.currentId;
  const productId = props.productId;

  const outlineStar = <FontAwesomeIcon icon={emptyStar} />
  const innerStar = <FontAwesomeIcon icon={solidStar} />

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(null);

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

  useEffect(() => {
    helpers.getProductReview(productId)
      .then(res => {
        setRating(res)
      })
  }, [productId])

  const handleClick = (e) => {
    e.preventDefault();
  }

  return (
    <div className="card-component">
      <img className="product-image" src={image} />
      <div className="card-action-button" onClick={() => setIsOpen(true)}>{outlineStar}</div>
      <h5 className="product-category">{category}</h5>
      <h5 className="product-name">{name}</h5>
      <h5 className="product-price">{price}</h5>
      <div className="product-rating">
        <Rating
          initialRating={rating}
          emptySymbol={outlineStar}
          fullSymbol={innerStar}
          readonly
        />
      </div>
      <ModalWindow currentId={currentOverviewId} productClickedId={productId} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  )
}

export default Card;