jest.mock('react-dates', () => {
  const { Component } = require('react');

  class SingleDatePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { SingleDatePicker };
});
jest.mock('utils/get-window-height');
jest.mock('lodash/debounce');

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { debounce } from 'lodash';

import { getWindowHeight } from 'utils/get-window-height';

import { Component as SingleDatePicker } from './component';

const STARTING_WINDOW_HEIGHT = 900;
const NEXT_WINDOW_HEIGHT = 800;

const getSingleDatePicker = props => mount(<SingleDatePicker {...props} />);

describe('<SingleDatePicker />', () => {
  beforeEach(() => {
    getWindowHeight.mockReset();
    getWindowHeight.mockReturnValueOnce(STARTING_WINDOW_HEIGHT);
    getWindowHeight.mockReturnValueOnce(NEXT_WINDOW_HEIGHT);
  });

  it('should render the right structure', () => {
    const wrapper = getSingleDatePicker();

    expect(wrapper).toMatchSnapshot();
  });

  describe('`componentDidMount`', () => {
    it('should call `this.handleHeightChange`', () => {
      const wrapper = getSingleDatePicker();

      wrapper.instance().handleHeightChange = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().handleHeightChange).toHaveBeenCalled();
    });

    it('should call `debounce` with the right arguments', () => {
      const wrapper = getSingleDatePicker();
      const handler = wrapper.instance().handleHeightChange;

      expect(debounce).toHaveBeenCalledWith(handler, 150);
    });

    it('should bind handleHeightChange to global resize event', () => {
      global.addEventListener = jest.fn();
      const wrapper = getSingleDatePicker();

      const DEBOUNCE_CONFIRMATION = 'I got debounced';

      debounce.mockReturnValue(DEBOUNCE_CONFIRMATION);

      wrapper.instance().componentDidMount();
      expect(global.addEventListener).toHaveBeenCalledWith(
        'resize',
        DEBOUNCE_CONFIRMATION
      );
    });
  });

  describe('Interaction: onFocusChange', () => {
    it('should persist the value in component state', () => {
      const value = true;
      const singleDatePicker = getSingleDatePicker();

      singleDatePicker.instance().handleFocusChange({ focused: value });
      const actual = singleDatePicker.state();

      expect(actual).toEqual(
        expect.objectContaining({
          isFocused: value,
        })
      );
    });
  });

  describe('Interaction: onHeightChange', () => {
    describe('if window height has changed', () => {
      it('should persist the value in component state', () => {
        const singleDatePicker = getSingleDatePicker();

        singleDatePicker.instance().handleHeightChange();
        const actual = singleDatePicker.state();

        expect(actual).toEqual(
          expect.objectContaining({
            windowHeight: NEXT_WINDOW_HEIGHT,
          })
        );
      });
    });

    describe('if window height has not changed', () => {
      it('should do nothing', () => {
        getWindowHeight.mockReset();
        getWindowHeight.mockReturnValue(STARTING_WINDOW_HEIGHT);

        const singleDatePicker = getSingleDatePicker();

        singleDatePicker.instance().handleHeightChange();
        const actual = singleDatePicker.state();

        expect(actual).toEqual(
          expect.objectContaining({
            windowHeight: STARTING_WINDOW_HEIGHT,
          })
        );
      });
    });
  });

  describe('State change: focusedInput', () => {
    describe('if there is a blur event', () => {
      it('should call `props.onBlur`', () => {
        const onBlur = jest.fn();
        const singleDatePicker = getSingleDatePicker({ onBlur });

        const prevState = { isFocused: true };
        const state = { isFocused: false };

        singleDatePicker.setState(prevState);
        singleDatePicker.setState(state);

        expect(onBlur).toHaveBeenCalled();
      });
    });

    describe('if there is a no blur event', () => {
      it('should note call `props.onBlur`', () => {
        const onBlur = jest.fn();
        const singleDatePicker = getSingleDatePicker({ onBlur });

        const prevState = { isFocused: false };
        const state = { isFocused: false };

        singleDatePicker.setState(prevState);
        singleDatePicker.setState(state);

        expect(onBlur).not.toHaveBeenCalled();
      });
    });
  });

  it('should have displayName `SingleDatePicker`', () => {
    expectComponentToHaveDisplayName(SingleDatePicker, 'SingleDatePicker');
  });
});
