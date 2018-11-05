import React from 'react';
import { mount } from 'enzyme';

import { getAspectRatioPlaceholderMarkup } from './getAspectRatioPlaceholderMarkup';

const getMarkup = (imageWidth, imageHeight) =>
  mount(<div>{getAspectRatioPlaceholderMarkup(imageWidth, imageHeight)}</div>);

describe('`getAspectRatioPlaceholderMarkup`', () => {
  describe('by default', () => {
    it('should return the right structure', () => {
      const actual = getMarkup(1000, 200);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `imageWidth === undefined`', () => {
    it('should return the right structure', () => {
      const actual = getMarkup(undefined, 200);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `imageHeight === undefined`', () => {
    it('should return the right structure', () => {
      const actual = getMarkup(1000, undefined);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if both arguments are undefined', () => {
    it('should return the right structure', () => {
      const actual = getMarkup(undefined, undefined);

      expect(actual).toMatchSnapshot();
    });
  });
});
