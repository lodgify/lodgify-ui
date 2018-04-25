import React from 'react';
import { shallow, mount } from 'enzyme';
import { Form } from 'semantic-ui-react';

import { Button } from 'elements/Button';
import { SearchBar } from 'general-widgets/SearchBar';

import { Component as Footer } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const getFooter = props =>
  shallow(
    <Footer
      guestsOptions={guestsOptions}
      locationOptions={locationOptions}
      {...props}
    />
  );
const getSearchBar = props => getFooter(props).find(SearchBar);

describe('<Footer />', () => {
  it('should render a single Lodgify UI `SearchBar` component', () => {
    const actual = getSearchBar();
    expect(actual).toHaveLength(1);
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
