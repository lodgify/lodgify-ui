import React from 'react';

import { BlockPlaceholder } from 'elements/BlockPlaceholder';

import { getAdaptedImagesWithPlaceholders } from './getAdaptedImagesWithPlaceholders';

const adaptedImages = [{ original: 'https://glue.cdbcdn.com/bicep/bicep.jpg' }];
const brokenImageUrl = 'https://glue.cdbcdn.com/bicep/bicep.jpg';

describe('getAdaptedImagesWithPlaceholders', () => {
  describe('if any image does not have a broken url', () => {
    it('should return an Object with the adaptesImages', () => {
      const actual = getAdaptedImagesWithPlaceholders(adaptedImages, undefined);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if any image has a broken url', () => {
    it('should return an Object with `renderItem` as its only entry', () => {
      const actual = getAdaptedImagesWithPlaceholders(
        adaptedImages,
        brokenImageUrl
      );

      expect(actual).toMatchSnapshot();
    });
  });

  describe('the function stored in `renderItem` entry', () => {
    it('should return a `BlockPlaceholder` component', () => {
      const actual = getAdaptedImagesWithPlaceholders(
        adaptedImages,
        brokenImageUrl
      );

      expect(actual[0].renderItem()).toEqual(
        <BlockPlaceholder isFluid isRectangular isSquare={false} />
      );
    });
  });
});
