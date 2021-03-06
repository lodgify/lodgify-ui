import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount, shallow } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as MobileHeader } from './component';

const props = {
  headingHref: 'D',
  headingText: 'E',
  navigationItems: [
    {
      text: 'a-a',
      link: '#aaa',
      subItems: [
        {
          href: '/la-casa-viva',
          text: 'La Casa Viva',
        },
      ],
    },
    { text: 'b-b' },
    { text: 'c-c' },
  ],
  languageOptions: [{ text: 'b-b' }, { text: 'b-b' }],
  onChangeLanguage: jest.fn(),
  languageValue: 's',
  currencyOptions: [{ text: 'b-b' }, { text: 'b-b' }],
  currencyNoResultsText: 's',
  onChangeCurrency: jest.fn(),
  currencyValue: 's',
  phoneNumber: 's-909-s',
};

const testid = testidSelectorFactory('MobileHeader');

describe('`StickyMenu` component', () => {
  act(() => {
    it('should return the right structure', () => {
      const getMobileHeader = () => mount(<MobileHeader {...props} />);
      const wrapper = getMobileHeader();

      expect(wrapper.find(testid()).length).toEqual(1);
    });
  });

  describe('Interaction: `Menu.Item` onClick', () => {
    it('should ', () => {
      const getMobileHeader = () => shallow(<MobileHeader {...props} />);
      let wrapper = getMobileHeader();

      let trigger = wrapper.find(testid('MobileHeaderItem_1'));

      trigger.simulate('click');
      wrapper.update();

      expect(wrapper.find(testid('MobileHeaderItem_1')).props().active).toBe(
        true
      );
    });
  });

  describe('Interaction: `Menu.Item` onClick', () => {
    it('should ', () => {
      const getMobileHeader = () => shallow(<MobileHeader {...props} />);
      let wrapper = getMobileHeader();

      wrapper
        .find('Accordion')
        .props()
        .panels[0].content.content[0].props.onClick();

      wrapper.update();

      expect(
        wrapper.find('Accordion').props().panels[0].content.content[0].props
          .active
      ).toBe(true);
    });
  });
});
