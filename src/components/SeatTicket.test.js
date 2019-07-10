import React from 'react';
import renderer from 'react-test-renderer';
import SeatTicket from './SeatTicket';
import seatsData from '../../public/seats.json';

it('renders ticket when seat data passed to prop', () => {
  const component = renderer.create(<SeatTicket seat={seatsData[0]}></SeatTicket>);
  
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});
