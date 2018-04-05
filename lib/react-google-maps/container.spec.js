import React from 'react';
import { mount } from 'enzyme';

import { Container } from './container';
import { reactGoogleMapsRequiredProps } from './constants';

const props = { some: 'props' };

const getContainer = () => mount(<Container {...props} />);

describe('<ReactGoogleMaps />', () => {
  it('should render the HOCs in the right order', () => {
    const wrapper = getContainer();
    const actual = wrapper.name();
    expect(actual).toBe(
      'withProps(withScriptjs(withGoogleMap(ReactGoogleMap)))'
    );
  });

  it('should pass the right props down the chain', () => {
    const wrapper = getContainer();
    const actual = wrapper.childAt(0).props();
    expect(actual).toEqual(
      expect.objectContaining({
        ...props,
        ...reactGoogleMapsRequiredProps,
      })
    );
  });
});
