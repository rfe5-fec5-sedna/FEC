/**
 * @jest-environment jsdom
 */
 import React from 'react';
 import { dummyStyle } from './dummyData.js';
 import { cleanup, render } from '@testing-library/react';
 import Style from '../style_selector.jsx';
 import "@testing-library/jest-dom";

 afterEach(cleanup);

 it("renders all styles of the selected product", () => {
   const style = [dummyStyle.results];
   const { getAllByRole } = render (<Style stylesIn4={style} />);
   expect(getAllByRole('radio')).toBeTruthy();
   expect(getAllByRole('radio')).toHaveLength(2);

 })



