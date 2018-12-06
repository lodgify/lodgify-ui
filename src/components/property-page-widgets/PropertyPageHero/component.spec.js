import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as PropertyPageHero } from './component';

const imageUrl = '🚞';

const props = {
  activeNavigationItemIndex: 1,
  headerLogoSrc: 'src',
  headerLogoText: 'text',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { onClick: Function.prototype, text: 'Book now' },
  images: [{ imageUrl, label: 'Entrance' }, { imageUrl, label: 'Kitchen' }],
  searchBarGuestsOptions: [{ text: '1', value: '1' }],
  searchBarLocationOptions: [{ text: '1', value: '1' }],
  searchBarModalHeadingText: '😹',
  searchBarSearchButton: 'hey',
  secondaryButtonText: '🐸',
  searchBarGetIsDayBlocked: Function.prototype,
  searchBarOnChangeInput: Function.prototype,
  searchBarOnSubmit: Function.prototype,
};

const getPropertyPageHero = () => shallow(<PropertyPageHero {...props} />);

const getWrappedPropertyPageHero = extraProps => {
  const Child = getPropertyPageHero().prop('as');

  return mount(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('PropertyPageHero', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getWrappedPropertyPageHero();

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the displayName `PropertyPageHero`', () => {
    const wrapper = getPropertyPageHero().prop('as');

    expectComponentToHaveDisplayName(wrapper, 'PropertyPageHero');
  });
});
