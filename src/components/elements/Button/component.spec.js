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
        floated: 'left',
        loading: false,
      })
    );
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should pass the `Button` component `floated="right"`', () => {
      const textInput = shallow(<Button isPositionedRight>Press me</Button>);
      const actual = textInput.find('Button').prop('floated');
      expect(actual).toBe('right');
    });
  });

  it('should render the `children`', () => {
    const textInput = shallow(<Button>Press me</Button>);
    const actual = textInput.contains('Press me');
    expect(actual).toBe(true);
  });
});
