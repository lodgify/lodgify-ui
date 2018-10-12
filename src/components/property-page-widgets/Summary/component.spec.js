import React from 'react';
import { mount, shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

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

  return mount(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('<Summary/>', () => {
  describe('by default', () => {
    it('should render the right structure', () => {
      const actual = getWrappedSummary();

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isUserOnMobile` is true', () => {
    it('should render the right children', () => {
      const actual = getWrappedSummary({ isUserOnMobile: true });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Summary', () => {
    const component = getSummary().prop('as');

    expectComponentToHaveDisplayName(component, 'Summary');
  });
});
