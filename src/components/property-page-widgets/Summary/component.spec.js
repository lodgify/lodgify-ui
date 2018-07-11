import React from 'react';
import { shallow } from 'enzyme';
import { Segment, Rating } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';
import { Heading } from 'typography/Heading';

import { Component as Summary } from './component';

const props = {
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  ratingNumber: 4.8,
};

const getSummary = () => shallow(<Summary {...props} />);

describe('<Summary />', () => {
  it('should render a single Semantic UI `Segment.Group` component', () => {
    const wrapper = getSummary();
    expectComponentToBe(wrapper, Segment.Group);
  });

  describe('the first `Segment.Group` component', () => {
    it('should have the right props', () => {
      const wrapper = getSummary();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          compact: true,
        })
      );
    });

    it('should render the right children', () => {
      const children = ['Segment', 'SegmentGroup'];
      const wrapper = getSummary();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the first `Segment` child of `Segment.Group` component', () => {
    const getFirstSegment = () =>
      getSummary()
        .find(Segment)
        .first();
    it('should render the right children', () => {
      const wrapper = getFirstSegment();
      const actual = wrapper.children(Heading);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the first `Heading` component', () => {
    it('should have the right children', () => {
      const wrapper = getSummary()
        .find(Heading)
        .first();
      const actual = wrapper.prop('children');
      expect(actual).toBe(props.propertyName);
    });
  });

  describe('the second `Segment.Group` component', () => {
    const getSecondSegmentGroup = () =>
      getSummary()
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
      getSummary()
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
      getSummary()
        .find(Icon)
        .at(0);
    it('should have the right props', () => {
      const wrapper = getFirstIcon();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          color: 'yellow',
          name: 'map pin',
          size: 'small',
        })
      );
    });
  });

  describe('the third `Segment` component', () => {
    const getThirdSegment = () =>
      getSummary()
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
      const wrapper = getSummary().find(Rating);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          disabled: true,
          maxRating: 5,
          rating: Math.round(props.ratingNumber),
          size: 'tiny',
        })
      );
    });
  });

  describe('the last `Segment` component', () => {
    it('should have the right children', () => {
      const wrapper = getSummary()
        .find(Segment)
        .at(3)
        .children();
      expectComponentToBe(wrapper, 'span');
    });
  });

  describe('the `span`', () => {
    it('should have the right children', () => {
      const wrapper = getSummary().find('span');
      expectComponentToHaveChildren(wrapper, 'from ', Heading, '/night');
    });
  });

  describe('the last `Heading` component', () => {
    const getLastHeading = () =>
      getSummary()
        .find(Heading)
        .at(1);
    it('should have the right props', () => {
      const wrapper = getLastHeading();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'small',
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
