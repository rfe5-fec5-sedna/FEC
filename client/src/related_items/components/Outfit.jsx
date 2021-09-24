import React, { useEffect, useState } from 'react';

import helpers from '../helpers';
import Card from './Card';
import '../styles.css'

const OutfitProducts = ({ currentProductId, currentStyleId, outfits, removeOutfit }) => {

  const inOutfitCarousel = true;

  const [styleId, setStyleId] = useState(currentStyleId);
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(4);

  useEffect(() => {
    setStyleId("")
  }, [currentProductId])

  useEffect(() => {
    setStyleId(currentStyleId)
  }, [currentStyleId])

  const handleBackward = () => {
    setFirstDisplayed(firstDisplayed - 1);
    setLastDisplayed(lastDisplayed - 1);
  }

  const handleForward = () => {
    setLastDisplayed(lastDisplayed + 1);
    setFirstDisplayed(firstDisplayed + 1);
  }

  const displayProducts = (outfits.length > 4) ? outfits.slice(firstDisplayed, lastDisplayed) : outfits;
  const lastDisplayedIndex = outfits.length - 1;
  const carouselDisplay = (lastDisplayedIndex !== lastDisplayed - 1) && outfits.length > 4;
  const image = <img id="desert-tree" src="https://images.unsplash.com/photo-1543964198-d54e4f0e44e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80" />

  const emptyCarousel = (outfits.length === 0) ? image : null;

  return (
    <>
      {emptyCarousel}
      {firstDisplayed !== 0 && <a id="left-arrow-outfit" onClick={handleBackward}>&#10094;</a>}
      {carouselDisplay && <a id="right-arrow-outfit" onClick={handleForward}>&#10095;</a>}
      <h1 id="your-outfit-header">YOUR OUTFIT</h1>
      <div id="outfit-products">
        {displayProducts.map(productId => (
          < Card
            key={productId[1].style_id}
            cardProductId={productId[0]}
            styleId={productId[1]}
            removeOutfit={removeOutfit}
            inOutfitCarousel={inOutfitCarousel}
          />
        ))}
      </div>
    </>
  )
}

export default OutfitProducts;