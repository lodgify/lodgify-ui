import React from 'react';
import { shallow } from 'enzyme';

import { Component as Dropdown } from './component';

const options = [{ text: 'someText', value: 'someValue' }];
const optionsWithImages = [
  { text: 'someText', value: 'someValue', image: 'someImage' },
];

describe('<Dropdown />', () => {
  it('should render a single Semantic UI `Dropdown` component', () => {
    const dropdown = shallow(<Dropdown options={options} />);
    const actual = dropdown.find('Dropdown');
    expect(actual).toHaveLength(1);
  });

  describe('if none of the options specifies an image', () => {
    it('should pass the right `props` to `Dropdown`', () => {
      const dropdown = shallow(
        <Dropdown label="someLabel" options={options} />
      ).find('Dropdown');
      const actual = dropdown.props();
      expect(actual).toEqual(
        expect.objectContaining({
          className: '',
          defaultValue: null,
          onChange: expect.any(Function),
          options: expect.arrayContaining([expect.any(Object)]),
          placeholder: 'someLabel',
          selection: true,
        })
      );
    });
  });

  describe('if none of the options specifies an image', () => {
    it('should pass the right `props` to `Dropdown`', () => {
      const dropdown = shallow(
        <Dropdown label="someLabel" options={optionsWithImages} />
      ).find('Dropdown');
      const actual = dropdown.props();
      expect(actual).toEqual(
        expect.objectContaining({
          className: 'hasImages',
          defaultValue: 'someValue',
          onChange: expect.any(Function),
          options: expect.arrayContaining([expect.any(Object)]),
          placeholder: 'someLabel',
          selection: true,
        })
      );
    });
  });

  describe('Interaction: onChange', () => {
    it('should persist the value in component state', () => {
      const data = { value: '🐯' };
      const dropdown = shallow(<Dropdown options={options} />);
      dropdown.simulate('change', undefined, data);
      const actual = dropdown.state('value');
      expect(actual).toBe(data.value);
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const value = 'someValue';
      const handleChange = jest.fn();
      const dropdown = shallow(
        <Dropdown options={options} onChange={handleChange} />
      );
      dropdown.setState({ value });
      expect(handleChange).toHaveBeenCalledWith(value);
    });
  });

  it('should have displayName `Dropdown`', () => {
    const actual = Dropdown.displayName;
    expect(actual).toBe('Dropdown');
  });
});
