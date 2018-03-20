import React from 'react';
import { shallow } from 'enzyme';

import { Component as Image } from './component';

describe('<Image />', () => {
  it('should render a single Lodgify UI `Container` component', () => {
    const image = shallow(<Image />);
    expect(image.exists()).toBeTruthy();
  });
});
