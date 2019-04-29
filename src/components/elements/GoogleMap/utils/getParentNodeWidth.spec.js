import { getParentNodeWidth } from './getParentNodeWidth';

const element = {
  parentNode: {
    offsetWidth: 200,
  },
};
const computedStyle = {
  paddingLeft: 10,
  paddingRight: 20,
};
const floor = 'floooooor';

global.getComputedStyle = jest.fn(() => computedStyle);
global.parseInt = jest.fn(value => value);
global.Math.floor = jest.fn(() => floor);

describe('getParentNodeWidth', () => {
  it('should call `global.getComputedStyle` with the right arguments', () => {
    global.getComputedStyle.mockClear();
    getParentNodeWidth(element);

    expect(global.getComputedStyle).toHaveBeenCalledTimes(2);
    expect(global.getComputedStyle).toHaveBeenNthCalledWith(
      1,
      element.parentNode
    );
    expect(global.getComputedStyle).toHaveBeenNthCalledWith(
      2,
      element.parentNode
    );
  });

  it('should call `global.parseInt` with the right arguments', () => {
    global.parseInt.mockClear();
    getParentNodeWidth(element);

    expect(global.parseInt).toHaveBeenCalledTimes(2);
    expect(global.parseInt).toHaveBeenNthCalledWith(
      1,
      computedStyle.paddingLeft,
      10
    );
    expect(global.parseInt).toHaveBeenNthCalledWith(
      2,
      computedStyle.paddingRight,
      10
    );
  });

  it('should call `global.Math.floor` with the right arguments', () => {
    global.Math.floor.mockClear();
    getParentNodeWidth(element);

    expect(global.Math.floor).toHaveBeenCalledWith(170);
  });

  it('should return whatever `global.Math.floor` returns', () => {
    const actual = getParentNodeWidth(element);

    expect(actual).toBe(floor);
  });
});
