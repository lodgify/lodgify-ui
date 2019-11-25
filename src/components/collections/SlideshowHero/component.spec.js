import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as SlideshowHero } from './component';
import { navigationItems } from './mock-data/mock-data';

const props = {
  searchBarProps: {},
  slideshowProps: {
    images: [{ url: 'url' }],
  },
  headerProps: {
    logoText: 'logoText',
    navigationItems,
  },
  headingText: 'headingText',
};

const getSlideshowHeroComponent = extraProps =>
  mount(<SlideshowHero {...props} {...extraProps} />);

describe('<SlideshowHero />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getSlideshowHeroComponent();

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the displayName `SlideshowHero`', () => {
    expectComponentToHaveDisplayName(SlideshowHero, 'SlideshowHero');
  });
});
