jest.mock('uniqid');
jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as InnerContent } from './component';

const props = {
  headingText: 'heading text',
  searchBarGetIsDayBlocked: Function.prototype,
  searchBarLocationOptions: [{ text: '1', value: '1' }],
  searchBarOnChangeInput: Function.prototype,
  searchBarOnSubmit: Function.prototype,
  searchBarSearchButton: <button>search button</button>,
};

describe('InnerContent', () => {
  it('should render the right structure', () => {
    const actual = mount(<InnerContent {...props} />);

    expect(actual).toMatchSnapshot();
  });

  it('should have the displayName `InnerContent`', () => {
    expectComponentToHaveDisplayName(InnerContent, 'InnerContent');
  });
});
