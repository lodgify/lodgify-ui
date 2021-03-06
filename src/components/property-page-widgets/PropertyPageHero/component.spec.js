jest.mock('react-dates', () => {
  const { Component } = require('react');

  class DateRangePicker extends Component {
    render() {
      return <div />;
    }
  }

  return { DateRangePicker };
});

import React from 'react';
import { shallow, mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { ComponentWithResponsive as PropertyPageHero } from './component';

const imageUrl = '🚞';

const props = {
  activeNavigationItemIndex: 1,
  backgroundImageUrl: 'some url',
  headerLogoSizes: 'a load of logo sizes',
  headerLogoSrc: 'src',
  headerLogoSrcSet: 'a load of logo src sets',
  headerLogoText: 'text',
  headerNavigationItems: [{ text: 'Home', href: '/' }],
  headerPrimaryCTA: { onClick: Function.prototype, text: 'Book now' },
  galleryImages: [
    { url: imageUrl, descriptionText: 'Entrance' },
    { url: imageUrl, descriptionText: 'Kitchen' },
  ],
  secondaryButtonText: '🐸',
};

const getPropertyPageHero = () => shallow(<PropertyPageHero {...props} />);

const getWrappedPropertyPageHero = extraProps => {
  const Child = getPropertyPageHero().prop('as');

  return mount(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('PropertyPageHero', () => {
  it('should render the right structure', () => {
    const actual = getWrappedPropertyPageHero();

    expect(actual).toMatchSnapshot();
  });

  describe('if there are fewer than two items in `galleryImages`', () => {
    it('should render the right structure', () => {
      const actual = getWrappedPropertyPageHero({
        galleryImages: [{ url: imageUrl, descriptionText: 'Entrance' }],
      });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the displayName `PropertyPageHero`', () => {
    const wrapper = getPropertyPageHero().prop('as');

    expectComponentToHaveDisplayName(wrapper, 'PropertyPageHero');
  });
});
