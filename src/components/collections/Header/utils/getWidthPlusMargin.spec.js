import { getWidthPlusMargin } from './getWidthPlusMargin';

global.getComputedStyle = jest.fn();
parseInt = jest.fn();

const marginLeft = 'Marge';
const marginRight = 'Homer';

global.getComputedStyle.mockReturnValue({ marginLeft, marginRight });

describe('getWidthPlusMargin', () => {
  it('should call `global.getComputedStyle` with the right arguments', () => {
    const element = '🍒';

    getWidthPlusMargin(element);

    expect(global.getComputedStyle).toHaveBeenCalledWith(element);
  });

  it('should call `parseInt` with the right arguments', () => {
    parseInt.mockClear();
    getWidthPlusMargin({});

    expect(parseInt).toHaveBeenCalledWith(marginLeft);
    expect(parseInt).toHaveBeenCalledWith(marginRight);
  });

  it('should return the right sum', () => {
    const clientWidth = 1;
    const element = { clientWidth };

    parseInt.mockReturnValue(1);
    const actual = getWidthPlusMargin(element);

    expect(actual).toBe(3);
  });
});
