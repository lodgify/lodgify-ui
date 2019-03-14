jest.mock('./utils/getIsVisible');
jest.mock('lodash/debounce');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as LazyLoader } from './component';
import { getIsVisible } from './utils/getIsVisible';

const Component = () => <div>🚸</div>;

const props = {
  lazyComponent: Component,
};

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

const getLazyLoaderMount = extraProps =>
  mount(<LazyLoader {...props} {...extraProps} />);

const getLazyLoaderShallow = () => shallow(<LazyLoader {...props} />);

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

  describe('getShouldComponentRender', () => {
    describe('if `this.component` is undefined', () => {
      it('should return `undefined`', () => {
        const wrapper = getLazyLoaderShallow();
        const actual = wrapper.instance().getShouldComponentRender();

        expect(actual).toBe(undefined);
      });
    });

    describe('if `this.component.getBoundingClientRect` is undefined', () => {
      it('should return `undefined`', () => {
        const wrapper = getLazyLoaderShallow();
        const COMPONENT = {
          getBoundingClientRect: undefined,
        };

        wrapper.instance().createComponentRef(COMPONENT);

        const actual = wrapper.instance().getShouldComponentRender();

        expect(actual).toBe(undefined);
      });
    });

    describe('by default', () => {
      const COMPONENT = Element;

      it('should call `this.component.getBoundingClientRect`', () => {
        const wrapper = getLazyLoaderShallow();

        wrapper.instance().createComponentRef(COMPONENT);
        wrapper.instance().getShouldComponentRender();

        expect(COMPONENT.prototype.getBoundingClientRect).toHaveBeenCalled();
      });

      it('should call `getIsVisible` with the correct arguments', () => {
        const wrapper = getLazyLoaderShallow();

        wrapper.instance().createComponentRef(COMPONENT);
        getIsVisible.mockReturnValue(true);
        wrapper.instance().getShouldComponentRender();

        expect(getIsVisible).toHaveBeenCalledWith(
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

      describe('if `isComponentVisible` is truthy', () => {
        const COMPONENT = {
          getBoundingClientRect: Element.prototype.getBoundingClientRect,
        };

        it('should call `this.setState`', () => {
          const wrapper = getLazyLoaderShallow();

          wrapper.instance().createComponentRef(COMPONENT);
          wrapper.instance().setState = jest.fn();
          getIsVisible.mockReturnValue(true);
          wrapper.instance().getShouldComponentRender();

          expect(wrapper.instance().setState).toHaveBeenCalledWith({
            shouldRender: true,
          });
        });

        it('should call `this.removeEventListeners`', () => {
          const wrapper = getLazyLoaderShallow();

          getIsVisible.mockReturnValueOnce(true);
          wrapper.instance().createComponentRef(COMPONENT);
          wrapper.instance().removeEventListeners = jest.fn();
          wrapper.instance().getShouldComponentRender();

          expect(wrapper.instance().removeEventListeners).toHaveBeenCalled();
        });
      });
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

  describe('createComponentRef', () => {
    it('should create the ref', () => {
      const wrapper = getLazyLoaderShallow();
      const COMPONENT = '🎧';

      wrapper.instance().createComponentRef(COMPONENT);

      const actual = wrapper.instance().component;

      expect(actual).toBe(COMPONENT);
    });
  });

  it('should have `displayName` LazyLoader', () => {
    expectComponentToHaveDisplayName(LazyLoader, 'LazyLoader');
  });
});
