import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as ReactGoogleMap } from './component';

const props = {
  hasDefaultStyles: false,
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
  latitude: 1,
  longitude: 0,
  markers: [],
};

const getReactGoogleMap = extraProps =>
  shallow(<ReactGoogleMap {...props} {...extraProps} />);

describe('<ReactGoogleMaps />', () => {
  it('should render the right structure', () => {
    const wrapper = getReactGoogleMap();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.isShowingExactLocation` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getReactGoogleMap({ isShowingExactLocation: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingApproximateLocation` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getReactGoogleMap({ isShowingApproximateLocation: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.markers` is populated', () => {
    it('should render the right structure', () => {
      const markers = [
        { component: <div />, latitude: 41.38, longitude: 2.15 },
        { component: <div />, latitude: 41.375, longitude: 2.16 },
      ];
      const wrapper = getReactGoogleMap({ markers });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` ReactGoogleMap', () => {
    expectComponentToHaveDisplayName(ReactGoogleMap, 'ReactGoogleMap');
  });
});
