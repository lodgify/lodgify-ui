import React from 'react';
import { shallow } from 'enzyme';
import Card from 'semantic-ui-react/dist/commonjs/views/Card';
import Image from 'semantic-ui-react/dist/commonjs/elements/Image';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Subheading } from 'typography/Subheading';
import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';

import { Component as FeaturedProperty } from './component';
import { getPropertyDescription } from './utils/getPropertyDescription';

const props = {
  bedroomsNumber: 3,
  guestsNumber: 3,
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4.8,
};

const getFeaturedProperty = () => shallow(<FeaturedProperty {...props} />);

describe('<FeaturedProperty />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getFeaturedProperty();

    expectComponentToBe(wrapper, Card);
  });

  describe('the `Card` component', () => {
    const getCard = () => getFeaturedProperty().find(Card);

    it('should have the right props', () => {
      const wrapper = getCard();

      expectComponentToHaveProps(wrapper, {
        href: props.propertyUrl,
      });
    });

    it('should render the right children', () => {
      const wrapper = getCard();

      expectComponentToHaveChildren(wrapper, Image, Card.Content);
    });
  });

  describe('the `Image` component', () => {
    it('should have the right props', () => {
      const wrapper = getFeaturedProperty().find(Image);

      expectComponentToHaveProps(wrapper, {
        alt: '',
        src: props.imageUrl,
      });
    });
  });

  describe('the `Card.Content` component', () => {
    it('should render the right children', () => {
      const wrapper = getFeaturedProperty().find(Card.Content);

      expectComponentToHaveChildren(
        wrapper,
        Card.Meta,
        Card.Header,
        Card.Description,
        Card.Description,
        Card.Description,
        Card.Description
      );
    });
  });

  describe('the `Card.Meta` component', () => {
    it('should have the right children', () => {
      const wrapper = getFeaturedProperty().find(Card.Meta);

      expectComponentToHaveChildren(wrapper, Subheading);
    });
  });

  describe('the `Subheading` component', () => {
    it('should have the right children', () => {
      const wrapper = getFeaturedProperty().find(Subheading);

      expectComponentToHaveChildren(wrapper, props.propertyType);
    });
  });

  describe('the `Card.Header` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty().find(Card.Header);

      expectComponentToHaveChildren(wrapper, props.propertyName);
    });
  });

  describe('the first `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(0);

      expectComponentToHaveChildren(wrapper, props.locationName);
    });
  });

  describe('the second `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(1);

      expectComponentToHaveChildren(
        wrapper,
        getPropertyDescription(props.guestsNumber, props.bedroomsNumber)
      );
    });
  });

  describe('the third `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(2);

      expectComponentToHaveChildren(wrapper, Rating);
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .find(Rating);

      expectComponentToHaveProps(wrapper, {
        ratingNumber: props.ratingNumber,
        iconSize: 'tiny',
      });
    });
  });

  describe('the fourth `Card.Description` component', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty()
        .find(Card.Description)
        .at(3)
        .children();

      expectComponentToBe(wrapper, 'span');
    });
  });

  describe('the `span`', () => {
    it('should have the right `children`', () => {
      const wrapper = getFeaturedProperty().find('span');

      expectComponentToHaveChildren(wrapper, 'from ', Heading, '/night');
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getFeaturedProperty().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();

      expectComponentToHaveProps(wrapper, { size: 'medium' });
    });

    it('should have the right children', () => {
      const wrapper = getHeading();

      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  it('should have `displayName` `FeaturedProperty`', () => {
    expectComponentToHaveDisplayName(FeaturedProperty, 'FeaturedProperty');
  });
});
