import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Icon } from './component';

const props = {
  color: 'green',
  hasBorder: true,
  isCircular: true,
  isColorInverted: true,
  isDisabled: true,
  size: 'tiny',
  some: 'otherProps',
};

const getIcon = extraProps => shallow(<Icon {...props} {...extraProps} />);

describe('<Icon />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getIcon();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `labelText` is passed', () => {
    it('should render the right structure', () => {
      const actual = getIcon({
        labelText: 'hello world',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `labelWeight` and `labelText` is passed', () => {
    it('should render the right structure', () => {
      const actual = getIcon({ labelText: 'someLabel', labelWeight: 'heavy' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isReversed` is true', () => {
    it('should render the right structure', () => {
      const actual = getIcon({ labelText: 'somelabel', isLabelLeft: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isButton` is true', () => {
    it('should render the right structure', () => {
      const actual = getIcon({ isButton: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName `Icon`', () => {
    expectComponentToHaveDisplayName(Icon, 'Icon');
  });
});
