import React from 'react';
import { shallow } from 'enzyme';
import { Label, Responsive } from 'semantic-ui-react';

import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
} from 'utils/expect-helpers';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { Divider } from 'elements/Divider';
import { Heading } from 'typography/Heading';
import { Subheading } from 'typography/Subheading';
import { Paragraph } from 'typography/Paragraph';
import { GoogleMap } from 'elements/GoogleMap';

import {
  locationDescription,
  locationSummary,
  transportOptions,
} from './mock-data/props';
import { ComponentWithResponsive as Location } from './component';

const props = {
  locationDescription,
  locationSummary,
  transportOptions,
  latitude: 41.387863,
  longitude: 2.158105,
};

const getLocation = () => shallow(<Location {...props} />);
const getWrappedLocation = () => {
  const Child = getLocation().prop('as');
  return shallow(<Child {...props} isUserOnMobile={false} />);
};

describe('<Location />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getLocation();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('the wrapped `Location` component', () => {
    it('should be a Lodgify UI `Grid`', () => {
      const wrapper = getWrappedLocation();
      expectComponentToBe(wrapper, Grid);
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right props', () => {
      const wrapper = getWrappedLocation();
      expectComponentToHaveProps(wrapper, {
        stackable: true,
      });
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedLocation();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(2, GridColumn),
        ShowOnDesktop,
        GridColumn,
        ShowOnMobile
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getWrappedLocation()
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Heading, Subheading);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedLocation().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Location');
    });
  });

  describe('the `Subheading` component', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedLocation()
        .find(Subheading)
        .at(0);
      expectComponentToHaveChildren(wrapper, locationSummary);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getWrappedLocation()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        computer: 6,
        tablet: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('each `Paragraph` in the second `GridColumn` component', () => {
    const getParagraphInSecondGridColumn = () =>
      getWrappedLocation()
        .find(GridColumn)
        .at(1)
        .children(Paragraph);

    it('should render the right children', () => {
      const wrapper = getParagraphInSecondGridColumn();
      const expected = getParagraphsFromStrings(locationDescription)[0];
      expectComponentToHaveChildren(wrapper, expected);
    });
  });

  describe('the `ShowOnDesktop` component', () => {
    const getShowOnDesktop = () => getWrappedLocation().find(ShowOnDesktop);

    it('should have the right props', () => {
      const wrapper = getShowOnDesktop();
      expectComponentToHaveProps(wrapper, {
        parent: GridColumn,
        parentProps: {
          computer: 6,
          tablet: 12,
        },
      });
    });

    it('should render the right children', () => {
      const wrapper = getShowOnDesktop();
      expectComponentToHaveChildren(wrapper, Label.Group);
    });
  });

  describe('the `GoogleMap` component', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedLocation().find(GoogleMap);
      expectComponentToHaveProps(wrapper, {
        height: GoogleMap.defaultProps.height,
        isShowingExactLocation: false,
        isShowingApproximateLocation: false,
        latitude: props.latitude,
        longitude: props.longitude,
      });
    });
  });

  describe('the `ShowOnMobile` component', () => {
    const getShowOnMobile = () => getWrappedLocation().find(ShowOnMobile);

    it('should have the right props', () => {
      const wrapper = getShowOnMobile();
      expectComponentToHaveProps(wrapper, {
        parent: GridColumn,
        parentProps: {
          width: 12,
        },
      });
    });

    it('should render the right children', () => {
      const wrapper = getShowOnMobile();
      expectComponentToHaveChildren(wrapper, Divider, Label.Group);
    });
  });

  it('should have `displayName` `Location`', () => {
    const component = getLocation().prop('as');
    expectComponentToHaveDisplayName(component, 'Location');
  });
});
