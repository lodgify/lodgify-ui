import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as Avatar } from './component';

const testid = testidSelectorFactory('avatar');

const mountAvatar = ({ firstName = 'foo', lastName = 'bar', image }) =>
  mount(<Avatar firstName={firstName} image={image} lastName={lastName} />);

describe('Avatar', () => {
  describe('when the avatar is mount with image', () => {
    const imageUrl = 'https://via.placeholder.com/150';
    const current = mountAvatar({ image: imageUrl });

    it('should have an image element inside', () => {
      const image = current.find(testid('image'));

      expect(image.length > 0).toBe(true);
      expect(image.first().props()).toMatchObject({
        imageUrl,
      });
    });
  });
  describe('when the avatar is mount without image', () => {
    const firstName = 'foo';
    const lastName = 'bar';
    const current = mountAvatar({ firstName, lastName }).render();

    it(`shouldn't have the image element`, () => {
      const image = current.find(testid('image'));

      expect(image.length).toBe(0);
    });
    it('should have a text element', () => {
      const text = current.find(testid('text'));

      expect(text.length).toBe(1);
    });
    it('should contain the first letter of both firstName and lastName', () => {
      const text = current.find(testid('text'));

      expect(text.text()).toEqual(
        `${firstName[0]}${lastName[0]}`.toUpperCase()
      );
    });
  });
});
