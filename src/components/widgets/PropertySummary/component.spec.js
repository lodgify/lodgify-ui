import React from 'react';
import { shallow } from 'enzyme';
import { Segment, Icon, Rating } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

import { Component as PropertySummary } from './component';

const props = {
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  ratingNumber: 4.8,
};

const getPropertySummary = () => shallow(<PropertySummary {...props} />);

describe('<PropertySummary />', () => {
  it('should render a single Semantic UI `Segment.Group` component', () => {
    const wrapper = getPropertySummary();
    const actual = wrapper.is(Segment.Group);
    expect(actual).toBe(true);
  });

  describe('the first `Segment.Group` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertySummary();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          compact: true,
        })
      );
    });

    it('should render the right children', () => {
      const children = ['Segment', 'SegmentGroup'];
      const wrapper = getPropertySummary();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the first `Segment` child of `Segment.Group` component', () => {
    const getFirstSegment = () =>
      getPropertySummary()
        .find(Segment)
        .first();
    it('should render the right children', () => {
      const wrapper = getFirstSegment();
      const actual = wrapper.children(Heading);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the first `Heading` component', () => {
    const getFirstHeading = () =>
      getPropertySummary()
        .find(Heading)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstHeading();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });

    it('should have the right children', () => {
      const wrapper = getFirstHeading();
      const actual = wrapper.prop('children');
      expect(actual).toBe(props.propertyName);
    });
  });

  describe('the second `Segment.Group` component', () => {
    const getSecondSegmentGroup = () =>
      getPropertySummary()
        .find(Segment.Group)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondSegmentGroup();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          horizontal: true,
        })
      );
    });

    it('should have the right children', () => {
      const wrapper = getSecondSegmentGroup();
      const actual = wrapper.find(Segment);
      expect(actual).toHaveLength(3);
    });
  });

  describe('the second `Segment` component', () => {
    const getSecondSegment = () =>
      getPropertySummary()
        .find(Segment)
        .at(1);
    it('should render the right `children`', () => {
      const wrapper = getSecondSegment();
      const actual = wrapper.prop('children');
      expect(actual).toEqual(expect.arrayContaining([props.locationName]));
    });

    it('should render a single Lodgify UI `Icon` component', () => {
      const wrapper = getSecondSegment();
      const actual = wrapper.find(Icon);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the first `Icon` component', () => {
    const getFirstIcon = () =>
      getPropertySummary()
        .find(Icon)
        .at(0);
    it('should have the right props', () => {
      const wrapper = getFirstIcon();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          color: 'yellow',
          name: 'map pin',
        })
      );
    });
  });

  describe('the third `Segment` component', () => {
    const getThirdSegment = () =>
      getPropertySummary()
        .find(Segment)
        .at(2);

    it('should have the right children', () => {
      const wrapper = getThirdSegment();
      const actual = wrapper.prop('children');
      expect(actual).toEqual(expect.arrayContaining([props.ratingNumber]));
    });

    it('should have a single `Rating` component', () => {
      const wrapper = getThirdSegment();
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

  describe('the last `Segment` component', () => {
    const getFourthSegment = () =>
      getPropertySummary()
        .find(Segment)
        .at(3);

    it('should have the right children', () => {
      const wrapper = getFourthSegment();
      const actual = wrapper.prop('children');
      expect(actual).toEqual(expect.arrayContaining(['from ', ' /night']));
    });

    it('should render a single Lodgify UI `Heading` component', () => {
      const wrapper = getFourthSegment();
      const actual = wrapper.find(Heading);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the last `Heading` component', () => {
    const getLastHeading = () =>
      getPropertySummary()
        .find(Heading)
        .at(1);
    it('should have the right props', () => {
      const wrapper = getLastHeading();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'mini',
        })
      );
    });

    it('should have the right children', () => {
      const wrapper = getLastHeading();
      const actual = wrapper.prop('children');
      expect(actual).toEqual(props.nightPrice);
    });
  });
});
