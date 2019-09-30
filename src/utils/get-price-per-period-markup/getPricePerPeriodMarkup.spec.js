import React from 'react';
import { shallow } from 'enzyme';

import { getPricePerPeriodMarkup } from './getPricePerPeriodMarkup';

const pricePerPeriod = '$250';
const pricePerPeriodPrefix = 'morf';
const size = 'small';
const periodText = 'century';

const getPricePerPeriodMarkupWrapper = () =>
  shallow(
    <div>
      {getPricePerPeriodMarkup(
        pricePerPeriod,
        pricePerPeriodPrefix,
        periodText,
        size
      )}
    </div>
  );

describe('getPricePerPeriodMarkup', () => {
  it('should have the right structure', () => {
    const wrapper = getPricePerPeriodMarkupWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
