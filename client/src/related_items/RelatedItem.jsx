import React, { useEffect, useState } from 'react';

import RelatedProducts from './RelatedProducts';
import Outfit from './Outfit';
import './styles/RelatedItems.css';

const RelatedItems = (props) => {
  const currentProductId = props.currentProductId;

  return (
    <div id="Related-Items">
      <RelatedProducts currentProductId={currentProductId} />
      <Outfit />
    </div>
  )
}

export default RelatedItems;