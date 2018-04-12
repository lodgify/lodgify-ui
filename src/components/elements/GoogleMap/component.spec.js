import React from 'react';
import { shallow } from 'enzyme';
import { Card } from 'semantic-ui-react';

import { ReactGoogleMap } from 'lib/react-google-maps';
import { expectComponentToHaveProps } from 'lib/expect-helpers';

import { Component as GoogleMap } from './component';

const props = {
  latitude: 0,
  longitude: 0,
};

const getGoogleMap = () => shallow(<GoogleMap {...props} />);

describe('<GoogleMap />', () => {
  it('should render a single `ReactGoogleMap` component', () => {
    const wrapper = getGoogleMap();
    const actual = wrapper.is(ReactGoogleMap);
    expect(actual).toBe(true);
  });

  describe('the `ReactGoogleMap` component', () => {
    it('should get the right props', () => {
      const wrapper = getGoogleMap();
      expectComponentToHaveProps(wrapper, {
        apiKey: 'AIzaSyADAwsct9hJOd8t4ljkqGvo59nvTkBZh3Q',
        containerElement: <Card fluid />,
        height: '400px',
        isShowingExactLocation: false,
        isShowingApproximateLocation: false,
        ...props,
      });
    });
  });

  it('should have `displayName` GoogleMap', () => {
    const actual = GoogleMap.displayName;
    expect(actual).toBe('GoogleMap');
  });
});
