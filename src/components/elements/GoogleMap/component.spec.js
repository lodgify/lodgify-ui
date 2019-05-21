jest.mock('debounce');
jest.mock('./utils/getParentNodeWidth');
jest.mock('./utils/getImgSrc');

import React from 'react';
import { mount } from 'enzyme';
import { debounce } from 'debounce';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as GoogleMap } from './component';
import { getParentNodeWidth } from './utils/getParentNodeWidth';
import { getImgSrc } from './utils/getImgSrc';

const props = {
  latitude: 0,
  longitude: 0,
};

const getGoogleMap = () => mount(<GoogleMap {...props} />);

debounce.mockImplementation(func => {
  func.isDebounced = true;
  return func;
});

describe('<GoogleMap />', () => {
  describe('componentDidMount', () => {
    it('should call `global.addEventListener` with the right arguments', () => {
      global.addEventListener = jest.fn();

      const wrapper = getGoogleMap();

      wrapper.instance().componentDidMount();

      expect(global.addEventListener).toHaveBeenCalledWith(
        'resize',
        wrapper.instance().setParentNodeWidth
      );
    });

    it('should call `this.img.addEventListener` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().img.addEventListener = jest.fn();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().img.addEventListener).toHaveBeenCalledTimes(3);
      expect(wrapper.instance().img.addEventListener).toHaveBeenNthCalledWith(
        1,
        'mousedown',
        wrapper.instance().setIsDynamicMapShowingTrue
      );
      expect(wrapper.instance().img.addEventListener).toHaveBeenNthCalledWith(
        2,
        'mouseover',
        wrapper.instance().setIsMouseOverMapTrue
      );
      expect(wrapper.instance().img.addEventListener).toHaveBeenNthCalledWith(
        3,
        'mouseout',
        wrapper.instance().setIsMouseOverMapFalse
      );
    });

    it('should call `this.setParentNodeWidth` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().setParentNodeWidth = jest.fn();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().setParentNodeWidth).toHaveBeenCalled();
    });
  });

  describe('componentDidUpdate', () => {
    describe('if `this.state.isDynamicMapShowing` is `true`', () => {
      it('should not call `global.setTimeout`', () => {
        const wrapper = getGoogleMap();

        wrapper.setState({ isDynamicMapShowing: true, isMouseOverMap: true });
        global.setTimeout = jest.fn();
        wrapper.instance().componentDidUpdate({}, { isMouseOverMap: false });

        expect(global.setTimeout).not.toHaveBeenCalled();
      });
    });

    describe('if `previousState.isMouseOverMap` is `true`', () => {
      it('should not call `global.setTimeout`', () => {
        const wrapper = getGoogleMap();

        wrapper.setState({ isDynamicMapShowing: false, isMouseOverMap: true });
        global.setTimeout = jest.fn();
        wrapper.instance().componentDidUpdate({}, { isMouseOverMap: true });

        expect(global.setTimeout).not.toHaveBeenCalled();
      });
    });

    describe('if `this.state.isMouseOverMap` is `false`', () => {
      it('should not call `global.setTimeout`', () => {
        const wrapper = getGoogleMap();

        wrapper.setState({ isDynamicMapShowing: false, isMouseOverMap: false });
        global.setTimeout = jest.fn();
        wrapper.instance().componentDidUpdate({}, { isMouseOverMap: false });

        expect(global.setTimeout).not.toHaveBeenCalled();
      });
    });

    describe('if this.state.isDynamicMapShowing` is `false`, `previousState.isMouseOverMap` is `false` and `this.state.isMouseOverMap` is `true`', () => {
      it('should call `global.setTimeout` with the right arguments', () => {
        const wrapper = getGoogleMap();

        wrapper.setState({ isDynamicMapShowing: false, isMouseOverMap: true });
        global.setTimeout = jest.fn();
        wrapper.instance().componentDidUpdate({}, { isMouseOverMap: false });

        expect(global.setTimeout).toHaveBeenCalledWith(
          expect.any(Function),
          500
        );
      });
    });

    describe('the function passed to `global.setTimeout`', () => {
      it('should call `this.setIsDynamicMapShowingTrue`', () => {
        const wrapper = getGoogleMap();

        wrapper.setState({ isDynamicMapShowing: false, isMouseOverMap: true });
        wrapper.instance().setIsDynamicMapShowingTrue = jest.fn();
        global.setTimeout = jest.fn(func => func());
        wrapper.instance().componentDidUpdate({}, { isMouseOverMap: false });

        expect(
          wrapper.instance().setIsDynamicMapShowingTrue
        ).toHaveBeenCalled();
      });
    });
  });

  describe('componentWillUnmount', () => {
    it('should call `global.addEventListener` with the right arguments', () => {
      global.removeEventListener = jest.fn();

      const wrapper = getGoogleMap();

      wrapper.instance().componentWillUnmount();

      expect(global.removeEventListener).toHaveBeenCalledWith(
        'resize',
        wrapper.instance().setParentNodeWidth
      );
    });

    it('should call `this.img.removeEventListener` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().img.removeEventListener = jest.fn();
      wrapper.instance().componentWillUnmount();

      expect(wrapper.instance().img.removeEventListener).toHaveBeenCalledTimes(
        3
      );
      expect(
        wrapper.instance().img.removeEventListener
      ).toHaveBeenNthCalledWith(
        1,
        'mousedown',
        wrapper.instance().setIsDynamicMapShowingTrue
      );
      expect(
        wrapper.instance().img.removeEventListener
      ).toHaveBeenNthCalledWith(
        2,
        'mouseover',
        wrapper.instance().setIsMouseOverMapTrue
      );
      expect(
        wrapper.instance().img.removeEventListener
      ).toHaveBeenNthCalledWith(
        3,
        'mouseout',
        wrapper.instance().setIsMouseOverMapFalse
      );
    });
  });

  describe('setParentNodeWidth', () => {
    it('should be debounced', () => {
      const wrapper = getGoogleMap();

      const actual = wrapper.instance().setParentNodeWidth.isDebounced;

      expect(debounce).toHaveBeenCalledWith(expect.any(Function), 10);
      expect(actual).toBe(true);
    });

    it('should call `getParentNodeWidth` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().setParentNodeWidth();

      expect(getParentNodeWidth).toHaveBeenCalledWith(wrapper.instance().img);
    });

    it('should call `setState` with the right arguments', () => {
      const wrapper = getGoogleMap();
      const parentNodeWidth = 987;

      wrapper.instance().setState = jest.fn();
      getParentNodeWidth.mockReturnValueOnce(parentNodeWidth);
      wrapper.instance().setParentNodeWidth();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        parentNodeWidth,
      });
    });
  });

  describe('setIsDynamicMapShowingTrue', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().setState = jest.fn();
      wrapper.instance().setIsDynamicMapShowingTrue();

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        isDynamicMapShowing: true,
      });
    });
  });

  describe('setIsMouseOverMapTrue', () => {
    it('should call `setIsMouseOverMap` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().setIsMouseOverMap = jest.fn();
      wrapper.instance().setIsMouseOverMapTrue();

      expect(wrapper.instance().setIsMouseOverMap).toHaveBeenCalledWith(true);
    });
  });

  describe('setIsMouseOverMapFalse', () => {
    it('should call `setIsMouseOverMap` with the right arguments', () => {
      const wrapper = getGoogleMap();

      wrapper.instance().setIsMouseOverMap = jest.fn();
      wrapper.instance().setIsMouseOverMapFalse();

      expect(wrapper.instance().setIsMouseOverMap).toHaveBeenCalledWith(false);
    });
  });

  describe('setIsMouseOverMap', () => {
    it('should call `setState` with the right arguments', () => {
      const wrapper = getGoogleMap();
      const isMouseOverMap = 'it is';

      wrapper.instance().setState = jest.fn();
      wrapper.instance().setIsMouseOverMap(isMouseOverMap);

      expect(wrapper.instance().setState).toHaveBeenCalledWith({
        isMouseOverMap,
      });
    });
  });

  describe('render', () => {
    describe('if `state.isDynamicMapShowing` is `false`', () => {
      it('should return the right structure', () => {
        getImgSrc.mockReturnValue('immmaaage');
        const wrapper = getGoogleMap();

        expect(wrapper).toMatchSnapshot();
      });
    });

    describe('if `state.isDynamicMapShowing` is `false`', () => {
      it('should return the right structure', () => {
        const wrapper = getGoogleMap();

        wrapper.setState({ isDynamicMapShowing: true });
        wrapper.update();

        expect(wrapper).toMatchSnapshot();
      });
    });
  });

  it('should have `displayName` GoogleMap', () => {
    expectComponentToHaveDisplayName(GoogleMap, 'GoogleMap');
  });
});
