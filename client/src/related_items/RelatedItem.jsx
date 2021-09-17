import React from 'react';

import RelatedProducts from './RelatedProducts';
import Outfit from './Outfit';
import './styles/RelatedItems.css';

const RelatedItems = (props) => {
  const currentProductId = props.currentProductId;

  return (
    <div id="Related-Items">
      <div id="related-carousel">
        <RelatedProducts currentProductId={currentProductId} />
      </div>
      <div id="outfit-carousel">
        <Outfit />
      </div>
    </div>
  )
}

export default RelatedItems;