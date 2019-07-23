jest.mock('./getIconOrFlag');

import { getAllOptions } from './getAllOptions';
import { getIconOrFlag } from './getIconOrFlag';

getIconOrFlag.mockImplementation(value => value);

describe('getAllOptions', () => {
  it('should return the right shape', () => {
    const options = [
      { value: 'JP', label: 'jappppan' },
      { value: 'DE', label: 'gerrrmany' },
      { value: 'GB', label: 'uunnniited' },
    ];

    const actual = getAllOptions(options);

    expect(actual).toMatchSnapshot();
  });

  it('should use the `optionCache`', () => {
    const options = [
      { value: 'JP', label: 'jappppan' },
      { value: 'DE', label: 'gerrrmany' },
      { value: 'GB', label: 'uunnniited' },
    ];

    getIconOrFlag.mockClear();
    getAllOptions(options);

    expect(getIconOrFlag).not.toHaveBeenCalled();
  });
});
