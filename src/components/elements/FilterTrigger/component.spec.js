import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as FilterTrigger } from './component';

const getFilterTrigger = props =>
  mount(<FilterTrigger {...props}>Press me</FilterTrigger>);

describe('<FilterTrigger />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getFilterTrigger();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `hasFiltersSelected` === true', () => {
    it('should render the right structure', () => {
      const actual = getFilterTrigger({ hasFiltersSelected: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(FilterTrigger, 'FilterTrigger');
  });
});
