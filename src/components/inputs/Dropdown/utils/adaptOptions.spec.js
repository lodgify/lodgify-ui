import { shallow } from 'enzyme';

import { adaptOptions } from './adaptOptions';

describe('adaptOptions', () => {
  describe('if no options specify an image', () => {
    it('should return the `options`', () => {
      const options = [{ some: 'option' }, { no: 'image' }];
      const actual = adaptOptions(options, false);

      expect(actual).toBe(options);
    });
  });

  describe('if one or more options specify an image', () => {
    it('should return an array of options', () => {
      const options = [{ image: 'someImage' }, {}];
      const actual = adaptOptions(options, true);

      expect(actual).toBeInstanceOf(Array);
    });

    describe('the `text` property of each option', () => {
      it('should be an array', () => {
        const options = [{ image: 'someImage' }, { text: 'someOtherText' }];
        const adaptedOptions = adaptOptions(options, true);

        adaptedOptions.forEach(adaptedOption => {
          const actual = adaptedOption.text;

          expect(actual).toBeInstanceOf(Array);
        });
      });

      it('should have an `img` element at index 0', () => {
        const options = [{ image: 'someImage' }];
        const adaptedOptions = adaptOptions(options, true);
        const textIndex0 = adaptedOptions[0].text[0];
        const element = shallow(textIndex0);
        const actual = element.is('img');

        expect(actual).toBe(true);
      });

      it('should pass the right props to the `img`', () => {
        const options = [{ image: 'someImage', text: 'someText' }];
        const adaptedOptions = adaptOptions(options, true);
        const textIndex0 = adaptedOptions[0].text[0];
        const element = shallow(textIndex0);
        const actual = element.props();

        expect(actual).toEqual(
          expect.objectContaining({
            alt: 'someText',
            className: 'ui image',
            src: 'someImage',
          })
        );
      });

      it('should have an `span` element at index 1', () => {
        const options = [{ image: 'someImage' }];
        const adaptedOptions = adaptOptions(options, true);
        const textIndex1 = adaptedOptions[0].text[1];
        const element = shallow(textIndex1);
        const actual = element.is('span');

        expect(actual).toBe(true);
      });

      it('should pass the right props to the `span`', () => {
        const options = [{ image: 'someImage' }];
        const adaptedOptions = adaptOptions(options, true);
        const textIndex1 = adaptedOptions[0].text[1];
        const element = shallow(textIndex1);
        const actual = element.props();

        expect(actual).toEqual(
          expect.objectContaining({
            className: 'text',
          })
        );
      });

      it('should pass the incoming `text` value to the `span`', () => {
        const options = [{ image: 'someImage', text: '📝' }];
        const adaptedOptions = adaptOptions(options, true);
        const textIndex1 = adaptedOptions[0].text[1];
        const element = shallow(textIndex1);
        const actual = element.contains(options[0].text);

        expect(actual).toBe(true);
      });
    });

    it('should return the `value` property of each option without modification', () => {
      const options = [
        { image: 'someImage', value: '💰' },
        { value: 'self worth' },
      ];
      const adaptedOptions = adaptOptions(options, true);

      adaptedOptions.forEach((adaptedOption, index) => {
        const actual = adaptedOption.value;

        expect(actual).toBe(options[index].value);
      });
    });

    it('should not return the `image` property of each option', () => {
      const options = [{ image: 'someImage' }];
      const adaptedOptions = adaptOptions(options, true);
      const actual = adaptedOptions[0].image;

      expect(actual).toBeUndefined();
    });
  });
});
