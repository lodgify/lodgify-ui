jest.mock('./utils/getIsTopComponentVisible');
jest.mock('./utils/getIsBottomComponentVisible');
jest.mock('./utils/getComponentPosition');
jest.mock('debounce');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as LazyLoader } from './component';
import { getIsTopComponentVisible } from './utils/getIsTopComponentVisible';
import { getIsBottomComponentVisible } from './utils/getIsBottomComponentVisible';
import { getComponentPosition } from './utils/getComponentPosition';

const Component = () => <div>🚸</div>;

const shouldRenderState = {
  shouldRender: true,
};

Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 120,
  height: 120,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}));

getComponentPosition.mockReturnValue({
  width: 120,
  height: 120,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

const getLazyLoaderMount = extraProps =>
  mount(
    <LazyLoader {...extraProps}>
      <Component />
    </LazyLoader>
  );

const getLazyLoaderShallow = () =>
  shallow(
    <LazyLoader>
      <Component />
    </LazyLoader>
  );

describe('LazyLoader', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getLazyLoaderMount();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `shouldRender` === true', () => {
    it('should render the right structure', () => {
      const actual = getLazyLoaderMount();

      actual.setState(shouldRenderState);
      actual.update();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `componentProps` !== undefined', () => {
    it('should render the right structure', () => {
      const actual = getLazyLoaderMount({ componentProps: { mad: 'props' } });

      actual.setState(shouldRenderState);
      actual.update();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `lazyProps` is passed', () => {
    const lazyProps = { whut: 'whut' };

    describe('by default', () => {
      it('should render the right structure', () => {
        const actual = getLazyLoaderMount({ lazyProps });

        expect(actual).toMatchSnapshot();
      });
    });

    describe('if `shouldRender` === true', () => {
      it('should render the right structure', () => {
        const actual = getLazyLoaderMount({ lazyProps });

        actual.setState(shouldRenderState);
        actual.update();

        expect(actual).toMatchSnapshot();
      });
    });
  });

  describe('componentDidMount', () => {
    it('should call `this.addEventListeners` and `this.getShouldComponentRender`', () => {
      const wrapper = getLazyLoaderShallow();

      wrapper.instance().addEventListeners = jest.fn();
      wrapper.instance().getShouldComponentRender = jest.fn();
      wrapper.update();
      wrapper.instance().componentDidMount();

      expect(wrapper.instance().addEventListeners).toHaveBeenCalled();
      expect(wrapper.instance().getShouldComponentRender).toHaveBeenCalled();
    });
  });

  describe('componentWillUnmount', () => {
    it('should call `this.removeEventListeners`', () => {
      const wrapper = getLazyLoaderShallow();

      wrapper.instance().removeEventListeners = jest.fn();
      wrapper.update();
      wrapper.instance().componentWillUnmount();

      expect(wrapper.instance().removeEventListeners).toHaveBeenCalled();
    });
  });

  describe('getShouldComponentRender', () => {
    describe('if `getComponentPosition` is undefined', () => {
      it('should return `undefined`', () => {
        const wrapper = getLazyLoaderShallow();

        getComponentPosition.mockReturnValueOnce(undefined);

        const actual = wrapper.instance().getShouldComponentRender();

        expect(actual).toBe(undefined);
      });
    });

    describe('if `this.topComponent.getBoundingClientRect` is undefined', () => {
      it('should return `undefined`', () => {
        const wrapper = getLazyLoaderShallow();
        const COMPONENT = {
          getBoundingClientRect: undefined,
        };

        wrapper.instance().createTopComponentRef(COMPONENT);

        const actual = wrapper.instance().getShouldComponentRender();

        expect(actual).toBe(undefined);
      });
    });

    describe('by default', () => {
      const COMPONENT = Element;

      it('should call `getIsTopComponentVisible` with the correct arguments', () => {
        const wrapper = getLazyLoaderShallow();

        wrapper.instance().createTopComponentRef(COMPONENT);
        getIsTopComponentVisible.mockReturnValue(true);
        wrapper.instance().getShouldComponentRender();

        expect(getIsTopComponentVisible).toHaveBeenCalledWith(
          {
            width: 120,
            height: 120,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
          expect.any(Number)
        );
      });

      it('should call `getIsBottomComponentVisible` with the correct arguments', () => {
        const wrapper = getLazyLoaderShallow();

        wrapper.instance().createTopComponentRef(COMPONENT);
        getIsBottomComponentVisible.mockReturnValue(true);
        wrapper.instance().getShouldComponentRender();

        expect(getIsTopComponentVisible).toHaveBeenCalledWith(
          {
            width: 120,
            height: 120,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          },
          expect.any(Number)
        );
      });

      describe('if `getIsTopComponentVisible` is truthy', () => {
        const COMPONENT = {
          getBoundingClientRect: Element.prototype.getBoundingClientRect,
        };

        it('should call `this.setState`', () => {
          const wrapper = getLazyLoaderShallow();

          wrapper.instance().createTopComponentRef(COMPONENT);
          wrapper.instance().createBottomComponentRef(COMPONENT);
          wrapper.instance().setState = jest.fn();
          getIsTopComponentVisible.mockReturnValue(true);
          wrapper.instance().getShouldComponentRender();

          expect(wrapper.instance().setState).toHaveBeenCalledWith({
            shouldRender: true,
          });
        });

        it('should call `this.removeEventListeners`', () => {
          const wrapper = getLazyLoaderShallow();

          getIsTopComponentVisible.mockReturnValueOnce(true);
          wrapper.instance().createTopComponentRef(COMPONENT);
          wrapper.instance().createBottomComponentRef(COMPONENT);
          wrapper.instance().removeEventListeners = jest.fn();
          wrapper.instance().getShouldComponentRender();

          expect(wrapper.instance().removeEventListeners).toHaveBeenCalled();
        });
      });

      describe('if `getIsBottomComponentVisible` is truthy', () => {
        const COMPONENT = {
          getBoundingClientRect: Element.prototype.getBoundingClientRect,
        };

        it('should call `this.setState`', () => {
          const wrapper = getLazyLoaderShallow();

          wrapper.instance().createTopComponentRef(COMPONENT);
          wrapper.instance().createBottomComponentRef(COMPONENT);
          wrapper.instance().setState = jest.fn();
          getIsBottomComponentVisible.mockReturnValue(true);
          wrapper.instance().getShouldComponentRender();

          expect(wrapper.instance().setState).toHaveBeenCalledWith({
            shouldRender: true,
          });
        });

        it('should call `this.removeEventListeners`', () => {
          const wrapper = getLazyLoaderShallow();

          getIsTopComponentVisible.mockReturnValueOnce(true);
          wrapper.instance().createTopComponentRef(COMPONENT);
          wrapper.instance().createBottomComponentRef(COMPONENT);
          wrapper.instance().removeEventListeners = jest.fn();
          wrapper.instance().getShouldComponentRender();

          expect(wrapper.instance().removeEventListeners).toHaveBeenCalled();
        });
      });
    });
  });

  describe('createTopComponentRef', () => {
    it('should create the ref', () => {
      const wrapper = getLazyLoaderShallow();
      const COMPONENT = '🎧';

      wrapper.instance().createTopComponentRef(COMPONENT);

      const actual = wrapper.instance().topComponent;

      expect(actual).toBe(COMPONENT);
    });
  });

  describe('createBottomComponentRef', () => {
    it('should create the ref', () => {
      const wrapper = getLazyLoaderShallow();
      const COMPONENT = '⚜';

      wrapper.instance().createBottomComponentRef(COMPONENT);

      const actual = wrapper.instance().bottomComponent;

      expect(actual).toBe(COMPONENT);
    });
  });

  it('should have `displayName` LazyLoader', () => {
    expectComponentToHaveDisplayName(LazyLoader, 'LazyLoader');
  });
});
