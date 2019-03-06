import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Gallery } from './component';

const images = [
  { imageUrl: '💻', label: '🔷' },
  { imageUrl: '💻', label: '🔷' },
];
const trigger = 'someTrigger';

const getGallery = props =>
  shallow(<Gallery images={images} trigger={trigger} {...props} />);

describe('<Gallery />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getGallery();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.headingText` is defined', () => {
    it('should render the right structure', () => {
      const headingText = ':hurtrealbad:';
      const actual = getGallery({ headingText });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if any `images` have `categoryText`', () => {
    it('should render the right structure', () => {
      const categoryText = 'cattata';
      const actual = getGallery({ images: [{ categoryText }] });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Gallery', () => {
    expectComponentToHaveDisplayName(Gallery, 'Gallery');
  });
});
