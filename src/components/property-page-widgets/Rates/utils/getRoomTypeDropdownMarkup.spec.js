import { mount } from 'enzyme';

import { getRoomTypeDropdownMarkup } from './getRoomTypeDropdownMarkup';

const options = [
  {
    text: 'EUR €',
    value: 'eur',
  },
  {
    text: 'GBP £',
    value: 'gbp',
  },
  {
    text: 'USD $',
    value: 'usd',
  },
];

const onChange = () => '😼';
const roomTypeInputLabel = 'A';
const roomTypesValue = 'eur';

const getRoomTypeDropdown = isShowingPlaceholder =>
  mount(
    getRoomTypeDropdownMarkup(
      isShowingPlaceholder,
      options,
      onChange,
      roomTypeInputLabel,
      roomTypesValue
    )
  );

describe('getRoomTypeDropdownMarkup', () => {
  describe('if `isShowingPlaceholder` is `true`', () => {
    it('should render the right structure', () => {
      const actual = getRoomTypeDropdown(true);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `isShowingPlaceholder` is `false`', () => {
    it('should render the right structure', () => {
      const actual = getRoomTypeDropdown(false);

      expect(actual).toMatchSnapshot();
    });
  });
});
