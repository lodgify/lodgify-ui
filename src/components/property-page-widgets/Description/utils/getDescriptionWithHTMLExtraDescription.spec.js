import { descriptionText } from '../mock-data/props';

import { getDescriptionWithHTMLExtraDescription } from './getDescriptionWithHTMLExtraDescription';

describe('getDescriptionWithHTMLExtraDescription', () => {
  it('should render the correct structure', () => {
    const extraDescriptionText = '<p>extra description</p>';
    const extraDescriptionButtonText = 'button text';
    const actual = getDescriptionWithHTMLExtraDescription(
      descriptionText,
      extraDescriptionText,
      extraDescriptionButtonText
    );

    expect(actual).toMatchSnapshot();
  });
});
