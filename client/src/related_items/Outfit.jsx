import React, { useState } from 'react';

import Card from './Card';
import './styles/OutfitCarousel.css'

const OutfitProducts = ({ currentProductId }) => {

  const [outfits, setOutfits] = useState([])
  const [firstDisplayed, setFirstDisplayed] = useState(0);
  const [lastDisplayed, setLastDisplayed] = useState(3);

  const handleBackward = () => {
    // TODO: FIX LOGIC FOR OUTFIT CAROUSEL
  }

  const handleForward = () => {
    // TODO: FIX LOGIC FOR OUTFIT CAROUSEL
  }

  const handleClick = () => {
    if (outfits.includes(currentProductId)) return
    setOutfits(outfits => [...outfits, currentProductId])
  }

  const displayProducts = (outfits.length > 3) ? outfits.slice(firstDisplayed, lastDisplayed) : outfits;

  return (
    <div id="Outfit">
      <h1 id="your-outfit-header">Your Outfit</h1>
      <div id="empty-outfit-card" onClick={handleClick}>
        <p>Add this to your Outfit!</p>
      </div>
      <div id="outfit-products">
        {firstDisplayed !== 0 && <a id="left-arrow" onClick={handleBackward}>&#10094;</a>}
        {outfits.length > 3 && <a id="right-arrow" onClick={handleForward}>&#10095;</a>}
        {displayProducts.reverse().map(productId => (
          <Card key={productId} productId={productId} />
        ))}
      </div>
    </div>
  )
}

export default OutfitProducts;