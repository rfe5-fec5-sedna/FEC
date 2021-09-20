/**
 * @jest-environment jsdom
 */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import { Product_info1, Product_info2 } from '../product_info.jsx';
import "@testing-library/jest-dom";

afterEach(cleanup);

it("renders product_info1 correctly without sales price", () => {
  const price = [100, null];
  const { getByTestId, getByText, queryByTestId } = render(<Product_info1 category="Jackets" title="Camo" price={price}/>);

  expect(getByTestId('category')).toHaveTextContent("Jackets");
  expect(getByTestId('name')).toHaveTextContent("Camo");
  expect(getByTestId('regularPrice')).toBeTruthy();
  expect(queryByTestId('salePrice')).toBeNull();
});

it("renders product_info1 correctly with sales price", () => {
  const price = [100, 80];
  const { getByTestId, getByText, queryByTestId } = render(<Product_info1 category="Jackets" title="Camo" price={price}/>);

  expect(getByTestId('category')).toHaveTextContent("Jackets");
  expect(getByTestId('name')).toHaveTextContent("Camo");
  expect(getByTestId('salePrice')).toBeTruthy();
  expect(getByTestId('regularSale')).toHaveTextContent("Regular Price: $100");
  expect(queryByTestId('regularPrice')).toBeNull();
});

it("renders product_info2 correctly", () => {
  const productInfo = {
    slogan: "GMO free",
    description: "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings"
  };

  const { getByTestId } = render(<Product_info2 slogan={productInfo.slogan} description={productInfo.description}/>);

  expect(getByTestId('sloganDescription')).toBeTruthy();

});
