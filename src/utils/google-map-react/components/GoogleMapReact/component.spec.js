jest.mock('google-map-react', () => () => <div />);
jest.mock('google-map-react/utils');
jest.mock('../../utils/getMapOptions');
jest.mock('./utils/adaptENSWtoNESW');
jest.mock('./utils/adaptNESWtoENSW');

import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { fitBounds } from 'google-map-react/utils';

import { getMapOptions } from '../../utils/getMapOptions';

import { adaptENSWtoNESW } from './utils/adaptENSWtoNESW';
import { adaptNESWtoENSW } from './utils/adaptNESWtoENSW';
import { Component as GoogleMapReact } from './component';

const props = {
  apiKey: 'some key',
  hasDefaultStyles: false,
  isShowingExactLocation: false,
  isShowingApproximateLocation: false,
  latitude: 1,
  longitude: 0,
  markers: [],
  onBoundsChange: Function.prototype,
};

const getGoogleMapReact = extraProps =>
  shallow(<GoogleMapReact {...props} {...extraProps} />);

describe('<GoogleMapReacts />', () => {
  describe('componentDidUpdate', () => {
    describe('if `props.bounds` is `undefined`', () => {
      it('should not call `setState`', () => {
        const wrapper = getGoogleMapReact();

        wrapper.instance().setState = jest.fn();
        wrapper.instance().componentDidUpdate({}, {});

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `props.bounds` is defined', () => {
      describe('if none of `state.size` or `props.bounds` has changed', () => {
        it('should not call `googleMap.fitBounds`', () => {
          const bounds = {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          };
          const wrapper = getGoogleMapReact({ bounds });
          const { size } = wrapper.state();

          wrapper.instance().setState = jest.fn();
          wrapper.instance().componentDidUpdate({ bounds }, { size });

          expect(wrapper.instance().setState).not.toHaveBeenCalled();
        });
      });

      describe('if `state.size` has changed', () => {
        it('should call `setState` with the right arguments', () => {
          const bounds = {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          };
          const ADAPTED_BOUNDS = {};
          const FITTED_BOUNDS = {};
          const wrapper = getGoogleMapReact({ bounds });

          wrapper.instance().setState = jest.fn();
          adaptENSWtoNESW.mockClear();
          adaptENSWtoNESW.mockReturnValueOnce(ADAPTED_BOUNDS);
          fitBounds.mockClear();
          fitBounds.mockReturnValueOnce(FITTED_BOUNDS);
          wrapper.instance().componentDidUpdate(
            {
              bounds,
            },
            { size: 'some new size' }
          );

          expect(adaptENSWtoNESW).toHaveBeenCalledWith(bounds);
          expect(fitBounds).toHaveBeenCalledWith(
            ADAPTED_BOUNDS,
            wrapper.state('size')
          );
          expect(wrapper.instance().setState).toHaveBeenCalledWith(
            FITTED_BOUNDS
          );
        });
      });

      describe('if `props.bounds` has changed', () => {
        it('should call `setState` with the right arguments', () => {
          const bounds = {
            east: 0,
            north: 0,
            south: 0,
            west: 0,
          };
          const ADAPTED_BOUNDS = {};
          const FITTED_BOUNDS = {};
          const wrapper = getGoogleMapReact({ bounds });

          wrapper.instance().setState = jest.fn();
          adaptENSWtoNESW.mockClear();
          adaptENSWtoNESW.mockReturnValueOnce(ADAPTED_BOUNDS);
          fitBounds.mockClear();
          fitBounds.mockReturnValueOnce(FITTED_BOUNDS);
          wrapper.instance().componentDidUpdate(
            {
              bounds: {},
            },
            { size: wrapper.state('size') }
          );

          expect(adaptENSWtoNESW).toHaveBeenCalledWith(bounds);
          expect(fitBounds).toHaveBeenCalledWith(
            ADAPTED_BOUNDS,
            wrapper.state('size')
          );
          expect(wrapper.instance().setState).toHaveBeenCalledWith(
            FITTED_BOUNDS
          );
        });
      });
    });
  });

  describe('handleChange', () => {
    describe('if `state.size` is `null`', () => {
      it('should call `setState` with the right arguments', () => {
        const wrapper = getGoogleMapReact();
        const size = 'some size';

        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleChange({ size });

        expect(wrapper.instance().setState).toHaveBeenCalledWith({ size });
      });
    });

    describe('if `state.size` is not `null`', () => {
      it('should call `props.onBoundsChange` with the right arguments', () => {
        const onBoundsChange = jest.fn();
        const wrapper = getGoogleMapReact({ onBoundsChange });
        const bounds = 'some bounds';
        const ADAPTED_BOUNDS = 'adapted bounds';

        wrapper.instance().setState({ size: 'not null' });
        adaptNESWtoENSW.mockClear();
        adaptNESWtoENSW.mockReturnValueOnce(ADAPTED_BOUNDS);
        wrapper.instance().handleChange({ bounds });

        expect(adaptNESWtoENSW).toHaveBeenCalledWith(bounds);
        expect(onBoundsChange).toHaveBeenCalledWith(ADAPTED_BOUNDS);
      });
    });
  });

  describe('render', () => {
    it('should render the right structure', () => {
      getMapOptions.mockReturnValueOnce({ some: 'options ' });
      const wrapper = getGoogleMapReact();

      expect(wrapper).toMatchSnapshot();
    });

    describe('if `props.isShowingExactLocation` is `true`', () => {
      it('should render the right structure', () => {
        getMapOptions.mockReturnValueOnce({ some: 'options ' });
        const wrapper = getGoogleMapReact({ isShowingExactLocation: true });

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `props.isShowingApproximateLocation` is `true`', () => {
      it('should render the right structure', () => {
        getMapOptions.mockReturnValueOnce({ some: 'options ' });
        const wrapper = getGoogleMapReact({
          isShowingApproximateLocation: true,
        });

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `props.markers` is populated', () => {
      it('should render the right structure', () => {
        getMapOptions.mockReturnValueOnce({ some: 'options ' });
        const markers = [
          { component: <div />, key: 'a', latitude: 41.38, longitude: 2.15 },
          { component: <div />, key: 'b', latitude: 41.375, longitude: 2.16 },
        ];
        const wrapper = getGoogleMapReact({ markers });

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  it('should have `displayName` GoogleMapReact', () => {
    expectComponentToHaveDisplayName(GoogleMapReact, 'GoogleMapReact');
  });
});
