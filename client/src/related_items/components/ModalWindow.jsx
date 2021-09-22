import React, { useEffect, useState } from 'react';
import helpers from '../helpers';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import '../styles.css';
import { faBriefcaseMedical } from '@fortawesome/free-solid-svg-icons';

const ModalWindow = ({ open, onClose, currentOverviewId, cardProductId }) => {
  if (!open) return null;

  const outlineStar = <FontAwesomeIcon icon={emptyStar} />

  const [features, setFeatures] = useState([]);
  const [currentFeatures, setCurrentFeatures] = useState([]);
  const [clickedFeatures, setClickedFeatures] = useState([]);

  const [currImage, setCurrImage] = useState('');
  const [clickedImage, setClickedImage] = useState('');
  const [currName, setCurrName] = useState('');
  const [clickedName, setClickedName] = useState('');

  useEffect(() => {
    (async () => {
      const current = await helpers.getProductData(currentOverviewId);
      const clicked = await helpers.getProductData(cardProductId);
      const leftImage = await helpers.getProductImage(currentOverviewId)
      const rightImage = await helpers.getProductImage(cardProductId)

      setCurrName(current.name)
      setClickedName(clicked.name)
      setCurrImage(leftImage.results[0].photos[0].thumbnail_url)
      setClickedImage(rightImage.results[0].photos[0].thumbnail_url)

      current.features.forEach(feature => {
        setFeatures(features => [...features, feature])
        const value = (feature.value === null) ? 'Not Available' : feature.value
        setCurrentFeatures(currentFeatures => [...currentFeatures, value]);
      })
      clicked.features.forEach(feature => {
        setFeatures(features => [...features, feature])
        const value = (feature.value === null) ? 'Not Available' : feature.value
        setClickedFeatures(clickedFeatures => [...clickedFeatures, value]);
      })

    })();

  }, [open])

  return (
    <div id="modal-window">
      {/* <img id="left-image" src={currImage}></img> */}
      <h1 id="left-name">{currName}</h1>
      <div id="left-values">
        {currentFeatures.map(value => {
          return (<h3 key={value}>{value}</h3>)
        })}
      </div>
      <div id="common-features">
        {features.map((feature, index) =>
          return (
          <h3 key={index}>{feature.feature}</h3>
        )
        })}
      </div>
      {/* <img id="right-image" src={clickedImage}></img> */}
      <h1 id="right-name">{clickedName}</h1>
      <div id="right-values">
        {clickedFeatures.map(value => {
          return (<h3 key={value}>{value}</h3>)
        })}
      </div>
      <div id="close-btn" onClick={onClose}>{outlineStar}</div >
    </div >
  )
}

export default ModalWindow;