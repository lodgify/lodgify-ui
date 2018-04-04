import React from 'react';
import { shallow } from 'enzyme';
import { GoogleMap, Marker, Circle } from 'react-google-maps';

import { Component as ReactGoogleMap } from './component';

const props = {
  isShowingExactMarker: false,
  isShowingVagueMarker: false,
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
          center: { lat: props.latitude, lng: props.longitude },
          options: expect.any(Object),
        })
      );
    });
  });

  describe('if `props.isShowingExactMarker` is false', () => {
    it('should not render a `Marker`', () => {
      const wrapper = getGoogleMap();
      const actual = wrapper.find(Marker);
      expect(actual).toHaveLength(0);
    });
  });

  describe('if `props.isShowingExactMarker` is true', () => {
    it('should render a `Marker`', () => {
      const wrapper = getGoogleMap({ isShowingExactMarker: true });
      const actual = wrapper.find(Marker);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Marker` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap({ isShowingExactMarker: true });
      const actual = wrapper.find(Marker).props();
      expect(actual).toEqual(
        expect.objectContaining({
          position: { lat: props.latitude, lng: props.longitude },
        })
      );
    });
  });

  describe('if `props.isShowingVagueMarker` is false', () => {
    it('should not render a `Circle`', () => {
      const wrapper = getGoogleMap();
      const actual = wrapper.find(Circle);
      expect(actual).toHaveLength(0);
    });
  });

  describe('if `props.isShowingVagueMarker` is true', () => {
    it('should render a `Circle`', () => {
      const wrapper = getGoogleMap({ isShowingVagueMarker: true });
      const actual = wrapper.find(Circle);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Circle` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap({ isShowingVagueMarker: true });
      const actual = wrapper.find(Circle).props();
      expect(actual).toEqual(
        expect.objectContaining({
          center: { lat: props.latitude, lng: props.longitude },
          options: expect.any(Object),
        })
      );
    });
  });

  it('should have `displayName` ReactGoogleMap', () => {
    const actual = ReactGoogleMap.displayName;
    expect(actual).toBe('ReactGoogleMap');
  });
});
