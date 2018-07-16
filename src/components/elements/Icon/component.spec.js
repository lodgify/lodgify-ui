import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
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
    expectComponentToBe(wrapper, 'i.icon');
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

    describe('if `props.isReversed` is true', () => {
      it('should correctly render the label on the left side of the icon', () => {
        const wrapper = getIcon({ label: 'somelabel', isLabelLeft: true });
        expectComponentToHaveChildren(wrapper, Paragraph, 'svg');
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
    const getIconWithLabel = props =>
      getIcon({ label: 'someLabel', ...props }).find(Paragraph);

    it('should have the right children', () => {
      const wrapper = getIconWithLabel();
      expectComponentToHaveChildren(wrapper, 'someLabel');
    });

    describe('if `props.labelWeight` is passed', () => {
      it('should have the right props', () => {
        const wrapper = getIconWithLabel({
          labelWeight: 'heavy',
        });
        expectComponentToHaveProps(wrapper, { weight: 'heavy' });
      });
    });
  });

  it('should have displayName `Icon`', () => {
    expectComponentToHaveDisplayName(Icon, 'Icon');
  });
});
