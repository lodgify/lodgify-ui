jest.mock('general-widgets/PropertySearchResult', () => {
  const { Component } = require('react');

  class PropertySearchResult extends Component {
    render() {
      return <div />;
    }
  }

  return { PropertySearchResult };
});

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PropertySearchResultList } from './component';
import {
  propertySearchResults,
  moreThan12PropertySearchResults,
} from './mock-data/mock-data';

const getPropertySearchResultList = otherProps =>
  mount(
    <PropertySearchResultList
      propertySearchResults={propertySearchResults}
      {...otherProps}
    />
  );

describe('<PropertySearchResultList />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getPropertySearchResultList();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.propertySearchResults.length` > 12 ', () => {
    it('should render the right structure', () => {
      const actual = getPropertySearchResultList({
        propertySearchResults: moreThan12PropertySearchResults,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingPlaceholder` is true', () => {
    it('should render the right structure', () => {
      const actual = getPropertySearchResultList({
        isShowingPlaceholder: true,
        propertySearchResults: [],
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.resultsCountText` is passed', () => {
    it('should render the right structure', () => {
      const resultsCountText = 'My god I love Cliff Richard';
      const actual = getPropertySearchResultList({ resultsCountText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.dropdownOptions` is passed', () => {
    it('should render the right structure', () => {
      const actual = getPropertySearchResultList({
        dropdownLabel: 'some label',
        dropdownOnChange: () => {},
        dropdownOptions: [
          {
            content: 'Price (lowest to highest)',
            text: 'Sort by price (lowest first)',
            value: 'price',
          },
        ],
        dropdownValue: 'price',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.messageText` is passed', () => {
    it('should render the right structure', () => {
      const actual = getPropertySearchResultList({
        messageButtonText: 'Some button text',
        messageText: 'Some message text',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('this.handleOnPageChange', () => {
    it('should call `setState` with the right arguments', () => {
      const activePage = 1;
      const wrapper = getPropertySearchResultList();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().handleOnPageChange({}, { activePage });

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        activePage,
        propertySearchResultsToDisplay: expect.any(Object),
      });
    });
  });

  it('should have `displayName` `PropertySearchResultList`', () => {
    expectComponentToHaveDisplayName(
      PropertySearchResultList,
      'PropertySearchResultList'
    );
  });
});
