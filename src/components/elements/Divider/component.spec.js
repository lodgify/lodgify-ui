import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Divider } from './component';

const getDivider = props => mount(<Divider {...props} />);

describe('<Divider />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getDivider();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.hasLine === true`', () => {
    it('should render the right structure', () => {
      const actual = getDivider({ hasLine: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.size === "large"`', () => {
    it('should render the right structure', () => {
      const actual = getDivider({ size: 'large' });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Divider', () => {
    expectComponentToHaveDisplayName(Divider, 'Divider');
  });
});
