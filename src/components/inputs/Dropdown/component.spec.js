jest.mock('utils/get-is-input-value-reset');
jest.mock('utils/get-controlled-input-value');
jest.mock('./utils/getIsOpenAfterChange');
jest.mock('/utils/some');
jest.mock('./utils/getIcon');

import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';
import { Dropdown as SemanticDropdown } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';
import { getControlledInputValue } from 'utils/get-controlled-input-value';

import { ErrorMessage } from '../ErrorMessage';
import { ICON_NAMES } from '../../elements/Icon/constants';

import { getIsOpenAfterChange } from './utils/getIsOpenAfterChange';
import { Component as Dropdown } from './component';
import { getIcon } from './utils/getIcon';

const OPTIONS = [{ text: 'someText', value: 'someValue' }];
const OPTIONS_WITH_IMAGES = [
  { text: 'someText', value: 'someValue', imageUrl: 'someImage' },
];

const getDropdown = extraProps => shallow(<Dropdown {...extraProps} />);
const getDropdownContainer = extraProps =>
  getDropdown(extraProps).find('div.dropdown-container');

const IS_OPEN = false;
const CONTROLLED_VALUE = '🐑';

getIsOpenAfterChange.mockReturnValue(IS_OPEN);
getIcon.mockReturnValue(ICON_NAMES.CARET_DOWN);
getControlledInputValue.mockReturnValue(CONTROLLED_VALUE);

describe('<Dropdown />', () => {
  it('should render a single `div` with class `.dropdown-container`', () => {
    const wrapper = getDropdown();

    expectComponentToBe(wrapper, 'div.dropdown-container');
  });

  describe('if `props.isCompact` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getDropdown({ isCompact: true });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('the validation states', () => {
    describe('error state', () => {
      it('should render ErrorMessage if message defined', () => {
        const props = {
          error: 'Hello world',
        };
        const wrapper = getDropdown(props);

        expectComponentToHaveChildren(wrapper, ErrorMessage, SemanticDropdown);
      });

      it('should render ErrorMessage with the correct message', () => {
        const props = {
          error: 'Hello world',
        };
        const wrapper = getDropdown(props).find(ErrorMessage);

        expectComponentToHaveProps(wrapper, {
          errorMessage: 'Hello world',
        });
      });

      it('should have the error class', () => {
        const props = {
          error: true,
        };
        const actual = getDropdown(props).hasClass('error');

        expect(actual).toBe(true);
      });
    });

    describe('valid state', () => {
      it('should render the valid Icon', () => {
        const props = {
          isValid: true,
        };
        const wrapper = getDropdown(props);

        expectComponentToHaveChildren(wrapper, Icon, SemanticDropdown);
      });

      it('should render the valid Icon with the color green', () => {
        const props = {
          isValid: true,
        };
        const wrapper = getDropdown(props).find(Icon);

        expectComponentToHaveProps(wrapper, {
          color: 'green',
        });
      });

      it('should have the valid class', () => {
        const props = {
          isValid: true,
        };
        const actual = getDropdown(props).hasClass('valid');

        expect(actual).toBe(true);
      });
    });
  });

  describe('the `div.dropdown-container`', () => {
    const getSemanticDropdown = extraProps =>
      getDropdown(extraProps).find(SemanticDropdown);

    it('should render a single Semantic UI `Dropdown` component', () => {
      const wrapper = getDropdownContainer();

      expectComponentToHaveChildren(wrapper, SemanticDropdown);
    });

    describe('if `options` prop is passed and has a length', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          options: OPTIONS,
        });

        expectComponentToHaveProps(wrapper, {
          disabled: false,
        });
      });
    });

    describe('if `options` and `isDisabled` props are passed', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          isDisabled: true,
          options: OPTIONS,
        });

        expectComponentToHaveProps(wrapper, { disabled: true });
      });
    });

    describe('if `isDisabled` prop is passed', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          isDisabled: true,
        });

        expectComponentToHaveProps(wrapper, { disabled: true });
      });
    });

    describe('if `isClearable` prop is false', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          isClearable: false,
        });

        expectComponentToHaveProps(wrapper, { clearable: false });
      });
    });

    describe('if `willOpenAbove` prop is passed', () => {
      it('should have the right props', () => {
        const wrapper = getSemanticDropdown({
          willOpenAbove: true,
        });

        expectComponentToHaveProps(wrapper, { upward: true });
      });
    });
  });

  describe('if any option does not specify an image', () => {
    describe('`Icon`', () => {
      const getDropdownWithIcon = () =>
        getDropdownContainer({ icon: 'search' });

      it('should render if `props.icon` is passed', () => {
        const wrapper = getDropdownWithIcon();

        expectComponentToHaveChildren(wrapper, Icon, SemanticDropdown);
      });

      it('should have the right props', () => {
        const wrapper = getDropdownWithIcon().find(Icon);

        expectComponentToHaveProps(wrapper, {
          name: 'search',
        });
      });
    });

    describe('`label`', () => {
      const getSemanticDropdown = extraProps =>
        getDropdown(extraProps).find(SemanticDropdown);

      it('should have placeholder if `props.label` is passed', () => {
        const semanticDropdown = getSemanticDropdown({ label: '🏷' });

        expectComponentToHaveProps(semanticDropdown, {
          placeholder: '🏷',
        });
      });
    });
  });

  describe('if any of the options specify an image', () => {
    const getDropdownWithImageOptions = (extraProps = {}) =>
      getDropdownContainer({ options: OPTIONS_WITH_IMAGES, ...extraProps });

    it('should add the correct class to the wrapper', () => {
      const wrapper = getDropdownWithImageOptions();
      const actual = wrapper.hasClass('has-images');

      expect(actual).toBe(true);
    });

    describe('`Icon`', () => {
      it('should not render', () => {
        const wrapper = getDropdownWithImageOptions({ icon: 'search' });

        expectComponentToHaveChildren(wrapper, SemanticDropdown);
      });
    });

    describe('`label`', () => {
      it('should not render', () => {
        const wrapper = getDropdownWithImageOptions({ label: '🏷' });

        expectComponentToHaveChildren(wrapper, SemanticDropdown);
      });
    });
  });
  describe('if Dropdown will trigger onChange', () => {
    it('it will call the onChange props', () => {
      const onChange = jest.fn();
      const wrapper = getDropdown({ onChange });

      const semanticDropdown = wrapper.find(SemanticDropdown);

      act(() => {
        semanticDropdown.simulate('change', {}, { value: '' });
      });

      expect(onChange).toHaveBeenCalled();
    });
  });

  it('should have displayName `Dropdown`', () => {
    expectComponentToHaveDisplayName(Dropdown, 'Dropdown');
  });
});
