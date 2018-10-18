import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FullBleed } from './component';

const props = {
  imageUrl: '🐱🐱',
};

const getFullBleed = extraProps =>
  mount(<FullBleed {...props} {...extraProps} />);

describe('<FullBleed />', () => {
  describe('by default', () => {
    it('should have the right structure', () => {
      const actual = getFullBleed();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `hasGradient` is passed', () => {
    it('should have the right structure', () => {
      const actual = getFullBleed({ hasGradient: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.children > 0`', () => {
    it('should have the right structure', () => {
      const actual = getFullBleed({ children: '🏛' });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` `FullBleed`', () => {
    expectComponentToHaveDisplayName(FullBleed, 'FullBleed');
  });
});
