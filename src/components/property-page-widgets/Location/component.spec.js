jest.mock('./utils/getLocationDescription');

import React from 'react';
import { mount, shallow } from 'enzyme';
import { Responsive } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { IconCard } from 'elements/IconCard';

import {
  locationDescription,
  locationSummary,
  transportOptions,
} from './mock-data/props';
import { ComponentWithResponsive as Location } from './component';
import { getLocationDescription } from './utils/getLocationDescription';

const props = {
  locationDescription,
  locationSummary,
  transportOptions,
  latitude: 41.387863,
  longitude: 2.158105,
};

const getLocation = extraProps =>
  shallow(<Location {...props} {...extraProps} />);

const getWrappedLocation = extraProps => {
  const Child = getLocation(extraProps).prop('as');

  return mount(<Child {...props} {...extraProps} isUserOnMobile={false} />);
};

describe('<Location />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getLocation();

    expectComponentToBe(wrapper, Responsive);
  });

  describe('the `Child` of the `Location` component', () => {
    it('should have the correct structure', () => {
      const wrapper = getWrappedLocation();

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `locationDescription` is defined', () => {
    it('should call getLocationDescription with the correct arguments', () => {
      getWrappedLocation({
        locationDescription,
      });

      expect(getLocationDescription).toHaveBeenCalledWith(locationDescription);
    });
  });

  describe('the `transportOptions`', () => {
    it('should render the transport options markup', () => {
      const wrapper = getWrappedLocation({
        transportOptions,
      }).find(IconCard);

      expect(wrapper).toMatchSnapshot();
    });

    it('should not render the transport options markup if not set', () => {
      const wrapper = getWrappedLocation({
        transportOptions: [],
      }).find(IconCard);

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `Location`', () => {
    const component = getLocation().prop('as');

    expectComponentToHaveDisplayName(component, 'Location');
  });
});
