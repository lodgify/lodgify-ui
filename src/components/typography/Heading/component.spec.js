import React from 'react';
import { shallow } from 'enzyme';
import { Header } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Heading } from './component';

const children = '🚸';

const getHeading = props => shallow(<Heading {...props}>{children}</Heading>);

describe('<Heading />', () => {
  it('should render a single Semantic UI `Header` component', () => {
    const wrapper = getHeading();

    expectComponentToBe(wrapper, Header);
  });

  it('should default to setting `props.as` as `h3`', () => {
    const semanticHeader = getHeading().find('Header');
    const actual = semanticHeader.prop('as');

    expect(actual).toBe('h3');
  });

  it('should add set `props.as` correctly', () => {
    const TEST_SIZES = ['huge', 'large', 'medium', 'small'];

    TEST_SIZES.forEach(testSize => {
      const semanticHeader = shallow(
        <Heading size={testSize}>{children}</Heading>
      ).find('Header');
      const actual = semanticHeader.prop('as');

      expect(actual).toBe(`h${TEST_SIZES.indexOf(testSize) + 1}`);
    });
  });

  it('should render children', () => {
    const heading = getHeading();
    const actual = heading.contains(children);

    expect(actual).toBe(true);
  });

  describe('if `props.hasTextShadow` is passed', () => {
    it('should set `className` to `has-text-shadow`', () => {
      const wrapper = getHeading({
        hasTextShadow: true,
      });

      expectComponentToHaveProps(wrapper, {
        className: 'has-text-shadow',
      });
    });
  });

  it('should have displayName `Heading`', () => {
    expectComponentToHaveDisplayName('Heading');
  });
});
