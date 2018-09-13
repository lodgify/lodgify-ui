import React from 'react';
import { shallow } from 'enzyme';
import { Segment } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getBackgroundImageUrl } from 'utils/get-background-image-url';

import { Component as FullBleed } from './component';

const props = {
  children: '🚸',
  imageUrl: '🐱🐱',
};

const getFullBleed = extraProps =>
  shallow(<FullBleed {...props} {...extraProps} />);
const getSegment = extraProps => getFullBleed(extraProps).find(Segment);

describe('<FullBleed />', () => {
  it('should render a single Semantic UI `Segment` component', () => {
    const wrapper = getFullBleed();

    expectComponentToBe(wrapper, Segment);
  });

  describe('the `Segment` component', () => {
    it('should have the right props', () => {
      const wrapper = getSegment();

      expectComponentToHaveProps(wrapper, {
        children: props.children,
        className: 'full-bleed',
        style: { backgroundImage: getBackgroundImageUrl(props.imageUrl) },
        vertical: true,
      });
    });
  });

  describe('if `hasGradient` is passed', () => {
    it('should have the correct `props.className`', () => {
      const wrapper = getSegment({ hasGradient: true });

      expectComponentToHaveProps(wrapper, {
        className: 'full-bleed has-gradient',
      });
    });
  });

  describe('if `props.className` is passed', () => {
    it('should have the correct `props.className`', () => {
      const wrapper = getSegment({ className: '🏛' });

      expectComponentToHaveProps(wrapper, {
        className: 'full-bleed 🏛',
      });
    });
  });

  it('should have `displayName` `FullBleed`', () => {
    expectComponentToHaveDisplayName(FullBleed, 'FullBleed');
  });
});
