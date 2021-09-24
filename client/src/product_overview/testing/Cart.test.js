/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { cleanup, render, fireEvent, screen } from '@testing-library/react';
 import "@testing-library/jest-dom";
 import userEvent from '@testing-library/user-event';
 import Cart from '../Cart.jsx';
 import { dummyStone } from './dummyData.js';

it('user will receive notification to select size if they did not make selection before', () => {

  const skus = dummyStone.results[0].skus;
  render(<Cart  skus={skus} />);
  const button =screen.getByText('ADD TO BAG');
  userEvent.click(button);
  const notification = screen.getByText("Please Select Size");
  expect(notification).toBeTruthy();

})