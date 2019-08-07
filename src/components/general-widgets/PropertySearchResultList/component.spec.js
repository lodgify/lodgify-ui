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
jest.mock('./utils/getActivePage');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getActivePage } from './utils/getActivePage';
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
  describe('componentDidUpdate', () => {
    it('should call `getActivePage` with the right arguments', () => {
      const wrapper = getShallowPropertySearchResultList();
      const previousPropsActivePage = 666;
      const previousStateActivePage = 999;

      wrapper
        .instance()
        .componentDidUpdate(
          { activePage: previousPropsActivePage },
          { activePage: previousStateActivePage }
        );

      expect(getActivePage).toHaveBeenCalledWith(
        previousPropsActivePage,
        previousStateActivePage
      );
    });

    describe('if `activePage` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getShallowPropertySearchResultList({
          onChange,
        });

        getActivePage.mockReturnValueOnce(1);
        onChange.mockClear();
        wrapper.instance().componentDidUpdate({}, {});

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `activePage` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const onChange = jest.fn();
        const wrapper = getShallowPropertySearchResultList({
          onChange,
        });

        getActivePage.mockReturnValueOnce(2);
        onChange.mockClear();
        wrapper.instance().componentDidUpdate({}, {});

        expect(onChange).toHaveBeenCalledWith(1);
      });
    });
  });

  describe('handleOnPageChange', () => {
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

  describe('render', () => {
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
  });

  it('should have `displayName` `PropertySearchResultList`', () => {
    expectComponentToHaveDisplayName(
      PropertySearchResultList,
      'PropertySearchResultList'
    );
  });
});
