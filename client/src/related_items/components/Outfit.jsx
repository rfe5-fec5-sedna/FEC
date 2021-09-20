import React, { useEffect, useState } from 'react';

import helpers from '../helpers';
import Card from './Card';
import '../styles.css'

const OutfitProducts = ({ currentProductId, currentStyleId }) => {

  const inOutfitCarousel = true;

  const [outfits, setOutfits] = useState([])
  const [styleId, setStyleId] = useState(currentStyleId);
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(3);

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

  const removeOutfit = (id) => {
    const temp = outfits.slice()
    const index = temp.indexOf(id);
    temp.splice(index, 1);
    setOutfits(temp);
    if (firstDisplayed > 0) {
      setFirstDisplayed(firstDisplayed - 1);
      setLastDisplayed(lastDisplayed - 1);
    }
  }

  const handleClick = () => {
    helpers.getOutfitData(currentProductId, currentStyleId)
      .then(res => {
        for (let outfit of outfits) {
          if (JSON.stringify(outfit) === JSON.stringify(res)) return;
        }
        setOutfits(outfits => [res, ...outfits])
      })
  }

  const displayProducts = (outfits.length > 3) ? outfits.slice(firstDisplayed, lastDisplayed) : outfits;
  const lastDisplayedIndex = outfits.length - 1;
  const carouselDisplay = (lastDisplayedIndex !== lastDisplayed - 1) && outfits.length > 3;

  return (
    <>
      {firstDisplayed !== 0 && <a id="left-arrow-outfit" onClick={handleBackward}>&#10094;</a>}
      {carouselDisplay && <a id="right-arrow-outfit" onClick={handleForward}>&#10095;</a>}
      <h1 id="your-outfit-header">Your Outfit</h1>
      <div id="empty-outfit-btn" onClick={handleClick}>
        <button>Add this to your Outfit!</button>
      </div>
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