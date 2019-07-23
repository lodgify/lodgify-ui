import { Component as FlagComponent } from './component';

describe('FlagComponent', () => {
  it('should return `false`', () => {
    const actual = FlagComponent();

    expect(actual).toBe(false);
  });
});
