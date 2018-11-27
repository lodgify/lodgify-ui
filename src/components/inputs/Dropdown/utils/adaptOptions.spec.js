import { adaptOptions } from './adaptOptions';

describe('adaptOptions', () => {
  describe('by default', () => {
    it('should return the right `options` structure', () => {
      const options = [{ some: 'option' }, { no: 'image' }];
      const actual = adaptOptions(options, false);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if one or more options specify an `image`', () => {
    it('should return the right `options` structure', () => {
      const options = [
        {
          imageUrl: 'someImage',
          imageSrcSet: 'someSrcSets',
          imageSizes: 'someSizes',
        },
        {},
      ];
      const actual = adaptOptions(options, true);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if one or more options have an `indent`', () => {
    it('should return the right `options` structure', () => {
      const options = [
        {
          indent: 1,
          imageUrl: 'SRC-1',
          imageSrcSet: 'SRC-1-SrcSets',
          imageSizes: 'SRC-1-someSizes',
          text: 'bam',
          value: 'boozled',
        },
      ];
      const adaptedOptions = adaptOptions(options, false);
      const actual = adaptedOptions[0].className;

      expect(actual).toMatchSnapshot();
    });
  });
});
