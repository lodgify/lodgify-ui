import React from 'react';
import { shallow } from 'enzyme';
import { Card, Image } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Heading } from 'typography/Heading';

import { getRoomTypeDescription } from './utils/getRoomTypeDescription';
import { Component as FeaturedRoomType } from './component';

const props = {
  bedsNumber: 3,
  guestsNumber: 3,
  imageAlternativeText: 'this alt tag',
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  roomTypeName: 'The Cat House',
  roomTypeUrl: '/',
};

const getFeaturedRoomType = () => shallow(<FeaturedRoomType {...props} />);

describe('<FeaturedRoomType />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getFeaturedRoomType();

    expectComponentToBe(wrapper, Card);
  });

  describe('the `Card` component', () => {
    const getCard = () => getFeaturedRoomType().find(Card);

    it('should have the right props', () => {
      const wrapper = getCard();

      expectComponentToHaveProps(wrapper, { href: props.roomTypeUrl });
    });

    it('should render the right children', () => {
      const wrapper = getCard();

      expectComponentToHaveChildren(wrapper, Image, Card.Content);
    });
  });

  describe('the `Image` component', () => {
    it('should have the right props', () => {
      const wrapper = getFeaturedRoomType().find(Image);
      const { imageAlternativeText, imageUrl } = props;

      expectComponentToHaveProps(wrapper, {
        alt: imageAlternativeText,
        src: imageUrl,
      });
    });
  });

  describe('the `Card.Content` component', () => {
    it('should render the right children', () => {
      const wrapper = getFeaturedRoomType().find(Card.Content);

      expectComponentToHaveChildren(
        wrapper,
        Card.Header,
        Card.Description,
        Card.Description,
        Card.Description
      );
    });
  });

  describe('the `Card.Header` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedRoomType().find(Card.Header);

      expectComponentToHaveChildren(wrapper, props.roomTypeName);
    });
  });

  describe('the first `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedRoomType()
        .find(Card.Description)
        .at(0);

      expectComponentToHaveChildren(wrapper, props.locationName);
    });
  });

  describe('the second `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedRoomType()
        .find(Card.Description)
        .at(1);

      expectComponentToHaveChildren(
        wrapper,
        getRoomTypeDescription(props.guestsNumber, props.bedsNumber)
      );
    });
  });

  describe('the third `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedRoomType()
        .find(Card.Description)
        .at(2)
        .children();

      expectComponentToBe(wrapper, 'span');
    });
  });

  describe('the span', () => {
    it('should have the right children', () => {
      const wrapper = getFeaturedRoomType().find('span');

      expectComponentToHaveChildren(wrapper, 'from ', Heading, '/night');
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getFeaturedRoomType().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();

      expectComponentToHaveProps(wrapper, { size: 'medium' });
    });

    it('should have the right children', () => {
      const wrapper = getHeading();

      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  it('should have `displayName` `FeaturedRoomType`', () => {
    expectComponentToHaveDisplayName(FeaturedRoomType, 'FeaturedRoomType');
  });
});
