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
  describe('componentDidUpdate', () => {
    describe('if `props.activePage` has not changed', () => {
      it('should not call `setState`', () => {
        const activePage = 999;
        const wrapper = getShallowPropertySearchResultList({ activePage });

        wrapper.instance().setState = jest.fn();
        wrapper.instance().componentDidUpdate({ activePage }, {});

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `props.activePage` has changed', () => {
      it('should call `setState` with the right arguments', () => {
        const activePage = 999;
        const wrapper = getShallowPropertySearchResultList({ activePage });

        wrapper.instance().setState = jest.fn();
        wrapper.instance().componentDidUpdate({ activePage: 888 }, {});

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          activePage,
        });
      });
    });

    describe('if `state.activePage` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const activePage = 999;
        const onChange = jest.fn();
        const wrapper = getShallowPropertySearchResultList({
          activePage,
          onChange,
        });

        wrapper
          .instance()
          .componentDidUpdate({ activePage }, { activePage: 1 });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `state.activePage` has changed', () => {
      it('should call `setState` with the right arguments', () => {
        const activePage = 999;
        const onChange = jest.fn();
        const wrapper = getShallowPropertySearchResultList({
          activePage,
          onChange,
        });

        wrapper
          .instance()
          .componentDidUpdate({ activePage }, { activePage: 2 });

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

    describe('if `props.activePage` is defined', () => {
      it('should render the right structure', () => {
        const actual = getMountedPropertySearchResultList({
          activePage: 12000,
        });

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
