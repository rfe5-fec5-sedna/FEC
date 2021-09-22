import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons'
import { faTimesCircle as closeX } from '@fortawesome/free-regular-svg-icons'

import ModalWindow from './ModalWindow';
import helpers from '../helpers';
import '../styles.css';

const Card = ({ currentProductId, cardProductId, styleId, inRelatedCarousel, inOutfitCarousel, removeOutfit, handleCardClick }) => {

  const outlineStar = <FontAwesomeIcon icon={emptyStar} />
  const innerStar = <FontAwesomeIcon icon={solidStar} />
  const closeIcon = <FontAwesomeIcon icon={closeX} />

  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [price, setPrice] = useState(null);
  const [image, setImage] = useState(null);
  const [rating, setRating] = useState(null);

  if (inRelatedCarousel) {
    useEffect(() => {
      helpers.getProductData(cardProductId)
        .then(res => {
          setName(res.name);
          setCategory(res.category);
          setPrice(res.default_price);
        })
    }, [currentProductId])
    useEffect(() => {
      helpers.getProductImage(cardProductId)
        .then(res => {
          setImage(res.results[0].photos[0].thumbnail_url)
        })
    }, [cardProductId])
    useEffect(() => {
      helpers.getProductReview(cardProductId)
        .then(res => {
          setRating(res)
        })
    }, [cardProductId])
  } else {
    const price = styleId.sale_price ? styleId.sale_price : styleId.original_price;

    useEffect(() => {
      helpers.getProductData(cardProductId)
        .then(res => {
          setCategory(res.category)
          setName(`${styleId.name}, ${res.name}`);
          setPrice(price)
          setImage(styleId.photos[0].thumbnail_url);
        })
    }, [styleId])
    useEffect(() => {
      helpers.getProductReview(cardProductId)
        .then(res => {
          setRating(res)
        })
    }, [cardProductId])
  }

  // This checks if the Card component is inside of the Related Products carousel
  const renderModal = (inRelatedCarousel === true)
    ? <ModalWindow currentOverviewId={currentProductId} cardProductId={cardProductId} open={isOpen} onClose={() => setIsOpen(false)} />
    : null

  // If the card is in RP carousel, render star as action button, else, render X
  const actionButton = (inRelatedCarousel === true)
    ? <div id="related-action-button" onClick={() => setIsOpen(true)}>{outlineStar}</div>
    : <div id="outfit-action-button" onClick={() => removeOutfit(cardProductId)}>{closeIcon}</div>

  return (
    <div className="card-component">
      <div className="upper-part">
        <img onClick={() => { handleCardClick(cardProductId) }} className="product-image" src={image} />
        {actionButton}
      </div>
      <div className="lower-part">
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
      </div>
      {renderModal}
    </div>
  )
}

export default Card;