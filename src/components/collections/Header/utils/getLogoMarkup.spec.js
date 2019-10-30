import { mount } from 'enzyme';

import { getLogoMarkup } from './getLogoMarkup';

const logoHref = 'someLogoHref';
const logoSubText = 'someLogoTagline';
const logoText = 'someLogoText';
const logoSrc = 'someLogoSrc';
const logoSize = 'someLogoSize';
const sizes = 'someSizes';
const srcSet = 'someSrcSet';

const getLogoMarkupAsComponent = (props = []) =>
  mount(getLogoMarkup(logoHref, logoSubText, logoText, ...props));

describe('getLogoMarkup', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getLogoMarkupAsComponent();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `logoSrc`, `logoSizes` and `logoSrcSet` are passed', () => {
    it('should render the right structure', () => {
      const actual = getLogoMarkupAsComponent([
        logoSrc,
        logoSize,
        sizes,
        srcSet,
      ]);

      expect(actual).toMatchSnapshot();
    });
  });
});
