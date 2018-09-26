import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';

import { getGalleryHeadingMarkup } from './getGalleryHeadingMarkup';

describe('getGalleryHeadingMarkup', () => {
  describe('if `propertyName` is not defined', () => {
    it('should return `undefined`', () => {
      const actual = getGalleryHeadingMarkup();

      expect(actual).toBeUndefined();
    });
  });

  describe('if `propertyName` is defined', () => {
    const propertyName = 'Wurp';
    const ratingNumber = 3;

    const getGalleryHeadingMarkupAsComponent = () =>
      shallow(<div>{getGalleryHeadingMarkup(propertyName, ratingNumber)}</div>);

    it('should return the right children', () => {
      const wrapper = getGalleryHeadingMarkupAsComponent();

      expectComponentToHaveChildren(wrapper, Heading, Rating);
    });

    describe('the `Heading`', () => {
      it('should have the right children', () => {
        const wrapper = getGalleryHeadingMarkupAsComponent().find(Heading);

        expectComponentToHaveChildren(wrapper, propertyName);
      });
    });

    describe('the `Rating`', () => {
      it('should have the right props', () => {
        const wrapper = getGalleryHeadingMarkupAsComponent().find(Rating);

        expectComponentToHaveProps(wrapper, { ratingNumber });
      });
    });
  });
});
