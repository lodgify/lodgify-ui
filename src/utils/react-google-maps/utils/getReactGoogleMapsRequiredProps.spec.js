import React from 'react';

import { getReactGoogleMapsRequiredProps } from './getReactGoogleMapsRequiredProps';

const usedProps = {
  apiKey: '🔑',
  containerElement: 'someElement',
  height: '📏',
};

const otherProps = {
  some: 'other',
  props: 'here',
};

describe('getReactGoogleMapsRequiredProps', () => {
  it('should return the right object', () => {
    const actual = getReactGoogleMapsRequiredProps({
      ...usedProps,
      ...otherProps,
    });

    expect(actual).toEqual(
      expect.objectContaining({
        googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${
          usedProps.apiKey
        }&v=3.exp&libraries=geometry,drawing,places`,
        loadingElement: <div style={{ height: usedProps.height }} />,
        containerElement: usedProps.containerElement,
        mapElement: <div style={{ height: usedProps.height }} />,
        ...otherProps,
      })
    );
  });
});
