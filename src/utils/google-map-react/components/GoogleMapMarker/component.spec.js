import React from 'react';
import { shallow } from 'enzyme';

import { Component as GoogleMapMarker } from './component';

describe('GoogleMapMarker', () => {
  it('should render the right structure', () => {
    const wrapper = shallow(
      <GoogleMapMarker
        imageSrc="some imageSrc"
        style={{ transform: 'some transform' }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
