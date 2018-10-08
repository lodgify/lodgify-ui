import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { RoomType } from 'property-page-widgets/RoomType';

import { Component as RoomTypes } from './component';

const { roomTypes } = require('./mock-data/roomTypes');

const getRoomTypes = otherProps =>
  shallow(<RoomTypes roomTypes={roomTypes} {...otherProps} />);

describe('<FeaturedRoomTypes />', () => {
  it('should have `Fragment` component as a wrapper', () => {
    const wrapper = getRoomTypes();

    expectComponentToBe(wrapper, Fragment);
  });

  describe('the wrapping `Fragment`', () => {
    it('should render the right children', () => {
      const wrapper = getRoomTypes();

      expectComponentToHaveChildren(wrapper, RoomType, RoomType);
    });
  });

  it('should have `displayName` `RoomTypes`', () => {
    expectComponentToHaveDisplayName(RoomTypes, 'RoomTypes');
  });
});
