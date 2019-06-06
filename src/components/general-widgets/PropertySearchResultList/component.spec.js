import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PropertySearchResultList } from './component';
import { propertySearchResults } from './mock-data/mock-data';

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

  it('should have `displayName` `PropertySearchResultList`', () => {
    expectComponentToHaveDisplayName(
      PropertySearchResultList,
      'PropertySearchResultList'
    );
  });
});
