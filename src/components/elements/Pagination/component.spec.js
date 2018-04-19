import React from 'react';
import { shallow } from 'enzyme';

import { nextItem, pageItem, prevItem } from './navigationMarkup';
import { Component as Pagination } from './component';

describe('<Pagination />', () => {
  it('should render a single Semantic UI `Pagination` component', () => {
    const pagination = shallow(<Pagination totalPages={5} />);
    const actual = pagination.find('Pagination');
    expect(actual).toHaveLength(1);
  });

  it('should pass the right props to the Semantic UI `Pagination` component', () => {
    const pagination = shallow(<Pagination totalPages={5} />);
    const actual = pagination.find('Pagination').props();
    expect(actual).toEqual(
      expect.objectContaining({
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
      })
    );
  });

  it('should have displayName `Pagination`', () => {
    const actual = Pagination.displayName;
    expect(actual).toBe('Pagination');
  });
});
