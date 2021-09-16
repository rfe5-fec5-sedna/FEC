import React, { useEffect, useState } from 'react';
import helpers from './helpers';

const ModalWindow = (currentId, productClickedId) => {

  const [currFeatures, setCurrFeatures] = useState(null);
  const [clickedFeatures, setClickedFeatures] = useState(null);
  const commonFeatures = [];

  useEffect(() => {
    helpers.getProductData(currentId)
      .then((res) => {
        setCurrFeatures(res.features);
      })
  }, [currentId])

  useEffect(() => {
    helpers.getProductData(productClickedId)
      .then((res) => {
        setClickedFeatures(res.features)
      })
  }, [productClickedId])

  // Render common features
  // Display checkmark for that product having that feature

  return (
    <div id="modal-window">
    </div>
  )
}

export default ModalWindow;