import React from 'react';
import { shallow } from 'enzyme';

import { Component as Button } from './component';

describe('<Button />', () => {
  it('should render a single Semantic UI `Button` component', () => {
    const textInput = shallow(<Button>Press me</Button>);
    const actual = textInput.find('Button').length;
    expect(actual).toBe(1);
  });

  it('should pass the `Button` component the right props', () => {
    const textInput = shallow(<Button>Press me</Button>);
    const actual = textInput.find('Button').props();
    expect(actual).toEqual(
      expect.objectContaining({
        disabled: false,
        loading: false,
      })
    );
  });

  it('should render the `children`', () => {
    const textInput = shallow(<Button>Press me</Button>);
    const actual = textInput.contains('Press me');
    expect(actual).toBe(true);
  });
});
