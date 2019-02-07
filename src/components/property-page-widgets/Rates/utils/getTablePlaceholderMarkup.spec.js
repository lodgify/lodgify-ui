import { mount } from 'enzyme';

import { getTablePlaceholderMarkup } from './getTablePlaceholderMarkup';

describe('getTablePlaceholderMarkup', () => {
  it('should render the right structure', () => {
    const actual = mount(getTablePlaceholderMarkup());

    expect(actual).toMatchSnapshot();
  });
});
