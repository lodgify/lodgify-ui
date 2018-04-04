import React from 'react';
import { shallow } from 'enzyme';

import { ReactGoogleMap } from 'lib/react-google-maps';

import { Component as GoogleMap } from './component';

const props = {
  latitude: 0,
  longitude: 0,
};

const getGoogleMap = () => shallow(<GoogleMap {...props} />);

describe('<GoogleMap />', () => {
  it('should render a single `ReactGoogleMap` component', () => {
    const wrapper = getGoogleMap();
    const actual = wrapper.find(ReactGoogleMap);
    expect(actual).toHaveLength(1);
  });

  describe('the `ReactGoogleMap` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap();
      const actual = wrapper.find(ReactGoogleMap).props();
      expect(actual).toEqual(
        expect.objectContaining({
          isShowingExactMarker: false,
          isShowingVagueMarker: false,
          ...props,
        })
      );
    });
  });

  it('should have `displayName` GoogleMap', () => {
    const actual = GoogleMap.displayName;
    expect(actual).toBe('GoogleMap');
  });
});
