import React from 'react';
import renderer from 'react-test-renderer';
import SeatSelector from './SeatSelector';
import seatsData from '../../public/seats.json';

it('renders seats data passed to prop', () => {
  const component = renderer.create(<SeatSelector seats={seatsData}></SeatSelector>);
  
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
