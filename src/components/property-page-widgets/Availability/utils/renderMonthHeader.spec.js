import moment from 'moment';
import { shallow } from 'enzyme';

import { renderMonthHeader } from './renderMonthHeader';

const today = moment();

describe('renderMonthHeader', () => {
  const getMonthHeader = () =>
    shallow(
      renderMonthHeader({
        month: today,
      })
    );

  it('should correctly render 7 list items for each day', () => {
    const wrapper = getMonthHeader().find('li');

    expect(wrapper).toHaveLength(7);
    expect(
      wrapper
        .at(0)
        .find('small')
        .text()
    ).toContain('Su');
    expect(
      wrapper
        .at(6)
        .find('small')
        .text()
    ).toContain('Sa');
  });

  it('should correctly render the month title', () => {
    const wrapper = getMonthHeader().find('strong');

    expect(wrapper.text()).toBe(today.format('MMMM YYYY'));
  });
});
