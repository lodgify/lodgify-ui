jest.mock('../getAllOptions');

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getAllOptions } from '../getAllOptions';

import { Component as CountrySelectComponent } from './component';

const props = {
  onChange: () => {},
  onFocus: () => {},
  options: [],
};

const getCountrySelectComponent = extraProps =>
  shallow(<CountrySelectComponent {...props} {...extraProps} />);

describe('CountrySelectComponent', () => {
  describe('handleChange', () => {
    it('should call `props.onChange` with the right arguments', () => {
      const onChange = jest.fn();
      const wrapper = getCountrySelectComponent({ onChange });

      const name = 'some name';
      const value = 'some value';

      wrapper.instance().handleChange(name, value);

      expect(onChange).toHaveBeenCalledWith(value);
    });
  });

  describe('render', () => {
    it('should call `getAllOptions` with the right arguments', () => {
      const wrapper = getCountrySelectComponent();

      getAllOptions.mockClear();
      wrapper.instance().render();

      expect(getAllOptions).toHaveBeenCalledWith(props.options);
    });

    it('should render the right structure', () => {
      getAllOptions.mockReturnValueOnce([
        { text: 'some text', value: 'some value ' },
      ]);
      const wrapper = mount(<CountrySelectComponent {...props} />);

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `CountrySelectComponent`', () => {
    expectComponentToHaveDisplayName(
      CountrySelectComponent,
      'CountrySelectComponent'
    );
  });
});
