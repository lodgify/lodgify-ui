jest.mock('../../components/layout/LazyLoader');

import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { LazyLoader } from 'layout/LazyLoader';

import { withLazyLoad } from './withLazyLoad';

const Component = () => <div />;
const DISPLAY_NAME = '🚜';

Component.displayName = DISPLAY_NAME;

const props = { lazyProp: '😴', other: 'otherProps' };
const getHOC = props =>
  shallow(React.createElement(withLazyLoad('lazyProp')(Component), props));

LazyLoader.mockImplementation(() => <div />);

describe('withLazyLoad', () => {
  it('should return a function', () => {
    const actual = withLazyLoad();

    expect(actual).toBeInstanceOf(Function);
  });

  describe('the function returned by `withLazyLoad`', () => {
    it('should return a function', () => {
      const actual = withLazyLoad()(Component);

      expect(actual).toBeInstanceOf(Function);
    });

    it('should have the right displayName', () => {
      const actual = withLazyLoad()(Component);

      expectComponentToHaveDisplayName(actual, `withLazyLoad(${DISPLAY_NAME})`);
    });
  });

  describe('WrapperComponent', () => {
    it('should pass the right props to `Component`', () => {
      const actual = getHOC(props);

      expect(actual).toMatchSnapshot();
    });

    describe('if isLazyLoaded is false', () => {
      it('should return the right structure', () => {
        const actual = getHOC({
          lazyProp: '😴',
          other: 'otherProps',
          isLazyLoaded: false,
        });

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
