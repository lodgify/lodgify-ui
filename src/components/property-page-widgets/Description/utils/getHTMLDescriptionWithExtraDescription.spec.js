import { extraDescriptionText } from '../mock-data/props';

import { getHTMLDescriptionWithExtraDescription } from './getHTMLDescriptionWithExtraDescription';

describe('getHTMLDescriptionWithExtraDescription', () => {
  it('should render the right structure', () => {
    const actual = getHTMLDescriptionWithExtraDescription(
      '<h1>text<h1/>',
      extraDescriptionText,
      'button text'
    );

    expect(actual).toMatchSnapshot();
  });
});
