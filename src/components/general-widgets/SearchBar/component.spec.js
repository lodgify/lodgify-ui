import React from 'react';
import { shallow } from 'enzyme';
import { Form, Modal as SemanticModal } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Dropdown } from 'inputs/Dropdown';
import { DateRangePicker } from 'inputs/DateRangePicker';
import { Button } from 'elements/Button';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Heading } from 'typography/Heading';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { GridColumn } from 'layout/GridColumn';

import { Component as SearchBar } from './component';
import { guestsOptions, locationOptions } from './mock-data/options';

const props = {
  guestsOptions,
  locationOptions,
};

const getSearchBar = overrideProps =>
  shallow(<SearchBar {...props} {...overrideProps} />);

describe('<SearchBar />', () => {
  it('should render a single `div` element', () => {
    const wrapper = getSearchBar();

    expectComponentToBe(wrapper, 'div');
  });

  describe('the `div` element', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar();

      expectComponentToHaveProps(wrapper, { className: 'search-bar' });
    });

    it('should render the right children', () => {
      const wrapper = getSearchBar();

      expectComponentToHaveChildren(wrapper, Form);
    });

    describe('if `props.isFixed` is true', () => {
      it('should have the right props', () => {
        const wrapper = getSearchBar({ isFixed: true });

        expectComponentToHaveProps(wrapper, {
          className: 'search-bar is-fixed',
        });
      });

      it('should have the right children', () => {
        const wrapper = getSearchBar({ isFixed: true });

        expectComponentToHaveChildren(wrapper, HorizontalGutters);
      });

      it('should display as modal if `isDisplayedAsModal` is true', () => {
        const wrapper = getSearchBar({
          isFixed: true,
          isDisplayedAsModal: true,
        })
          .find(GridColumn)
          .at(1);

        expectComponentToHaveChildren(wrapper, Modal);
      });
    });
  });

  describe('the `Form` component', () => {
    const getForm = () => getSearchBar().find(Form);

    it('should have the right props', () => {
      const wrapper = getForm();

      expectComponentToHaveProps(wrapper, {
        onSubmit: expect.any(Function),
      });
    });

    it('should render the right children', () => {
      const wrapper = getForm();

      expectComponentToHaveChildren(wrapper, Form.Group);
    });
  });

  describe('the `Form.Group` component', () => {
    const getFormGroup = props => getSearchBar(props).find(Form.Group);

    it('should render four `Form.Field` components by default', () => {
      const wrapper = getFormGroup().find(Form.Field);

      expect(wrapper).toHaveLength(4);
    });

    describe('if `props.isShowingSummary` is true', () => {
      it('should render five `Form.Field` components', () => {
        const wrapper = getFormGroup({ isShowingSummary: true }).find(
          Form.Field
        );

        expect(wrapper).toHaveLength(5);
      });
    });

    describe('if `props.locationOptions` is not passed', () => {
      it('should render three `Form.Field` components', () => {
        const wrapper = getFormGroup({ locationOptions: null }).find(
          Form.Field
        );

        expect(wrapper).toHaveLength(3);
      });
    });
  });

  describe('the property summary `Form.Field` component', () => {
    const getSummaryFormField = () =>
      getSearchBar({ isShowingSummary: true })
        .find(Form.Field)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getSummaryFormField();

      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });

    it('should render the right children', () => {
      const wrapper = getSummaryFormField();

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('the location dropdown `Form.Field` component', () => {
    const getLocationDropdownFormField = () =>
      getSearchBar()
        .find(Form.Field)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getLocationDropdownFormField();

      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });

    it('should render the right children', () => {
      const wrapper = getLocationDropdownFormField();

      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });

  describe('the first `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar()
        .find(Dropdown)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        icon: 'map pin',
        label: 'Location',
        name: 'location',
        onChange: expect.any(Function),
        options: locationOptions,
      });
    });
  });

  describe('the date range picker `Form.Field` component', () => {
    const getDateRangePickerFormField = () =>
      getSearchBar()
        .find(Form.Field)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getDateRangePickerFormField();

      expectComponentToHaveProps(wrapper, {
        width: 'seven',
      });
    });

    it('should render a single Lodgify UI `DateRangePicker` component', () => {
      const wrapper = getDateRangePickerFormField();

      expectComponentToHaveChildren(wrapper, DateRangePicker);
    });
  });

  describe('the `DateRangePicker` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar().find(DateRangePicker);

      expectComponentToHaveProps(wrapper, {
        endDatePlaceholderText: 'Check-out',
        getIsDayBlocked: expect.any(Function),
        name: 'dates',
        onChange: expect.any(Function),
        startDatePlaceholderText: 'Check-in',
      });
    });
  });

  describe('the guests dropdown `Form.Field` component', () => {
    const getGuestsDropdownFormField = () =>
      getSearchBar()
        .find(Form.Field)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getGuestsDropdownFormField();

      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });

    it('should render a single Lodgify UI `Dropdown` component', () => {
      const wrapper = getGuestsDropdownFormField();

      expectComponentToHaveChildren(wrapper, Dropdown);
    });
  });

  describe('the second `Dropdown` component', () => {
    it('should have the right props', () => {
      const wrapper = getSearchBar()
        .find(Dropdown)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        icon: 'users',
        label: 'Guests',
        name: 'guests',
        onChange: expect.any(Function),
        options: guestsOptions,
      });
    });
  });

  describe('the button `Form.Field` component', () => {
    const getButtonFormField = props =>
      getSearchBar(props)
        .find(Form.Field)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getButtonFormField();

      expectComponentToHaveProps(wrapper, {
        width: 'three',
      });
    });

    it('should render the right children by default', () => {
      const wrapper = getButtonFormField();

      expectComponentToHaveChildren(wrapper, Button);
    });

    describe('if `props.searchButton` is passed', () => {
      it('should render the right children', () => {
        const wrapper = getButtonFormField({ searchButton: 'Yo!' });

        expectComponentToHaveChildren(wrapper, 'Yo!');
      });
    });
  });

  describe('the `Button` component', () => {
    const getButton = props => getSearchBar(props).find(Button);

    it('should have the right props', () => {
      const wrapper = getButton();

      expectComponentToHaveProps(wrapper, {
        icon: 'search',
        isRounded: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getButton();

      expectComponentToHaveChildren(wrapper, 'Search');
    });
  });

  describe('Interaction: onChange an input', () => {
    it('should persist the value in component state', () => {
      const name = 'location';
      const value = '🍰';
      const wrapper = getSearchBar();
      const input = wrapper.find(Dropdown).first();

      input.simulate('change', name, value);
      const actual = wrapper.state(name);

      expect(actual).toBe(value);
    });

    it('should trigger `props.onChangeInput` when a field changes', () => {
      const name = 'location';
      const value = '🍰';
      const onChangeInput = jest.fn();
      const wrapper = getSearchBar({
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
      const wrapper = getSearchBar({
        guestsOptions,
        locationOptions,
        onSubmit,
      });
      const form = wrapper.find(Form);

      form.simulate('submit');
      expect(onSubmit).toHaveBeenCalledWith(wrapper.state());
    });
  });
});

describe('<SearchBar /> with the modal', () => {
  const getSearchBarWithModal = extraProps =>
    getSearchBar({
      isDisplayedAsModal: true,
      ...extraProps,
    });

  it('should have the correct props', () => {
    const wrapper = getSearchBarWithModal({
      modalTrigger: <div />,
    });

    expectComponentToHaveProps(wrapper, {
      trigger: <div />,
    });
  });

  it('should render inside a modal', () => {
    const wrapper = getSearchBarWithModal();

    expectComponentToBe(wrapper, Modal);
  });

  it('should have the correct children', () => {
    const wrapper = getSearchBarWithModal();

    expectComponentToHaveChildren(wrapper, SemanticModal.Content);
  });

  describe('The Modal.Content', () => {
    it('should have the correct children', () => {
      const wrapper = getSearchBarWithModal().find(SemanticModal.Content);

      expectComponentToHaveChildren(wrapper, Heading, Form);
    });
  });

  describe('The Heading in the modal', () => {
    const getModalHeading = () => getSearchBarWithModal().find(Heading);

    it('should have the correct props', () => {
      const wrapper = getModalHeading();

      expectComponentToHaveProps(wrapper, {
        size: 'small',
      });
    });

    it('should have the text', () => {
      const wrapper = getModalHeading();

      expectComponentToHaveChildren(wrapper, 'Check our availability');
    });
  });

  describe('The Form in the modal', () => {
    const getModalForm = () => getSearchBarWithModal().find(Form);

    it('should have the correct props', () => {
      const wrapper = getModalForm();

      expectComponentToHaveProps(wrapper, {
        as: 'form',
      });
    });

    it('should have the correct children', () => {
      const wrapper = getModalForm();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, Form.Field)
      );
    });
  });
});
