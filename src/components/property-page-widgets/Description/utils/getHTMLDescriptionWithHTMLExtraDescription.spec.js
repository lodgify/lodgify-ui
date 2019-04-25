import { getHTMLDescriptionWithHTMLExtraDescription } from './getHTMLDescriptionWithHTMLExtraDescription';

describe('getHTMLDescriptionWithHTMLExtraDescription', () => {
  it('should return the right structure', () => {
    const description = '<h1>html description</h1>';
    const extraDescription = '<p>extra description</p>';
    const extraDescriptionButton = 'button text';
    const actual = getHTMLDescriptionWithHTMLExtraDescription(
      description,
      extraDescription,
      extraDescriptionButton
    );

    expect(actual).toMatchSnapshot();
  });
});
