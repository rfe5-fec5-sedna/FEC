import React from 'react';

import RelatedProducts from './RelatedProducts';
import OutfitProducts from './Outfit';
import './styles/RelatedItems.css';

const RelatedItems = (props) => {
  const currentProductId = props.currentProductId;

  return (
    <div id="Related-Items">
      <div id="related-carousel">
        <RelatedProducts currentProductId={currentProductId} />
      </div>
      <div id="outfit-carousel">
        <OutfitProducts currentProductId={currentProductId} />
      </div>
    </div>
  )
}

export default RelatedItems;