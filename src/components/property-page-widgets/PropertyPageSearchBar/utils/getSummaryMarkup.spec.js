import { mount } from 'enzyme';

import { getSummaryMarkup } from './getSummaryMarkup';

const props = {
  locationName: 'Location',
  pricePerPeriod: '200€',
  propertyName: 'My property',
  ratingNumber: 4.3,
};

describe('`getSummaryMarkup`', () => {
  const getSummary = extraProps =>
    mount(
      getSummaryMarkup({
        ...props,
        ...extraProps,
      })
    );

  it('should render the right structure', () => {
    const actual = getSummary();

    expect(actual).toMatchSnapshot();
  });

  it('should render the right structure if `areOnlyNightPriceAndRatingDisplayed` is `true`', () => {
    const actual = getSummary({
      areOnlyNightPriceAndRatingDisplayed: true,
    });

    expect(actual).toMatchSnapshot();
  });
});
