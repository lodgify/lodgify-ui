import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as RoomTypes } from './component';

const { roomTypes } = require('./mock-data/roomTypes');

const getRoomTypes = otherProps =>
  mount(<RoomTypes roomTypes={roomTypes} {...otherProps} />);

describe('<RoomTypes />', () => {
  it('should render the right structure', () => {
    const wrapper = getRoomTypes();

    expect(wrapper).toMatchSnapshot();
  });

  it('should have `displayName` `RoomTypes`', () => {
    expectComponentToHaveDisplayName(RoomTypes, 'RoomTypes');
  });
});
