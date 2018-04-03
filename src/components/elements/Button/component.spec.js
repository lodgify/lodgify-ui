import React from 'react';
import { shallow } from 'enzyme';
import { Icon } from 'semantic-ui-react';

import { Component as Button } from './component';

const getButton = props => shallow(<Button {...props}>Press me</Button>);

describe('<Button />', () => {
  it('should render a single Semantic UI `Button` component', () => {
    const button = getButton();
    const actual = button.find('Button').length;
    expect(actual).toBe(1);
  });

  it('should pass the `Button` component the right props', () => {
    const button = getButton();
    const actual = button.find('Button').props();
    expect(actual).toEqual(
      expect.objectContaining({
        disabled: false,
        floated: 'left',
        loading: false,
        circular: false,
      })
    );
  });

  it('should pass the `Button` component `props.isRounded` as `circular`', () => {
    const button = getButton({ isRounded: true });
    const actual = button.find('Button').props();
    expect(actual).toEqual(
      expect.objectContaining({
        circular: true,
      })
    );
  });

  describe('if `props.isPositionedRight` is true', () => {
    it('should pass the `Button` component `floated="right"`', () => {
      const button = getButton({ isPositionedRight: true });
      const actual = button.find('Button').prop('floated');
      expect(actual).toBe('right');
    });
  });

  describe('if `props.isSecondary` is true', () => {
    it('should pass the `Button` component `secondary={true}`', () => {
      const button = getButton({ isSecondary: true });
      const actual = button.find('Button').prop('secondary');
      expect(actual).toBe(true);
    });
  });

  describe('if `props.size` is informed', () => {
    it('should pass the `Button` component `size={size}`', () => {
      const button = getButton({ size: 'massive' });
      const actual = button.find('Button').prop('size');
      expect(actual).toBe('massive');
    });
  });

  describe('if `props.icon` is informed', () => {
    it('should render an <Icon /> if is string', () => {
      const button = getButton({ icon: 'world' });
      const actual = button.find(Icon).length;
      expect(actual).toBe(1);
    });

    it('should render with `has-icon` class name', () => {
      const button = getButton({ icon: 'world' });
      const actual = button.find('.has-icon');
      expect(actual).toHaveLength(1);
    });
  });

  describe('if `props.hasShadow` is informed', () => {
    it('should render with `has-shadow` class name', () => {
      const button = getButton({ hasShadow: true });
      const actual = button.find('.has-shadow');
      expect(actual).toHaveLength(1);
    });
  });

  it('should render the `children`', () => {
    const button = getButton();
    const actual = button.contains('Press me');
    expect(actual).toBe(true);
  });
});
