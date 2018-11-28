import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Thumbnail } from './component';

const props = {
  imageUrl: 'www.⚡️.net',
  className: '🚥',
};

const getThumbnail = extraProps =>
  mount(<Thumbnail {...props} {...extraProps} />);

describe('<Thumbnail />', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getThumbnail();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isCircular` is true', () => {
    it('should render the right structure', () => {
      const actual = getThumbnail({ isCircular: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isSquare` is true', () => {
    it('should render the right structure', () => {
      const actual = getThumbnail({ isSquare: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.size` is supplied', () => {
    it('should render the right structure', () => {
      const actual = getThumbnail({ size: 'small' });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the displayName `Thumbnail`', () => {
    expectComponentToHaveDisplayName(Thumbnail, 'Thumbnail');
  });
});
