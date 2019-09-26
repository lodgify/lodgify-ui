jest.mock('google-map-react', () => () => <div />);
jest.mock('google-map-react/utils');
jest.mock('debounce');
jest.mock('../../utils/getMapOptions');
jest.mock('./utils/adaptENSWtoNESW');
jest.mock('./utils/getCenterFromBounds');
jest.mock('./utils/getCenter');
jest.mock('./utils/adaptNESWtoENSW');

import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { fitBounds } from 'google-map-react/utils';
import debounce from 'debounce';

import { getMapOptions } from '../../utils/getMapOptions';

import { adaptENSWtoNESW } from './utils/adaptENSWtoNESW';
import { getCenterFromBounds } from './utils/getCenterFromBounds';
import { getCenter } from './utils/getCenter';
import { adaptNESWtoENSW } from './utils/adaptNESWtoENSW';
import { getZoomedState } from './utils/getZoomedState';
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

debounce.mockImplementation(func => func);
fitBounds.mockReturnValue({});

describe('<GoogleMapReacts />', () => {
  describe('componentDidMount', () => {
    describe('if `props.bounds` is `null`', () => {
      it('should not call `setState`', () => {
        const wrapper = getGoogleMapReact();

        wrapper.instance().setState = jest.fn();
        wrapper.instance().componentDidMount();

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `props.bounds` is not `null`', () => {
      it('should call `setState` with the right arguments', () => {
        const bounds = { east: 0, north: 0, south: 0, west: 0 };
        const wrapper = getGoogleMapReact({ bounds });
        const ADAPTED_BOUNDS = 'adapted';
        const CENTER = 'center';

        adaptENSWtoNESW.mockReturnValueOnce(ADAPTED_BOUNDS);
        getCenterFromBounds.mockReturnValueOnce(CENTER);
        wrapper.instance().setState = jest.fn();
        wrapper.instance().componentDidMount();

        expect(adaptENSWtoNESW).toHaveBeenCalledWith(bounds);
        expect(getCenterFromBounds).toHaveBeenCalledWith(bounds);
        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          bounds: ADAPTED_BOUNDS,
          center: CENTER,
        });
      });
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `props.bounds` has not changed', () => {
      it('should not call `fitBounds`', () => {
        const bounds = {
          east: 0,
          north: 0,
          south: 0,
          west: 0,
        };
        const wrapper = getGoogleMapReact({ bounds });

        wrapper.instance().componentDidUpdate({ bounds }, {});

        expect(fitBounds).not.toHaveBeenCalled();
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
        const center = 'some center';
        const newBounds = 'some newBounds';
        const zoom = 'some zoom';
        const size = 'some size';
        const ADAPTED_BOUNDS = {};
        const FITTED_BOUNDS = {
          center,
          newBounds,
          zoom,
        };
        const wrapper = getGoogleMapReact({ bounds });

        wrapper.instance().setState({ size });
        wrapper.instance().setState = jest.fn();
        adaptENSWtoNESW.mockClear();
        adaptENSWtoNESW.mockReturnValueOnce(ADAPTED_BOUNDS);
        fitBounds.mockClear();
        fitBounds.mockReturnValueOnce(FITTED_BOUNDS);
        wrapper.instance().componentDidUpdate(
          {
            bounds: {},
          },
          { size }
        );

        expect(adaptENSWtoNESW).toHaveBeenCalledWith(bounds);
        expect(fitBounds).toHaveBeenCalledWith(ADAPTED_BOUNDS, size);
        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          areBoundsChangedProgramatically: true,
          bounds: newBounds,
          center,
          zoom,
        });
      });
    });
  });

  describe('handleChange', () => {
    describe('if `state.areBoundsChanged` is false', () => {
      it('should not call `props.onBoundsChange`', () => {
        const onBoundsChange = jest.fn();
        const wrapper = getGoogleMapReact({ onBoundsChange });

        wrapper.setState({ areBoundsChanged: false });
        onBoundsChange.mockClear();
        wrapper.instance().handleChange({});

        expect(onBoundsChange).not.toHaveBeenCalled();
      });
    });

    describe('if `state.areBoundsChanged` is true', () => {
      it('should call `props.onBoundsChange` with the right arguments', () => {
        const onBoundsChange = jest.fn();
        const wrapper = getGoogleMapReact({ onBoundsChange });
        const bounds = 'some bounds';
        const ADAPTED_BOUNDS = 'adapted bounds';

        adaptNESWtoENSW.mockClear();
        adaptNESWtoENSW.mockReturnValueOnce(ADAPTED_BOUNDS);
        wrapper.instance().setState({ areBoundsChanged: true, bounds });
        wrapper.instance().handleChange({ bounds });

        expect(adaptNESWtoENSW).toHaveBeenCalledWith(bounds);
        expect(onBoundsChange).toHaveBeenCalledWith(ADAPTED_BOUNDS, false);
      });

      it('should call `setState` with the right arguments', () => {
        const wrapper = getGoogleMapReact();

        wrapper.instance().setState = jest.fn(wrapper.instance().setState);
        wrapper.instance().setState({ areBoundsChanged: true });
        wrapper.instance().handleChange({ bounds: null });
        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          areBoundsChanged: false,
          areBoundsChangedProgramatically: false,
          isDragged: false,
          isZoomed: false,
        });
      });
    });

    describe('if `props.bounds` is `null`', () => {
      it('should not call `setState`', () => {
        const wrapper = getGoogleMapReact({ areBoundsChanged: false });

        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleChange({});

        expect(wrapper.instance().setState).not.toHaveBeenCalled();
      });
    });

    describe('if `props.bounds` is not `null`', () => {
      it('should call `setState` with the right arguments', () => {
        const propBounds = {
          east: 0,
          north: 0,
          south: 0,
          west: 0,
        };
        const wrapper = getGoogleMapReact({ bounds: propBounds });
        const bounds = 'bounds';
        const center = 'center';
        const size = 'size';
        const zoom = 'zoom';

        wrapper.instance().setState = jest.fn();
        wrapper.instance().handleChange({ bounds, center, size, zoom });

        expect(wrapper.instance().setState).toHaveBeenCalledWith({
          areBoundsChanged: true,
          bounds,
          center,
          size,
          zoom,
        });
      });
    });
  });

  describe('handleDrag', () => {
    it('should be debounced', () => {
      const DEBOUNCED = 'yep, got debounced';

      debounce.mockReturnValueOnce(DEBOUNCED);

      const wrapper = getGoogleMapReact();
      const actual = wrapper.instance().handleDrag;

      expect(actual).toBe(DEBOUNCED);
    });

    it('should call `setState` with the right arguments', () => {
      const wrapper = getGoogleMapReact();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().handleDrag();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        isDragged: true,
      });
    });
  });

  describe('handleZoomAnimationEnd', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getGoogleMapReact();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().handleZoomAnimationEnd({});

      expect(wrapper.instance().setState).toHaveBeenCalledWith(getZoomedState);
    });
  });

  describe('render', () => {
    it('should call `getCenter` with the right arguments', () => {
      const latitude = 222;
      const longitude = 111;
      const wrapper = getGoogleMapReact({ latitude, longitude });

      wrapper.instance().render();

      expect(getCenter).toHaveBeenCalledWith(null, latitude, longitude);
    });

    describe('if `getCenter` returns `undefined`', () => {
      it('should return `null`', () => {
        const wrapper = getGoogleMapReact();
        const actual = wrapper.instance().render();

        expect(actual).toBe(null);
      });
    });

    describe('if `getCenter` returns a value', () => {
      it('should render the right structure', () => {
        getCenter.mockReturnValueOnce('some center');
        getMapOptions.mockReturnValueOnce({ some: 'options ' });
        const wrapper = getGoogleMapReact();

        expect(wrapper).toMatchSnapshot();
      });

      describe('if `props.isShowingExactLocation` is `true`', () => {
        it('should render the right structure', () => {
          getCenter.mockReturnValueOnce('some center');
          getMapOptions.mockReturnValueOnce({ some: 'options ' });
          const wrapper = getGoogleMapReact({ isShowingExactLocation: true });

          expect(wrapper).toMatchSnapshot();
        });
      });

      describe('if `props.isShowingApproximateLocation` is `true`', () => {
        it('should render the right structure', () => {
          getCenter.mockReturnValueOnce('some center');
          getMapOptions.mockReturnValueOnce({ some: 'options ' });
          const wrapper = getGoogleMapReact({
            isShowingApproximateLocation: true,
          });

          expect(wrapper).toMatchSnapshot();
        });
      });

      describe('if `props.markers` is populated', () => {
        it('should render the right structure', () => {
          getCenter.mockReturnValueOnce('some center');
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
  });

  it('should have `displayName` GoogleMapReact', () => {
    expectComponentToHaveDisplayName(GoogleMapReact, 'GoogleMapReact');
  });
});
