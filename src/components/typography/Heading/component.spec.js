import React from 'react';
import { shallow } from 'enzyme';

import { Component as Heading } from './component';

const children = '🚸';

describe('<Heading />', () => {
  it('should render a single Semantic UI `Header` component', () => {
    const heading = shallow(<Heading>{children}</Heading>);
    const actual = heading.find('Header');
    expect(actual).toHaveLength(1);
  });

  it('should default to setting `props.as` as `h2`', () => {
    const semanticHeader = shallow(<Heading>{children}</Heading>).find(
      'Header'
    );
    const actual = semanticHeader.prop('as');
    expect(actual).toBe('h2');
  });

  it('should add set `props.as` correctly', () => {
    const TEST_SIZES = ['huge', 'large', 'medium', 'small', 'tiny'];
    TEST_SIZES.forEach(testSize => {
      const semanticHeader = shallow(
        <Heading size={testSize}>{children}</Heading>
      ).find('Header');
      const actual = semanticHeader.prop('as');
      expect(actual).toBe(`h${TEST_SIZES.indexOf(testSize) + 1}`);
    });
  });

  it('should render children', () => {
    const heading = shallow(<Heading>{children}</Heading>);
    const actual = heading.contains(children);
    expect(actual).toBe(true);
  });

  it('should have displayName `Heading`', () => {
    const actual = Heading.displayName;
    expect(actual).toBe('Heading');
  });
});
