import { adaptOnChange } from './adaptOnChange';

describe('adaptOnChange', () => {
  it('should return a function', () => {
    const actual = adaptOnChange();
    expect(actual).toBeInstanceOf(Function);
  });

  describe('the returned function', () => {
    it('should call `onChange` with the right object', () => {
      const onChange = jest.fn();
      const name = '👺';
      const adaptedOnChange = adaptOnChange(onChange, name);

      const data = { value: '💰' };
      adaptedOnChange(undefined, data);

      expect(onChange).toHaveBeenCalledWith(
        expect.objectContaining({
          name,
          value: data.value,
        })
      );
    });
  });
});
