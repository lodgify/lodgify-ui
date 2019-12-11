import React from 'react';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as Avatar } from './component';

const testid = testidSelectorFactory('avatar');

const mountAvatar = ({ firstname = 'foo', lastname = 'bar', image }) =>
  mount(<Avatar firstname={firstname} image={image} lastname={lastname} />);

describe('Avatar', () => {
  describe('when the avatar is mount with image', () => {
    const imageUrl = 'http://foo.png';
    const current = mountAvatar({ image: imageUrl });

    it('should have an image element inside', () => {
      const image = current.find(testid('image'));

      expect(image.length).toBe(1);
      expect(image.props()).toMatchObject({
        imageUrl,
      });
    });
  });
  describe('when the avatar is mount without image', () => {
    const firstname = 'foo';
    const lastname = 'bar';
    const current = mountAvatar({ firstname, lastname }).render();

    it(`shouldn't have the image element`, () => {
      const image = current.find(testid('image'));

      expect(image.length).toBe(0);
    });
    it('should have a text element', () => {
      const text = current.find(testid('text'));

      expect(text.length).toBe(1);
    });
    it('the text element should contain the first letter of both firstname and lastname', () => {
      const text = current.find(testid('text'));

      expect(text.text()).toEqual(
        `${firstname[0]}${lastname[0]}`.toUpperCase()
      );
    });
  });
});
