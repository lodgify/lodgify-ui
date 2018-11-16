import { returnFirstArgument } from './returnFirstArgument';

describe('returnFirstArgument', () => {
  it('should return the value provided by the first function argument', () => {
    const value = 'Last night a DJ saved my life';
    const extraParams = ['param-a', 'param-b'];
    const actual = returnFirstArgument(value, ...extraParams);

    expect(actual).toBe(value);
  });

  it('should return `undefined` if no arguments are passed', () => {
    const actual = returnFirstArgument();

    expect(actual).toBeUndefined();
  });
});
