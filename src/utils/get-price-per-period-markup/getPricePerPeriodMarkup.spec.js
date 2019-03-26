import React from 'react';
import { shallow } from 'enzyme';

import { getPricePerPeriodMarkup } from './getPricePerPeriodMarkup';

const nightPrice = '$250';
const size = 'small';
const periodText = 'century';

const getPricePerPeriodMarkupWrapper = () =>
  shallow(<div>{getPricePerPeriodMarkup(nightPrice, periodText, size)}</div>);

describe('getPricePerPeriodMarkup', () => {
  it('should have the right structure', () => {
    const wrapper = getPricePerPeriodMarkupWrapper();

    expect(wrapper).toMatchSnapshot();
  });
});
