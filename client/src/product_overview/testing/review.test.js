/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { dummyReview } from './dummyData.js';
 import { starCalc } from '../api.js';
 import {cleanup, render} from '@testing-library/react';
 import Review from '../review.jsx';
 import "@testing-library/jest-dom";

 afterEach(cleanup);

 it("Hide the review section when there is no review", () => {

  const { queryByTestId, getByTestId } = render (<Review count={0} rating = {0} />);

  expect(queryByTestId('ratings')).toBeNull();
  expect(queryByTestId('reviewCount')).toBeNull();
  expect(queryByTestId('noRatings')).toBeTruthy();
 });

 it("Render correctly when there are reviews", () => {

  const { getByText } = render (<Review count={4} rating = {5} />);

  expect(getByText('Read all 4 reviews')).toBeInTheDocument();
 })