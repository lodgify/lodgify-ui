import React from 'react';
import { shallow } from 'enzyme';
import { GoogleMap, Marker } from 'react-google-maps';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ReactGoogleMap } from './component';

const props = {
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
  latitude: 0,
  longitude: 0,
};

const getReactGoogleMap = extraProps =>
  shallow(<ReactGoogleMap {...props} {...extraProps} />);
const getGoogleMap = extraProps =>
  getReactGoogleMap(extraProps).find(GoogleMap);

describe('<ReactGoogleMaps />', () => {
  it('should render a single react-google-maps `GoogleMap` component', () => {
    const wrapper = getReactGoogleMap();
    const actual = wrapper.find(GoogleMap);

    expect(actual).toHaveLength(1);
  });

  describe('the `GoogleMap` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap();
      const actual = wrapper.props();

      expect(actual).toEqual(
        expect.objectContaining({
          center: expect.any(Object),
          options: expect.any(Object),
        })
      );
    });
  });

  describe('if `props.isShowingExactLocation` is false', () => {
    it('should not render a `Marker`', () => {
      const wrapper = getGoogleMap();
      const actual = wrapper.find(Marker);

      expect(actual).toHaveLength(0);
    });
  });

  describe('if `props.isShowingExactLocation` is true', () => {
    it('should render a `Marker`', () => {
      const wrapper = getGoogleMap({ isShowingExactLocation: true });
      const actual = wrapper.find(Marker);

      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Marker` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap({ isShowingExactLocation: true });
      const actual = wrapper.find(Marker).props();

      expect(actual).toEqual(
        expect.objectContaining({
          position: expect.any(Object),
        })
      );
    });
  });

  describe('if `props.isShowingApproximateLocation` is false', () => {
    it('should not render a `Marker`', () => {
      const wrapper = getGoogleMap();
      const actual = wrapper.find(Marker);

      expect(actual).toHaveLength(0);
    });
  });

  describe('if `props.isShowingApproximateLocation` is true', () => {
    it('should render a `Marker`', () => {
      const wrapper = getGoogleMap({ isShowingApproximateLocation: true });
      const actual = wrapper.find(Marker);

      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Marker` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap({ isShowingApproximateLocation: true });
      const actual = wrapper.find(Marker).props();

      expect(actual).toEqual(
        expect.objectContaining({
          position: expect.any(Object),
          icon: expect.any(String),
        })
      );
    });
  });

  it('should have `displayName` ReactGoogleMap', () => {
    expectComponentToHaveDisplayName(ReactGoogleMap, 'ReactGoogleMap');
  });
});
