/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { cleanup, render, fireEvent } from '@testing-library/react';
 import "@testing-library/jest-dom";
 import userEvent from '@testing-library/user-event';
 import Style from '../Style_selector.jsx';
 import { Product_info1, Product_info2 } from '../Product_info.jsx';
 import App from '../App.jsx';
 import { dummyStone } from './dummyData.js';

 it('updates product information when user select a new style', () => {
   const { getByTestId } = render(<App />);
   const { getByTestId } = render(<Style />);
   const { getByTestId } = render(<Product_info1 />);



 })