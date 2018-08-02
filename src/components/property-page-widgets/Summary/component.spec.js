import React from 'react';
import { shallow } from 'enzyme';
import { Segment, Rating } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
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

      expectComponentToHaveProps(wrapper, { compact: true });
    });

    it('should render the right children', () => {
      const wrapper = getSummary();

      expectComponentToHaveChildren(wrapper, Segment, Segment.Group);
    });
  });

  describe('the first `Segment` child of `Segment.Group` component', () => {
    const getFirstSegment = () =>
      getSummary()
        .find(Segment)
        .first();

    it('should render the right children', () => {
      const wrapper = getFirstSegment();

      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the first `Heading` component', () => {
    it('should have the right children', () => {
      const wrapper = getSummary()
        .find(Heading)
        .first();

      expectComponentToHaveChildren(wrapper, props.propertyName);
    });
  });

  describe('the second `Segment.Group` component', () => {
    const getSecondSegmentGroup = () =>
      getSummary()
        .find(Segment.Group)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondSegmentGroup();

      expectComponentToHaveProps(wrapper, { horizontal: true });
    });

    it('should have the right children', () => {
      const wrapper = getSecondSegmentGroup();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, Segment)
      );
    });
  });

  describe('the second `Segment` component', () => {
    const getSecondSegment = () =>
      getSummary()
        .find(Segment)
        .at(1);

    it('should render the right `children`', () => {
      const wrapper = getSecondSegment();

      expectComponentToHaveChildren(wrapper, props.locationName, Icon);
    });
  });

  describe('the first `Icon` component', () => {
    const getFirstIcon = () =>
      getSummary()
        .find(Icon)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstIcon();

      expectComponentToHaveProps(wrapper, {
        color: 'yellow',
        name: 'map pin',
        size: 'small',
      });
    });
  });

  describe('the third `Segment` component', () => {
    const getThirdSegment = () =>
      getSummary()
        .find(Segment)
        .at(2);

    it('should have the right children', () => {
      const wrapper = getThirdSegment();

      expectComponentToHaveChildren(
        wrapper,
        props.ratingNumber.toString(),
        Rating
      );
    });
  });

  describe('the `Rating` component', () => {
    it('should have the right props', () => {
      const wrapper = getSummary().find(Rating);

      expectComponentToHaveProps(wrapper, {
        disabled: true,
        maxRating: 5,
        rating: Math.round(props.ratingNumber),
        size: 'tiny',
      });
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

      expectComponentToHaveProps(wrapper, { size: 'small' });
    });

    it('should have the right children', () => {
      const wrapper = getLastHeading();

      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  it('should have `displayName` `Summary`', () => {
    expectComponentToHaveDisplayName(Summary, 'Summary');
  });
});
