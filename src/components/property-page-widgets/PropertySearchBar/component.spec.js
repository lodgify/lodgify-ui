import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Button } from 'elements/Button';
import { SearchBar } from 'general-widgets/SearchBar';
import { VerticalGutters } from 'layout/VerticalGutters';

import { Component as PropertySearchBar } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const getPropertySearchBar = props =>
  shallow(
    <PropertySearchBar
      guestsOptions={guestsOptions}
      locationOptions={locationOptions}
      {...props}
    />
  );
const getSearchBar = props => getPropertySearchBar(props).find(SearchBar);

describe('<PropertySearchBar />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getPropertySearchBar();

    expectComponentToBe(wrapper, VerticalGutters);
  });
  describe('the `VerticalGutters` component', () => {
    it('should have `SearchBar` as its only children', () => {
      const wrapper = getPropertySearchBar();

      expectComponentToHaveChildren(wrapper, SearchBar);
    });
  });

  describe('the `SearchBar` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar();
      const actual = wrapper.props();

      expect(actual).toEqual(
        expect.objectContaining({
          guestsOptions,
          locationOptions,
          searchButton: <Button isRounded>Check Availability</Button>,
          isShowingLocationDropdown: false,
          isShowingSummary: true,
          isSticky: true,
        })
      );
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit`', () => {
      const onSubmit = jest.fn();
      const searchBar = mount(
        <SearchBar
          guestsOptions={guestsOptions}
          locationOptions={locationOptions}
          onSubmit={onSubmit}
        />
      );

      const form = searchBar.find(Form);

      form.simulate('submit');
      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
