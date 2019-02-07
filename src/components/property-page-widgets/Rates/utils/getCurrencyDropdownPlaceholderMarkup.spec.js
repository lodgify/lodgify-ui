import { mount } from 'enzyme';

import { getCurrencyDropdownPlaceholderMarkup } from './getCurrencyDropdownPlaceholderMarkup';

describe('getCurrencyDropdownPlaceholderMarkup', () => {
  it('should render the right structure', () => {
    const actual = mount(getCurrencyDropdownPlaceholderMarkup());

    expect(actual).toMatchSnapshot();
  });
});
