import React from 'react';
import { shallow } from 'enzyme';

import { Component as Link } from './component';

describe('<Link />', () => {
  it('should render a single Semantic UI `Link` component', () => {
    const textInput = shallow(<Link>Press me</Link>);
    const actual = textInput.find('Link').length;
    expect(actual).toBe(1);
  });

  it('should pass the `Link` component the right props', () => {
    const textInput = shallow(<Link>Press me</Link>);
    const actual = textInput.find('Link').props();
    expect(actual).toEqual(
      expect.objectContaining({
        floated: 'left',
      })
    );
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should pass the `Link` component `floated="right"`', () => {
      const textInput = shallow(<Link isPositionedRight>Press me</Link>);
      const actual = textInput.find('Link').prop('floated');
      expect(actual).toBe('right');
    });
  });

  it('should render the `children`', () => {
    const textInput = shallow(<Link>Press me</Link>);
    const actual = textInput.contains('Press me');
    expect(actual).toBe(true);
  });
});
