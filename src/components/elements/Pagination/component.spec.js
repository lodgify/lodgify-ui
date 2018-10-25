import React from 'react';
import { shallow } from 'enzyme';
import { default as SemanticPagination } from 'semantic-ui-react/dist/commonjs/addons/Pagination';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { nextItem, pageItem, prevItem } from './navigationMarkup';
import { Component as Pagination } from './component';

const getPagination = () => shallow(<Pagination totalPages={5} />);

describe('<Pagination />', () => {
  it('should render a single Semantic UI `Pagination` component', () => {
    const wrapper = getPagination();

    expectComponentToBe(wrapper, SemanticPagination);
  });

  it('should pass the right props to the Semantic UI `Pagination` component', () => {
    const wrapper = getPagination();

    expectComponentToHaveProps(wrapper, {
      boundaryRange: 10,
      defaultActivePage: 1,
      firstItem: null,
      lastItem: null,
      nextItem: nextItem,
      onPageChange: expect.any(Function),
      pageItem: pageItem,
      prevItem: prevItem,
      secondary: true,
      totalPages: 5,
    });
  });

  it('should have displayName `Pagination`', () => {
    expectComponentToHaveDisplayName(Pagination, 'Pagination');
  });
});
