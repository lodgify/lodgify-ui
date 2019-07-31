jest.mock('debounce');
jest.mock('./utils/getBounds');

import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import debounce from 'debounce';

import { getBounds } from './utils/getBounds';
import { BOUNDS_PADDING } from './constants';
import { Component as ReactGoogleMap } from './component';

const props = {
  hasDefaultStyles: false,
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
  latitude: 1,
  longitude: 0,
  markers: [],
  onBoundsChange: Function.prototype,
};

const getReactGoogleMap = extraProps =>
  shallow(<ReactGoogleMap {...props} {...extraProps} />);

describe('<ReactGoogleMaps />', () => {
  describe('componentDidMount', () => {
    describe('if `googleMap` is undefined', () => {
      it('should not explode', () => {
        const wrapper = getReactGoogleMap();

        expect(wrapper.instance().componentDidMount).not.toThrow();
      });
    });

    describe('if `googleMap` is defined', () => {
      describe('if `props.bounds` is undefined', () => {
        it('should not call `googleMap.fitBounds`', () => {
          const wrapper = getReactGoogleMap();
          const fitBounds = jest.fn();

          wrapper.instance().googleMap = { fitBounds };
          wrapper.instance().componentDidMount();

          expect(fitBounds).not.toHaveBeenCalled();
        });
      });

      describe('if `props.bounds` is defined', () => {
        it('should call `googleMap.fitBounds` with the right arguments', () => {
          const bounds = {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          };
          const wrapper = getReactGoogleMap({ bounds });
          const fitBounds = jest.fn();

          wrapper.instance().googleMap = { fitBounds };
          wrapper.instance().componentDidMount();

          expect(fitBounds).toHaveBeenCalledWith(bounds, BOUNDS_PADDING);
        });
      });
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `googleMap` is undefined', () => {
      it('should not explode', () => {
        const wrapper = getReactGoogleMap();

        expect(() => wrapper.instance().componentDidUpdate({})).not.toThrow();
      });
    });

    describe('if `googleMap` is defined', () => {
      describe('if `props.bounds` has not changed', () => {
        it('should not call `googleMap.fitBounds`', () => {
          const bounds = {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          };
          const wrapper = getReactGoogleMap({ bounds });
          const panToBounds = jest.fn();

          wrapper.instance().googleMap = { panToBounds };
          wrapper.instance().componentDidUpdate({ bounds });

          expect(panToBounds).not.toHaveBeenCalled();
        });
      });

      describe('if `props.bounds` has changed', () => {
        it('should call `googleMap.panToBounds` with the right arguments', () => {
          const bounds = {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          };
          const wrapper = getReactGoogleMap({ bounds });
          const panToBounds = jest.fn();

          wrapper.instance().googleMap = { panToBounds };
          wrapper.instance().componentDidUpdate({
            bounds: {
              east: 1,
              north: 1,
              south: 1,
              west: 1,
            },
          });

          expect(panToBounds).toHaveBeenCalledWith(bounds, BOUNDS_PADDING);
        });
      });
    });
  });

  describe('handleBoundsChange', () => {
    it('should be debounced', () => {
      const debounced = () => {};

      debounce.mockReturnValueOnce(debounced);

      const wrapper = getReactGoogleMap();
      const actual = wrapper.instance().handleBoundsChange;

      expect(actual).toBe(debounced);
    });

    it('should call `getBounds` with the right arguments', () => {
      debounce.mockImplementationOnce(callback => callback);

      const wrapper = getReactGoogleMap();
      const googleMap = 'some googleMap';

      getBounds.mockClear();
      wrapper.instance().googleMap = googleMap;
      wrapper.instance().handleBoundsChange();

      expect(getBounds).toHaveBeenCalledWith(googleMap);
    });

    describe('if `getBounds` returns `undefined`', () => {
      it('should not call `props.onBoundsChange`', () => {
        debounce.mockImplementationOnce(callback => callback);

        const onBoundsChange = jest.fn();
        const wrapper = getReactGoogleMap({ onBoundsChange });
        const googleMap = 'some googleMap';

        getBounds.mockReturnValueOnce(undefined);
        wrapper.instance().googleMap = googleMap;
        wrapper.instance().handleBoundsChange();

        expect(onBoundsChange).not.toHaveBeenCalled();
      });
    });

    describe('if `getBounds` returns a value', () => {
      it('should call `props.onBoundsChange` with the right arguments', () => {
        debounce.mockImplementationOnce(callback => callback);

        const onBoundsChange = jest.fn();
        const wrapper = getReactGoogleMap({ onBoundsChange });
        const googleMap = 'some googleMap';
        const bounds = 'some bounds';

        getBounds.mockReturnValueOnce(bounds);
        wrapper.instance().googleMap = googleMap;
        wrapper.instance().handleBoundsChange();

        expect(onBoundsChange).toHaveBeenCalledWith(bounds);
      });
    });
  });

  describe('createRef', () => {
    it('should assign the ref to `googleMap`', () => {
      const wrapper = getReactGoogleMap();
      const googleMap = 'some googleMap';

      expect(wrapper.instance().googleMap).toBe(undefined);

      wrapper.instance().createRef(googleMap);

      expect(wrapper.instance().googleMap).toBe(googleMap);
    });
  });

  describe('render', () => {
    it('should render the right structure', () => {
      const wrapper = getReactGoogleMap();

      expect(wrapper).toMatchSnapshot();
    });

    describe('if `props.isShowingExactLocation` is `true`', () => {
      it('should render the right structure', () => {
        const wrapper = getReactGoogleMap({ isShowingExactLocation: true });

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `props.isShowingApproximateLocation` is `true`', () => {
      it('should render the right structure', () => {
        const wrapper = getReactGoogleMap({
          isShowingApproximateLocation: true,
        });

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `props.markers` is populated', () => {
      it('should render the right structure', () => {
        const markers = [
          { component: <div />, latitude: 41.38, longitude: 2.15 },
          { component: <div />, latitude: 41.375, longitude: 2.16 },
        ];
        const wrapper = getReactGoogleMap({ markers });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  it('should have `displayName` ReactGoogleMap', () => {
    expectComponentToHaveDisplayName(ReactGoogleMap, 'ReactGoogleMap');
  });
});
