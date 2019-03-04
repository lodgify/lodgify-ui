import { setInputState } from './setInputState';

describe('setInputState', () => {
  it('should call `component.setState` with a function', () => {
    const component = {
      setState: jest.fn(),
    };

    setInputState(component);

    expect(component.setState).toHaveBeenCalledWith(expect.any(Function));
  });

  describe('the function passed to `setState`', () => {
    it('should return the right shape', () => {
      const inputName = 'some name';
      const previousState = {
        [inputName]: {
          the: 'input state',
        },
      };
      const nextInputState = {
        some: 'next input state',
      };
      const component = {
        setState: jest.fn(func => {
          global.actual = func(previousState);
        }),
      };

      setInputState(component, inputName, nextInputState);

      expect(global.actual).toEqual({
        'some name': {
          the: 'input state',
          some: 'next input state',
        },
      });
    });
  });
});
