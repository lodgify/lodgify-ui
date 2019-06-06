import { getPriceLabelMarkup } from './getPriceLabelMarkup';

const pricePerPeriod = '$289';

describe('`getPriceLabelMarkup`', () => {
  it('should render the right structure', () => {
    const periodText = 'flopy disks';
    const actual = getPriceLabelMarkup(pricePerPeriod, periodText);

    expect(actual).toMatchSnapshot();
  });

  describe('if `periodText` is falsy;', () => {
    it('should render the right structure', () => {
      const periodText = '';
      const actual = getPriceLabelMarkup(pricePerPeriod, periodText);

      expect(actual).toMatchSnapshot();
    });
  });
});
