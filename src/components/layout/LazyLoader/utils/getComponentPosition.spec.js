import { getComponentPosition } from './getComponentPosition';

Element.prototype.getBoundingClientRect = jest.fn(() => ({
  width: 120,
  height: 120,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
}));

describe('`getComponentPosition`', () => {
  describe('if the component is undefined', () => {
    it('should return `undefined` ', () => {
      const COMPONENT = undefined;

      const actual = getComponentPosition(COMPONENT);

      expect(actual).toBe(undefined);
    });
  });

  it('should return the postion of the component', () => {
    const COMPONENT = Element;

    COMPONENT.getBoundingClientRect = jest.fn(() => ({
      width: 120,
      height: 120,
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    }));

    const actual = getComponentPosition(COMPONENT);

    expect(actual).toEqual({
      bottom: 0,
      height: 120,
      left: 0,
      right: 0,
      top: 0,
      width: 120,
    });
  });
});
