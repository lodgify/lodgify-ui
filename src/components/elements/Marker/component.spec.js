import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { getToggledState } from './utils/getToggledState';
import { Component as Marker } from './component';

const getMarker = props => mount(<Marker {...props} />);

describe('<Marker />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getMarker();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isActive === true`', () => {
    it('should render the right structure', () => {
      const actual = getMarker({ isActive: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `state.isActive` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getMarker({ onChange });

        wrapper.instance().componentDidUpdate({}, { isActive: false });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `state.isActive` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const name = 'Bill';
        const onChange = jest.fn();
        const wrapper = getMarker({ name, onChange });

        wrapper.instance().componentDidUpdate({}, { isActive: true });

        expect(onChange).toHaveBeenCalledWith(name, false);
      });
    });
  });

  describe('toggleActive', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getMarker();

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().toggleActive();

      expect(wrapper.instance().setState).toHaveBeenCalledWith(getToggledState);
    });
  });

  describe('handleClick', () => {
    it('should call `props.onClick` with the right arguments', () => {
      const name = 'Pam';
      const onClick = jest.fn();
      const wrapper = getMarker({ name, onClick });

      const syntheticEvent = 'some event';

      wrapper.instance().handleClick(syntheticEvent);

      expect(onClick).toHaveBeenCalledWith(name, syntheticEvent);
    });
  });

  it('should have `displayName` Marker', () => {
    expectComponentToHaveDisplayName(Marker, 'Marker');
  });
});
