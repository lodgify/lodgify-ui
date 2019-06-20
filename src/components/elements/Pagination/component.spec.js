import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Pagination } from './component';

const getPagination = extraProps =>
  mount(<Pagination totalPages={5} {...extraProps} />);

describe('<Pagination />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getPagination();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingPageNumbers` is true', () => {
    it('should render the right structure', () => {
      const actual = getPagination({ isShowingPageNumbers: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName `Pagination`', () => {
    expectComponentToHaveDisplayName(Pagination, 'Pagination');
  });
});
