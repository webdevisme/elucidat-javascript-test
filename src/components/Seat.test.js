import React from 'react';
import renderer from 'react-test-renderer';
import Seat from './Seat';
import seatsData from '../../public/seats.json';

it('renders seat data passed to prop', () => {
  const component = renderer.create(<Seat data={seatsData[0]}></Seat>);
  
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
