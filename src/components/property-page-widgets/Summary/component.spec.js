import React from 'react';
import { shallow } from 'enzyme';
import { Segment } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Responsive } from 'semantic-ui-react';
import { expectComponentToHaveProps } from '@lodgify/enzyme-jest-expect-helpers/lib/expectComponentToHaveProps';

import { ComponentWithResponsive as Summary } from './component';

const props = {
  locationName: 'Catania',
  nightPrice: '$280',
  propertyName: 'The Cat House',
  ratingNumber: 4.8,
};

const getSummary = () => shallow(<Summary {...props} />);

const getWrappedSummary = extraProps => {
  const Child = getSummary().prop('as');

  return shallow(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('<Summary/>', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getSummary();

    expectComponentToBe(wrapper, Responsive);
  });

  describe('the wrapped `Summary` component', () => {
    it('should render a single `SegmentGroup` component', () => {
      const wrapper = getWrappedSummary();

      expectComponentToBe(wrapper, Segment.Group);
    });
  });

  describe('the `Segment.Group`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedSummary();

      expectComponentToHaveProps(wrapper, { compact: true });
    });

    it('should render the right children ', () => {
      const wrapper = getWrappedSummary();

      expectComponentToHaveChildren(wrapper, Segment, Segment.Group);
    });

    describe('if `props.isUserOnMobile` is true', () => {
      it('should render the right children', () => {
        const wrapper = getWrappedSummary({ isUserOnMobile: true })
          .find(Segment.Group)
          .at(0);

        expectComponentToHaveChildren(wrapper, Segment.Group);
      });
    });

    describe('the second `Segment.Group`', () => {
      const getSecondSummaryGroup = extraProps =>
        getWrappedSummary(extraProps)
          .find(Segment.Group)
          .at(1);

      it('should have the right props', () => {
        const wrapper = getSecondSummaryGroup();

        expectComponentToHaveProps(wrapper, { horizontal: true });
      });

      it('should render the right children', () => {
        const wrapper = getSecondSummaryGroup();

        expectComponentToHaveChildren(wrapper, Segment, Segment, Segment);
      });

      describe('if `props.isUserOnMobile` is true', () => {
        it('should have the right props', () => {
          const wrapper = getSecondSummaryGroup({ isUserOnMobile: true });

          expectComponentToHaveProps(wrapper, { horizontal: false });
        });

        it('should render the right children', () => {
          const wrapper = getSecondSummaryGroup({ isUserOnMobile: true });

          expectComponentToHaveChildren(wrapper, Segment, Segment);
        });
      });
    });
  });

  it('should have `displayName` Summary', () => {
    const component = getSummary().prop('as');

    expectComponentToHaveDisplayName(component, 'Summary');
  });
});
