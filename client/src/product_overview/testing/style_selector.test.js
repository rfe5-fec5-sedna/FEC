/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { dummyStyle } from './dummyData.js';
 import { cleanup, render, fireEvent } from '@testing-library/react';
 import Style from '../style_selector.jsx';
 import "@testing-library/jest-dom";
 import userEvent from '@testing-library/user-event'


 afterEach(cleanup);

 it("renders all styles of the selected product", () => {
   const style = [dummyStyle.results];
   const { getAllByRole } = render (<Style stylesIn4={style} />);
   expect(getAllByRole('radio')).toBeTruthy();
   expect(getAllByRole('radio')).toHaveLength(2);

 });

it('uncheck the first style when the second style is clicked & uncheck the second style when first style is selected', () => {
  const style = [dummyStyle.results];
  const { getByTestId} = render (<Style stylesIn4={style} />);

  //style 2 is not selected by default
  expect(getByTestId(style[0][1].style_id).checked).toBeFalsy();
  //fire onChange event to style 2
  fireEvent.change(getByTestId(style[0][1].style_id), {target: {checked: true}});
  //check if style 1 is unselected and style 2 is selected
  expect(getByTestId(style[0][0].style_id).checked).toBeFalsy();
  expect(getByTestId(style[0][1].style_id).checked).toBeTruthy();
  //fire onChange event to style 1
  fireEvent.change(getByTestId(style[0][0].style_id), {target: {checked: true}});
  //check if style 2 is unselected automatically
  expect(getByTestId(style[0][1].style_id).checked).toBeFalsy();

});


