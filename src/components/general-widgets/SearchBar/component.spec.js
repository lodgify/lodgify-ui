import React from 'react';
import { mount, shallow } from 'enzyme';
import { Form } from 'semantic-ui-react';

import { Dropdown } from 'inputs/Dropdown';
import { GridColumn } from 'layout/GridColumn';

import { Component as SearchBar } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const props = {
  dateRangePickerLocaleCode: 'ko',
  guestsOptions,
  locationOptions,
};

const getSearchBar = overrideProps =>
  mount(<SearchBar {...props} {...overrideProps} />);

const getSearchBarShallow = overrideProps =>
  shallow(<SearchBar {...props} {...overrideProps} />);

describe('<SearchBar />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isFixed` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ isFixed: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isDisplayedAsModal` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({
        isFixed: true,
        isDisplayedAsModal: true,
      })
        .find(GridColumn)
        .at(1);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isShowingSummary` is true', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ isShowingSummary: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.locationOptions` is not passed', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({ locationOptions: null });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.searchButton` is passed', () => {
    it('should render the right children', () => {
      const actual = getSearchBar({ searchButton: 'Yo!' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('Interaction: onChange an input', () => {
    it('should persist the value in component state', () => {
      const name = 'location';
      const value = '🍰';
      const wrapper = getSearchBarShallow();
      const input = wrapper.find(Dropdown).first();

      input.simulate('change', name, value);
      const actual = wrapper.state(name);

      expect(actual).toBe(value);
    });

    it('should trigger `props.onChangeInput` when a field changes', () => {
      const name = 'location';
      const value = '🍰';
      const onChangeInput = jest.fn();
      const wrapper = getSearchBarShallow({
        onChangeInput,
      });
      const input = wrapper.find(Dropdown).first();

      input.simulate('change', name, value);

      expect(onChangeInput).toHaveBeenCalledWith({
        [name]: value,
      });
    });
  });

  describe('Interaction: onSubmit the form', () => {
    it('should call `props.onSubmit` with the state', () => {
      const onSubmit = jest.fn();
      const wrapper = getSearchBarShallow({
        guestsOptions,
        locationOptions,
        onSubmit,
      });
      const form = wrapper.find(Form);

      form.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
    });
  });

  describe('if `isDisplayedAsModal === true`', () => {
    it('should render the right structure', () => {
      const actual = getSearchBar({
        isDisplayedAsModal: true,
        modalTrigger: <div />,
      });

      expect(actual).toMatchSnapshot();
    });
  });
});
