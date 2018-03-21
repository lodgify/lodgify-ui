import { getTwelveColumnsWidthValue } from './getTwelveColumnsWidthValue';

describe('getTwelveColumnsWidthValue', () => {
  it('should return 1 if nothing provided', () => {
    const actual = getTwelveColumnsWidthValue();
    expect(actual).toBe(1);
  });

  it('should return 1 if 0 provided', () => {
    const actual = getTwelveColumnsWidthValue(0);
    expect(actual).toBe(1);
  });

  it('should return 1 if Negative number provided', () => {
    const actual = getTwelveColumnsWidthValue(-1);
    expect(actual).toBe(1);
  });

  it('should return 12 if 16 number provided', () => {
    const actual = getTwelveColumnsWidthValue(16);
    expect(actual).toBe(12);
  });

  it('should return 12 if bigger than max number provided', () => {
    const actual = getTwelveColumnsWidthValue(20);
    expect(actual).toBe(12);
  });
});
