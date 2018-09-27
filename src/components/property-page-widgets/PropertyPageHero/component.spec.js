import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';
import { upperCase } from 'lodash';

import { Hero } from 'collections/Hero';
import { FlexContainer } from 'layout/FlexContainer';
import { Gallery } from 'media/Gallery';
import { Divider } from 'elements/Divider';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Button } from 'elements/Button';
import { ICON_NAMES } from 'elements/Icon';

import { ComponentWithResponsive as PropertyPageHero } from './component';

const imageUrl = '🚞';

const props = {
  headerLogoSrc: 'src',
  headerLogoText: 'text',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { href: '/book', text: 'Book now' },
  images: [{ imageUrl, label: 'Entrance' }, { imageUrl, label: 'Kitchen' }],
  searchBarGuestsOptions: [{ text: '1', value: '1' }],
  searchBarLocationOptions: [{ text: '1', value: '1' }],
  secondaryButtonText: '🐸',
};

const getPropertyPageHero = () => shallow(<PropertyPageHero {...props} />);

const getWrappedPropertyPageHero = extraProps => {
  const Child = getPropertyPageHero().prop('as');

  return shallow(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('PropertyPageHero', () => {
  it('should render a single `Hero` component', () => {
    const wrapper = getWrappedPropertyPageHero();

    expectComponentToBe(wrapper, Hero);
  });

  describe('the `Hero` component', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedPropertyPageHero();

      expectComponentToHaveProps(wrapper, {
        backgroundImageUrl: props.images[0].imageUrl,
        headerLogoSrc: props.headerLogoSrc,
        headerLogoText: props.headerLogoText,
        headerNavigationItems: props.headerNavigationItems,
        headerPrimaryCTA: props.headerPrimaryCTA,
        headerSearchBarGuestsOptions: props.searchBarGuestsOptions,
        headerSearchBarLocationOptions: props.searchBarLocationOptions,
      });
    });

    it('should have the right children', () => {
      const wrapper = getWrappedPropertyPageHero();

      expectComponentToHaveChildren(wrapper, FlexContainer, Divider);
    });
  });

  describe('the `FlexContainer`', () => {
    const getFlexContainer = props =>
      getWrappedPropertyPageHero(props).find(FlexContainer);

    it('should have the right props', () => {
      const wrapper = getFlexContainer();

      expectComponentToHaveProps(wrapper, {
        alignItems: 'flex-end',
      });
    });

    it('should have the right children', () => {
      const wrapper = getFlexContainer();

      expectComponentToHaveChildren(wrapper, HorizontalGutters);
    });
  });

  describe('the `HorizontalGutters` component', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedPropertyPageHero().find(HorizontalGutters);

      expectComponentToHaveChildren(wrapper, Gallery);
    });
  });

  describe('the `Gallery` component', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedPropertyPageHero().find(Gallery);

      expectComponentToHaveProps(wrapper, {
        heading: expect.any(Object),
        images: props.images,
        trigger: (
          <Button
            icon={ICON_NAMES.PLACEHOLDER}
            isCompact
            isPositionedRight
            isSecondary
          >
            {upperCase(props.secondaryButtonText)}
          </Button>
        ),
      });
    });
  });

  it('should have the displayName `PropertyPageHero`', () => {
    const wrapper = getPropertyPageHero().prop('as');

    expectComponentToHaveDisplayName(wrapper, 'PropertyPageHero');
  });
});
