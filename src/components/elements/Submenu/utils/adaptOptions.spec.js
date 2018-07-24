import { items } from '../mock-data/items';

import { adaptOptions } from './adaptOptions';

describe('adaptOptions', () => {
  it('should add a `key` property to each object in the passed array', () => {
    const adaptedOptions = adaptOptions(items);

    adaptedOptions.forEach((adaptedOption, index) => {
      expect(adaptedOption).toEqual({
        key: items[index].text,
        ...items[index],
      });
    });
  });
});
