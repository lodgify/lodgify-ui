import { getComponentToRenderProps } from './getComponentToRenderProps';

describe('getComponentToRenderProps', () => {
  describe('if `componentProps` !== undefined and shouldRender === true', () => {
    it('should return the right value', () => {
      const shouldRender = true;
      const componentProps = { yo: 'whup' };
      const lazyProps = { sup: 'g' };
      const actual = getComponentToRenderProps(
        shouldRender,
        componentProps,
        lazyProps
      );

      expect(actual).toEqual({ ...componentProps, ...lazyProps });
    });
  });

  it('should return the right value', () => {
    const shouldRender = false;
    const componentProps = { yo: 'whup' };
    const lazyProps = {};
    const actual = getComponentToRenderProps(
      shouldRender,
      componentProps,
      lazyProps
    );

    expect(actual).toEqual(componentProps);
  });
});
