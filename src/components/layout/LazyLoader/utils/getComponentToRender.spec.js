import React from 'react';

import { getComponentToRender } from './getComponentToRender';

describe('getComponentToRender', () => {
  describe('if `lazyProps` !== undefined', () => {
    it('should return the right value', () => {
      const lazyComponent = () => <div />;
      const componentToRenderProps = { yo: 'whup' };
      const lazyProps = {};
      const shouldRender = false;
      const actual = getComponentToRender(
        lazyComponent,
        shouldRender,
        componentToRenderProps,
        lazyProps
      );

      expect(actual).toEqual(
        React.createElement(lazyComponent, componentToRenderProps)
      );
    });
  });

  describe('if `shouldRender` is true', () => {
    it('should return the right value', () => {
      const lazyComponent = () => <div />;
      const componentToRenderProps = { yo: 'whup' };
      const lazyProps = undefined;
      const shouldRender = true;
      const actual = getComponentToRender(
        lazyComponent,
        shouldRender,
        componentToRenderProps,
        lazyProps
      );

      expect(actual).toEqual(
        React.createElement(lazyComponent, componentToRenderProps)
      );
    });
  });

  it('should return the right value', () => {
    const lazyComponent = () => <div />;
    const componentToRenderProps = { yo: 'whup' };
    const lazyProps = undefined;
    const shouldRender = false;
    const actual = getComponentToRender(
      lazyComponent,
      shouldRender,
      componentToRenderProps,
      lazyProps
    );

    expect(actual).toEqual(null);
  });
});
