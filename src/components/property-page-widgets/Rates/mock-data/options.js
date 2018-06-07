import { getRateCategoryHeadingMarkup } from '../utils/getRateCategoryHeadingMarkup';

export const currencyOptions = [
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

export const onChangeRoomType = () => '🏃‍♂️';

export const onChangeCurrency = () => '🏃‍♂️';

export const rateCategories = [
  {
    name: 'Season 1',
    dateRange: '01/05/2018 - 01/08/2018',
    numberOfGuests: '2',
    costPerExtraGuest: '1€',
    rates: ['40€', '30€', '40€', '40€'],
  },
  {
    name: 'Season 2',
    dateRange: '01/02/2018 - 01/08/2018',
    numberOfGuests: '3',
    costPerExtraGuest: '2€',
    rates: ['10€', '20€', '30€', '40€'],
  },
  {
    name: 'Season 3',
    dateRange: '01/03/2018 - 01/08/2018',
    numberOfGuests: '4',
    costPerExtraGuest: '3€',
    rates: ['40€', '30€', '20€', '10€'],
  },
];

export const rateHeadings = ['Mon-Thu', 'Fri', 'Sat', 'Sun'];

export const roomTypes = [
  {
    text: '🎅',
    value: '🎅',
    image: '🎅',
  },
  {
    text: '💪',
    value: '💪',
    image: '💪',
  },
  {
    text: '👃',
    value: '👃',
    image: '👃',
  },
  {
    text: '🧖️',
    value: '🧖️',
    image: '🧖️',
  },
];
