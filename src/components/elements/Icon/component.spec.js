import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Paragraph } from 'typography/Paragraph';

import { Component as Icon } from './component';

const props = {
  color: 'green',
  isCircular: true,
  isColorInverted: true,
  isDisabled: true,
  size: 'tiny',
  some: 'otherProps',
};

const getIcon = extraProps => shallow(<Icon {...props} {...extraProps} />);

describe('<Icon />', () => {
  it('should render a `i.icon` element', () => {
    const wrapper = getIcon();
    const actual = wrapper.is('i.icon');
    expect(actual).toBe(true);
  });

  describe('the `i.icon` element', () => {
    it('should get the right props', () => {
      const wrapper = getIcon();
      const { color, size } = props;
      expectComponentToHaveProps(wrapper, {
        className: `icon ${color} ${size} circular inverted grey inverted`,
        some: 'otherProps',
      });
    });

    it('should have the right children', () => {
      const wrapper = getIcon();
      expectComponentToHaveChildren(wrapper, 'svg');
    });

    describe('if `props.label` is passed', () => {
      it('should have the right children', () => {
        const wrapper = getIcon({ label: 'someLabel' });
        expectComponentToHaveChildren(wrapper, 'svg', Paragraph);
      });
    });
  });

  describe('the `svg` element', () => {
    const getSvg = () => getIcon().find('svg');

    it('should get the right props', () => {
      const wrapper = getSvg();
      expectComponentToHaveProps(wrapper, {
        viewBox: '0 0 24 24',
      });
    });

    it('should have the right children', () => {
      const wrapper = getSvg();
      expectComponentToHaveChildren(wrapper, 'path');
    });
  });

  describe('the `path` element', () => {
    it('should get the right props', () => {
      const wrapper = getIcon().find('path');
      expectComponentToHaveProps(wrapper, {
        d: expect.any(String),
        fill: 'currentColor',
      });
    });
  });

  describe('the `Paragraph` component', () => {
    it('should have the right children', () => {
      const wrapper = getIcon({ label: 'someLabel' }).find(Paragraph);
      expectComponentToHaveChildren(wrapper, 'someLabel');
    });
  });

  it('should have displayName `Icon`', () => {
    const actual = Icon.displayName;
    expect(actual).toBe('Icon');
  });
});
