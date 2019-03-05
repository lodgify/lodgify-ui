import React from 'react';
import { mount } from 'enzyme';

import { getGalleryHeadingMarkup } from './getGalleryHeadingMarkup';

const propertyName = 'Wurp';

const getGalleryHeadingMarkupAsComponent = ratingNumber =>
  mount(<div>{getGalleryHeadingMarkup(propertyName, ratingNumber)}</div>);

describe('getGalleryHeadingMarkup', () => {
  describe('if `propertyName` is not defined', () => {
    it('should return `undefined`', () => {
      const actual = getGalleryHeadingMarkup();

      expect(actual).toBeUndefined();
    });
  });

  describe('if `propertyName` is defined', () => {
    it('should return the right structure', () => {
      const actual = getGalleryHeadingMarkupAsComponent(0);

      expect(actual).toMatchSnapshot();
    });

    describe('if `ratingNumber` is greater than 0', () => {
      it('should return the right structure', () => {
        const actual = getGalleryHeadingMarkupAsComponent(1);

        expect(actual).toMatchSnapshot();
      });
    });
  });
});
