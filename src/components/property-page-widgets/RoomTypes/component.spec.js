jest.mock('react-image-gallery', () => {
  const { Component } = require('react');

  class ImageGallery extends Component {
    render() {
      return <div />;
    }
  }

  return ImageGallery;
});

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

  describe('if `isShowingPlaceholder` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getRoomTypes({ isShowingPlaceholder: true });

      expect(wrapper).toMatchSnapshot();
    });

    describe('if `roomTypes.length` is `0`', () => {
      it('should render the right structure', () => {
        const wrapper = getRoomTypes({
          isShowingPlaceholder: true,
          roomTypes: [],
        });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  it('should have `displayName` `RoomTypes`', () => {
    expectComponentToHaveDisplayName(RoomTypes, 'RoomTypes');
  });
});
