import React from 'react';
import { shallow } from 'enzyme';
import { Dropdown as SemanticDropdown, Icon } from 'semantic-ui-react';

import { Component as Dropdown } from './component';

const OPTIONS = [{ text: 'someText', value: 'someValue' }];
const OPTIONS_WITH_IMAGES = [
  { text: 'someText', value: 'someValue', image: 'someImage' },
];

describe('<Dropdown />', () => {
  it('should render a single Semantic UI `Dropdown` component', () => {
    const dropdown = shallow(<Dropdown options={OPTIONS} />);
    const actual = dropdown.find('Dropdown');
    expect(actual).toHaveLength(1);
  });

  describe('the dropdown icon', () => {
    it('should not be displayed by default', () => {
      const dropdown = shallow(<Dropdown options={OPTIONS} />);
      const icon = dropdown.find(Icon);
      expect(icon).toHaveLength(0);
    });

    it('should display the specified icon', () => {
      const dropdown = shallow(<Dropdown options={OPTIONS} icon="world" />);
      const icon = dropdown.find(Icon);
      expect(icon.prop('name')).toBe('world');
    });
  });

  describe('if none of the options specifies an image', () => {
    it('should pass the right `props` to `Dropdown`', () => {
      const dropdown = shallow(
        <Dropdown label="someLabel" options={OPTIONS} />
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

  describe('if some of the options specifies an image', () => {
    it('should add the correct class to the wrapper', () => {
      const dropdown = shallow(<Dropdown options={OPTIONS_WITH_IMAGES} />);
      expect(dropdown.hasClass('hasImages'));
    });

    it('should pass the right `props` to `Dropdown`', () => {
      const dropdown = shallow(
        <Dropdown label="someLabel" options={OPTIONS_WITH_IMAGES} />
      ).find('Dropdown');
      const actual = dropdown.props();
      expect(actual).toEqual(
        expect.objectContaining({
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
      const dropdown = shallow(<Dropdown options={OPTIONS} />);
      const semanticDropdown = dropdown.find(SemanticDropdown);
      semanticDropdown.simulate('change', undefined, data);
      const actual = dropdown.state('value');
      expect(actual).toBe(data.value);
    });
  });

  describe('State change: value', () => {
    it('should call the function passed as `props.onChange`', () => {
      const name = 'someName';
      const value = 'someValue';
      const handleChange = jest.fn();
      const dropdown = shallow(
        <Dropdown name={name} options={OPTIONS} onChange={handleChange} />
      );
      dropdown.setState({ value });
      expect(handleChange).toHaveBeenCalledWith(name, value);
    });
  });

  it('should have displayName `Dropdown`', () => {
    const actual = Dropdown.displayName;
    expect(actual).toBe('Dropdown');
  });
});
