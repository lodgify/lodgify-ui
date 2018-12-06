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

  describe('if `props.heading` is defined', () => {
    it('should render the right structure', () => {
      const heading = ':hurtrealbad:';
      const actual = getGallery({ heading });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Gallery', () => {
    expectComponentToHaveDisplayName(Gallery, 'Gallery');
  });
});
