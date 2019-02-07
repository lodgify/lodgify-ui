import { mount } from 'enzyme';

import { getCardsPlaceholderMarkup } from './getCardsPlaceholderMarkup';

describe('getCardsPlaceholderMarkup', () => {
  it('should render the right structure', () => {
    const actual = mount(getCardsPlaceholderMarkup());

    expect(actual).toMatchSnapshot();
  });
});
