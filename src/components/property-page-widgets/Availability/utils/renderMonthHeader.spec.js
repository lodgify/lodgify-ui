import moment from 'moment';
import { shallow } from 'enzyme';

import { renderMonthHeader } from './renderMonthHeader';

const today = moment();

const localeCode = 'ko';

const getMonthHeader = () =>
  shallow(
    renderMonthHeader(localeCode)({
      month: today,
    })
  );

describe('renderMonthHeader', () => {
  it('should return a function', () => {
    const actual = renderMonthHeader();

    expect(actual).toBeInstanceOf(Function);
  });

  describe('the returned function', () => {
    it('should return the correct structure', () => {
      const actual = getMonthHeader();

      expect(actual).toMatchSnapshot();
    });
  });
});
