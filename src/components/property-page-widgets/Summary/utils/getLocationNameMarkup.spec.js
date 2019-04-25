import React from 'react';
import { shallow } from 'enzyme';

import { getLocationNameMarkup } from './getLocationNameMarkup';

const locationName = 'Alpha-Centauri';

const getMarkupAsRenderedComponent = () =>
  shallow(<div>{getLocationNameMarkup(locationName)}</div>).children();

describe('getLocationNameMarkup', () => {
  it('should render the right structure', () => {
    const wrapper = getMarkupAsRenderedComponent();

    expect(wrapper).toMatchSnapshot();
  });
});
