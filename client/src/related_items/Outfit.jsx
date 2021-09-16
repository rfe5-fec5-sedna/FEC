import React, { useState } from 'react';

import Card from './Card';
import './styles/OutfitCarousel.css'

const OutfitProducts = ({ currentProductId }) => {

  const [outfits, setOutfits] = useState([])

  const handleClick = () => {
    if (outfits.includes(currentProductId)) return
    setOutfits(outfits => [...outfits, currentProductId])
  }

  return (
    <div id="Outfit">
      <h1 id="your-outfit-header">Your Outfit</h1>
      <div id="empty-outfit-card" onClick={handleClick}>
        <p>Add this to your Outfit!</p>
      </div>
      <div id="outfit-cards">
        {outfits.reverse().map(productId => (
          <Card key={productId} productId={productId} />
        ))}
      </div>
    </div>
  )
}

export default OutfitProducts;