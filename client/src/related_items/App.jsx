import React, { useState } from 'react';

const RelatedItems = (props) => {
  const currentProduct = props.currentProduct;

  return (
    <div className="Related-Items">
      <h1>Related Items</h1>
      <h3>{currentProduct}</h3>
    </div>
  )
}

export default RelatedItems;