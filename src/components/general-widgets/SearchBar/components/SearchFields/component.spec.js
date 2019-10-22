import React from 'react';
import { shallow } from 'enzyme';

import { Component as SearchFields } from './component';

jest.mock('moment');
jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});
const componentProps = {
  getIsDayBlocked: Function.prototype,
  locationOptions: [],
  searchButton: <div />,
};

const getSearchField = otherProps =>
  shallow(<SearchFields {...componentProps} {...otherProps} />);

describe('<SearchFields />', () => {
  it('should render the right structure', () => {
    const actual = getSearchField();

    expect(actual).toMatchSnapshot();
  });
  describe('if `locationOptions` size is greater than 0', () => {
    it('should render the right structure', () => {
      const wrapper = getSearchField({ locationOptions: [{ text: 'yo' }] });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
