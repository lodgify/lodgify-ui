import React from 'react';
import { act } from 'react-dom/test-utils';
import { shallow } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as ContactHeader } from './component';

const props = {
  headingHref: 'D',
  headingText: 'E',
  navigationMenuItems: [
    {
      text: 'a-a',
      link: '#aaa',
      subItems: [
        {
          href: '/la-casa-viva',
          text: 'La Casa Viva',
        },
        {
          href: '/la-casa-muerta',
          text: 'La Casa Muerta',
        },
        {
          href: '/the-white-lodge',
          text: 'The White Lodge',
        },
        {
          href: '/the-black-lodge',
          text: 'The Black Lodge',
        },
      ],
    },
    { text: 'b-b' },
  ],
  languageOptions: [{ text: 'b-b' }, { text: 'b-b' }],
  onChangeLanguage: null,
  languageValue: 's',
  currencyOptions: [{ text: 'b-b' }, { text: 'b-b' }],
  currencyNoResultsText: 's',
  onChangeCurrency: undefined,
  currencyValue: 's',
  phoneNumber: 's-909-s',
  primaryCTA: { onClick: () => {}, text: 'Book now' },
};

const testid = testidSelectorFactory('contactHeader');
const getMobileHeader = () => shallow(<ContactHeader {...props} />);

act(() => {
  describe('`ContactHeader` component', () => {
    it('should return the right structure', () => {
      const wrapper = getMobileHeader();

      expect(wrapper.find(testid()).length).toEqual(1);
    });
  });
});
