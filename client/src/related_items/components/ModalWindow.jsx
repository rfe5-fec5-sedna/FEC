import React, { useEffect, useState } from 'react';
import helpers from '../helpers';

import '../styles/ModalWindow.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const ModalWindow = ({ open, onClose, currentId, productClickedId }) => {

  const outlineStar = <FontAwesomeIcon icon={emptyStar} />
  if (!open) return null;

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

  return (
    <div id="modal-window">
      Modal
      <div onClick={onClose}>{outlineStar}</div >
    </div >
  )
}

export default ModalWindow;