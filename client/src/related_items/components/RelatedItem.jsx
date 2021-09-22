import React from 'react';

import RelatedProducts from './RelatedProducts';
import OutfitProducts from './Outfit';
import '../styles.css';

const RelatedItems = ({ currentProductId, currentStyleId, handleCardClick }) => {
  return (
    <div id="related-items">
      <div id="related-carousel">
        <RelatedProducts handleCardClick={handleCardClick} currentProductId={currentProductId} />
      </div>
      <div id="outfit-carousel">
        <OutfitProducts currentProductId={currentProductId} currentStyleId={currentStyleId} />
      </div>
    </div>
  )
}

export default RelatedItems;