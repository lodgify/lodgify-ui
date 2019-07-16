import { getComponentPosition } from './getComponentPosition';

describe('`getComponentPosition`', () => {
  describe('if `component` is undefined', () => {
    it('should return `undefined` ', () => {
      const actual = getComponentPosition();

      expect(actual).toBe(undefined);
    });
  });

  describe('if `component` has no `offsetParent`', () => {
    it('should return `undefined` ', () => {
      const actual = getComponentPosition({});

      expect(actual).toBe(undefined);
    });
  });

  it('should return the postion of the component', () => {
    const clientRect = 'I am rectangle';
    const component = {
      getBoundingClientRect: () => clientRect,
      offsetParent: true,
    };

    const actual = getComponentPosition(component);

    expect(actual).toBe(clientRect);
  });
});
