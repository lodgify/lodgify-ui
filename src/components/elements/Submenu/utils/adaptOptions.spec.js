import { items } from '../mock-data/items';

import { adaptOptions } from './adaptOptions';

describe('adaptOptions', () => {
  describe('if any of the options has a label', () => {
    it('should return the right structure', () => {
      const options = [
        {
          label: 'Euro',
          text: 'Eur',
          value: 'eur',
        },
      ];
      const actual = adaptOptions(options);

      expect(actual).toMatchSnapshot();
    });
  });
  describe('if none of the options has a label', () => {
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
});
