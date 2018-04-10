import React from 'react';
import { shallow } from 'enzyme';
import { Card, Image, Rating } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

import { Component as PropertySummary } from './component';

const props = {
  bedroomsNumber: 3,
  imageUrl: '🐱🐱',
  guestsNumber: 3,
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4.8,
};

const getPropertySummary = () => shallow(<PropertySummary {...props} />);
const getCard = () => getPropertySummary().find(Card);
const getThirdCardDescription = () =>
  getPropertySummary()
    .find(Card.Description)
    .at(2);
const getFourthCardDescription = () =>
  getPropertySummary()
    .find(Card.Description)
    .at(3);

describe('<PropertySummary />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getPropertySummary();
    const actual = wrapper.find(Card);
    expect(actual).toHaveLength(1);
  });

  describe('the `Card` component', () => {
    it('should have the right props', () => {
      const wrapper = getCard();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          href: props.propertyUrl,
        })
      );
    });

    it('should render the right children', () => {
      const children = ['Image', 'CardContent'];
      const wrapper = getCard();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the `Image` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertySummary().find(Image);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          alt: '',
          src: props.imageUrl,
        })
      );
    });
  });

  describe('the `Card.Content` component', () => {
    it('should render the right children', () => {
      const children = [
        'CardMeta',
        'CardHeader',
        'CardDescription',
        'CardDescription',
        'CardDescription',
        'CardDescription',
      ];
      const wrapper = getPropertySummary().find(Card.Content);
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the `Card.Meta` component', () => {
    it('should have the right `children` prop', () => {
      const wrapper = getPropertySummary().find(Card.Meta);
      const actual = wrapper.prop('children');
      expect(actual).toBe(props.propertyType);
    });
  });

  describe('the `Card.Header` component', () => {
    it('should have the right `children` prop', () => {
      const wrapper = getPropertySummary().find(Card.Header);
      const actual = wrapper.prop('children');
      expect(actual).toBe(props.propertyName);
    });
  });

  describe('the first `Card.Description` component', () => {
    it('should have the right `children` prop', () => {
      const wrapper = getPropertySummary()
        .find(Card.Description)
        .at(0);
      const actual = wrapper.prop('children');
      expect(actual).toBe(props.locationName);
    });
  });

  describe('the second `Card.Description` component', () => {
    it('should have the right `children` prop', () => {
      const wrapper = getPropertySummary()
        .find(Card.Description)
        .at(1);
      const actual = wrapper.prop('children');
      expect(actual).toEqual([
        'Guests: ',
        props.guestsNumber,
        ' | Bedrooms: ',
        props.bedroomsNumber,
      ]);
    });
  });

  describe('the third `Card.Description` component', () => {
    it('should have the right `children` prop', () => {
      const wrapper = getThirdCardDescription();
      const actual = wrapper.prop('children');
      expect(actual).toEqual(expect.arrayContaining([props.ratingNumber]));
    });

    it('should render a single Semantic UI `Rating` component', () => {
      const wrapper = getThirdCardDescription();
      const actual = wrapper.find(Rating);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertySummary().find(Rating);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          disabled: true,
          maxRating: 5,
          rating: Math.round(props.ratingNumber),
          size: 'mini',
        })
      );
    });
  });

  describe('the fourth `Card.Description` component', () => {
    it('should have the right `children` prop', () => {
      const wrapper = getFourthCardDescription();
      const actual = wrapper.prop('children');
      expect(actual).toEqual(expect.arrayContaining(['from ', ' /night']));
    });

    it('should render a single Lodgify UI `Heading` component', () => {
      const wrapper = getFourthCardDescription();
      const actual = wrapper.find(Heading);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertySummary().find(Heading);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });
  });

  it('should have `displayName` `PropertySummary`', () => {
    const actual = PropertySummary.displayName;
    expect(actual).toBe('PropertySummary');
  });
});
