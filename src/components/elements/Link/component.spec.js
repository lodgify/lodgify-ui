import React from 'react';
import { shallow } from 'enzyme';
import Button from 'semantic-ui-react/dist/commonjs/elements/Button';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Link } from './component';

const URL = 'https://lodgify.com';
const getLink = props =>
  shallow(
    <Link {...props} href={URL}>
      Press me
    </Link>
  );

describe('<Link />', () => {
  it('should render a single Semantic UI `Button` component', () => {
    const wrapper = getLink();

    expectComponentToBe(wrapper, Button);
  });

  it('should pass the `Button` component the right props', () => {
    const wrapper = getLink().find(Button);

    expectComponentToHaveProps(wrapper, {
      as: 'a',
      href: URL,
      target: '_self',
      floated: 'left',
      onClick: Function.prototype,
    });
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should pass the `Button` component `floated="right"`', () => {
      const wrapper = getLink({ isPositionedRight: true }).find(Button);

      expectComponentToHaveProps(wrapper, { floated: 'right' });
    });
  });

  describe('if `props.willOpenInNewTab` is true', () => {
    it('should pass the `Button` component `target="_blank"`', () => {
      const wrapper = getLink({ willOpenInNewTab: true }).find(Button);

      expectComponentToHaveProps(wrapper, {
        target: '_blank',
      });
    });
  });

  it('should render the `children`', () => {
    const wrapper = getLink();

    expectComponentToHaveChildren(wrapper, 'Press me');
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Link, 'Link');
  });
});
