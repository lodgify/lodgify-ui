jest.mock('general-widgets/PropertySearchResult', () => {
  const { Component } = require('react');

  class PropertySearchResult extends Component {
    render() {
      return <div />;
    }
  }

  return { PropertySearchResult };
});
jest.mock('./utils/getPropertySearchResultsToDisplay');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getPropertySearchResultsToDisplay } from './utils/getPropertySearchResultsToDisplay';
import { Component as PropertySearchResultList } from './component';
import {
  propertySearchResults,
  moreThan12PropertySearchResults,
} from './mock-data/mock-data';

getPropertySearchResultsToDisplay.mockImplementation(
  (activePage, propertySearchResults) => propertySearchResults
);

const getShallowPropertySearchResultList = otherProps =>
  shallow(
    <PropertySearchResultList
      propertySearchResults={propertySearchResults}
      {...otherProps}
    />
  );
const getMountedPropertySearchResultList = otherProps =>
  mount(
    <PropertySearchResultList
      propertySearchResults={propertySearchResults}
      {...otherProps}
    />
  );

describe('<PropertySearchResultList />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getMountedPropertySearchResultList();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.propertySearchResults.length` > 12 ', () => {
    it('should render the right structure', () => {
      const actual = getMountedPropertySearchResultList({
        propertySearchResults: moreThan12PropertySearchResults,
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingPlaceholder` is true', () => {
    it('should render the right structure', () => {
      const actual = getMountedPropertySearchResultList({
        isShowingPlaceholder: true,
        propertySearchResults: [],
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.resultsCountText` is passed', () => {
    it('should render the right structure', () => {
      const resultsCountText = 'My god I love Cliff Richard';
      const actual = getMountedPropertySearchResultList({ resultsCountText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.dropdownOptions` is passed', () => {
    it('should render the right structure', () => {
      const actual = getMountedPropertySearchResultList({
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
      const actual = getMountedPropertySearchResultList({
        messageButtonText: 'Some button text',
        messageText: 'Some message text',
      });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('componentDidUpdate', () => {
    describe('if neither `state.activePage` nor `props.propertySearchResults` has changed', () => {
      it('should not call `setState`', () => {
        const propertySearchResults = [];
        const wrapper = getShallowPropertySearchResultList({
          propertySearchResults,
        });

        wrapper.instance().setState = jest.fn();
        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults }, { activePage: 1 });

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `state.activePage` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const onChange = jest.fn();
        const propertySearchResults = [];
        const wrapper = getShallowPropertySearchResultList({
          onChange,
          propertySearchResults,
        });

        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults }, { activePage: 2 });

        expect(onChange).toHaveBeenCalledWith(1);
      });

      it('should call `getPropertySearchResultsToDisplay` with the right arguments', () => {
        const propertySearchResults = [];
        const wrapper = getShallowPropertySearchResultList({
          propertySearchResults,
        });

        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults }, { activePage: 2 });

        expect(getPropertySearchResultsToDisplay).toHaveBeenCalledWith(
          1,
          propertySearchResults
        );
      });

      it('should call `setState` with the right arguments', () => {
        const propertySearchResults = [];
        const wrapper = getShallowPropertySearchResultList({
          propertySearchResults,
        });

        wrapper.instance().setState = jest.fn();
        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults }, { activePage: 2 });

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          propertySearchResultsToDisplay: propertySearchResults,
        });
      });
    });

    describe('if `props.propertySearchResults` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const onChange = jest.fn();
        const wrapper = getShallowPropertySearchResultList({
          onChange,
          propertySearchResults: [],
        });

        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults: [] }, { activePage: 1 });

        expect(onChange).toHaveBeenCalledWith(1);
      });

      it('should call `getPropertySearchResultsToDisplay` with the right arguments', () => {
        const propertySearchResults = [];
        const wrapper = getShallowPropertySearchResultList({
          propertySearchResults,
        });

        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults: [] }, { activePage: 1 });

        expect(getPropertySearchResultsToDisplay).toHaveBeenCalledWith(
          1,
          propertySearchResults
        );
      });

      it('should call `setState` with the right arguments', () => {
        const propertySearchResults = [];
        const wrapper = getShallowPropertySearchResultList({
          propertySearchResults,
        });

        wrapper.instance().setState = jest.fn();
        wrapper
          .instance()
          .componentDidUpdate({ propertySearchResults: [] }, { activePage: 1 });

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          propertySearchResultsToDisplay: propertySearchResults,
        });
      });
    });
  });

  describe('this.handleOnPageChange', () => {
    it('should call `setState` with the right arguments', () => {
      const activePage = 1;
      const wrapper = getShallowPropertySearchResultList();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().handleOnPageChange({}, { activePage });

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        activePage,
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
