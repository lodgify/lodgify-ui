import React from 'react';
import { shallow } from 'enzyme';
import Header from 'semantic-ui-react/dist/commonjs/elements/Header';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Heading } from './component';

const children = '🚸';

describe('<Heading />', () => {
  it('should render a single Semantic UI `Header` component', () => {
    const wrapper = shallow(<Heading>{children}</Heading>);

    expectComponentToBe(wrapper, Header);
  });

  it('should default to setting `props.as` as `h3`', () => {
    const semanticHeader = shallow(<Heading>{children}</Heading>).find(
      'Header'
    );
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

  describe('if `props.isColorInverted` is `true`', () => {
    it('should have the right props', () => {
      const wrapper = shallow(<Heading isColorInverted>Woopty doo</Heading>);

      expectComponentToHaveProps(wrapper, { inverted: true });
    });
  });

  describe('if `props.textAlign` is set', () => {
    it('should have the right props', () => {
      const textAlign = 'center';
      const wrapper = shallow(
        <Heading isColorInverted textAlign={textAlign}>
          Woopty doo
        </Heading>
      );

      expectComponentToHaveProps(wrapper, { textAlign });
    });
  });

  it('should render children', () => {
    const heading = shallow(<Heading>{children}</Heading>);
    const actual = heading.contains(children);

    expect(actual).toBe(true);
  });

  it('should have displayName `Heading`', () => {
    expectComponentToHaveDisplayName('Heading');
  });
});
