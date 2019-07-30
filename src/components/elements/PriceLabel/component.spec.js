import { shallow } from 'enzyme';
import React from 'react';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { PriceLabel } from 'elements/PriceLabel';
import { getToggledIsActiveState } from 'utils/get-toggled-is-active-state';

const props = {
  pricePerPeriod: '€999',
  onClick: () => {},
};

const getLabel = extraProps =>
  shallow(<PriceLabel {...props} {...extraProps} />);

describe('the `PriceLabel` component', () => {
  describe('if there is `periodText`', () => {
    it('should return the right structure', () => {
      const actual = getLabel({ periodText: '(ಠ益ಠ)' });

      expect(actual).toMatchSnapshot();
    });

    describe('if `isPointing` is true', () => {
      it('should return the right structure', () => {
        const actual = getLabel({ periodText: '(ಠ益ಠ)', isPointing: true });

        expect(actual).toMatchSnapshot();
      });
    });
  });

  describe('if there is no `periodText`', () => {
    it('should return the right structure', () => {
      const actual = getLabel({});

      expect(actual).toMatchSnapshot();
    });

    describe('if `isPointing` is true', () => {
      it('should return the right structure', () => {
        const actual = getLabel({ isPointing: true });

        expect(actual).toMatchSnapshot();
      });
    });
  });

  describe('if `isActive` is true', () => {
    it('should have the right class', () => {
      const actual = getLabel({ isActive: true });

      expect(actual.hasClass('active')).toBe(true);
    });
  });

  describe('if `hasShadow` is true', () => {
    it('should have the right class', () => {
      const actual = getLabel({ hasShadow: true });

      expect(actual.hasClass('has-shadow')).toBe(true);
    });
  });

  describe('if `onClick` is passed', () => {
    it('should have the right class', () => {
      const actual = getLabel({ onClick: () => {} });

      expect(actual.hasClass('is-clickable')).toBe(true);
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `state.isActive` has not changed', () => {
      it('should not call `props.onChange`', () => {
        const onChange = jest.fn();
        const wrapper = getLabel({ onChange });

        wrapper.instance().componentDidUpdate({}, { isActive: false });

        expect(onChange).not.toHaveBeenCalled();
      });
    });

    describe('if `state.isActive` has changed', () => {
      it('should call `props.onChange` with the right arguments', () => {
        const name = 'Bill';
        const onChange = jest.fn();
        const wrapper = getLabel({ name, onChange });

        wrapper.instance().componentDidUpdate({}, { isActive: true });

        expect(onChange).toHaveBeenCalledWith(name, false);
      });
    });
  });

  describe('toggleActive', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getLabel();

      wrapper.instance().setState = jest.fn();
      wrapper.update();
      wrapper.instance().toggleActive();

      expect(wrapper.instance().setState).toHaveBeenCalledWith(
        getToggledIsActiveState
      );
    });
  });

  describe('handleClick', () => {
    it('should call `props.onClick` with the right arguments', () => {
      const name = 'Time';
      const onClick = jest.fn();
      const wrapper = getLabel({ name, onClick });

      const syntheticEvent = 'an event';

      wrapper.instance().handleClick(syntheticEvent);

      expect(onClick).toHaveBeenCalledWith(name, syntheticEvent);
    });
  });

  it('should have `displayName` PriceLabel', () => {
    expectComponentToHaveDisplayName(PriceLabel, 'PriceLabel');
  });
});
