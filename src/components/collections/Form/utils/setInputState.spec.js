import { setInputState } from './setInputState';

describe('setInputState', () => {
  it('should call `component.setState` with the right arguments', () => {
    const inputName = 'some name';
    const component = {
      setState: jest.fn(),
      state: {
        [inputName]: { the: 'input state' },
      },
    };
    const nextInputState = {
      some: 'next input state',
    };

    setInputState(component, inputName, nextInputState);

    expect(component.setState).toHaveBeenCalledWith({
      'some name': {
        the: 'input state',
        some: 'next input state',
      },
    });
  });
});
