import React from 'react';
import { shallow } from 'enzyme';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { getArrayOfLengthOfItem } from 'lib/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { Divider } from 'elements/Divider';
import { Heading } from 'typography/Heading';
import { Subheading } from 'typography/Subheading';
import { Paragraph } from 'typography/Paragraph';
import { IconCard } from 'elements/IconCard';
import { GoogleMap } from 'elements/GoogleMap';

import {
  locationDescription,
  locationSummary,
  transportOptions,
} from './mock-data/props';
import { Component as Location } from './component';

const props = {
  locationDescription,
  locationSummary,
  transportOptions,
  latitude: 41.387863,
  longitude: 2.158105,
};

const getLocation = () => shallow(<Location {...props} />);

describe('<Location />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getLocation();
    const actual = wrapper.is(Grid);
    expect(actual).toBe(true);
  });

  describe('the first `Grid` component', () => {
    it('should render the right props', () => {
      const wrapper = getLocation();
      expectComponentToHaveProps(wrapper, {
        stackable: true,
      });
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getLocation();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(2, GridColumn),
        ...getArrayOfLengthOfItem(2, ShowOnDesktop),
        ShowOnMobile
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getLocation()
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
      const wrapper = getLocation().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Location');
    });
  });

  describe('the `Subheading` component', () => {
    it('should render the right children', () => {
      const wrapper = getLocation()
        .find(Subheading)
        .at(0);
      expectComponentToHaveChildren(wrapper, locationSummary);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getLocation()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 6,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('each `Paragraph` in the second `GridColumn` component', () => {
    const getParagraphInSecondGridColumn = () =>
      getLocation()
        .find(GridColumn)
        .at(1)
        .children(Paragraph);

    it('should render the right children', () => {
      const wrapper = getParagraphInSecondGridColumn();
      const expected = getParagraphsFromStrings(locationDescription)[0];
      expectComponentToHaveChildren(wrapper, expected);
    });
  });

  describe('the first `ShowOnDesktop` component', () => {
    const getFirstShowOnDesktop = () =>
      getLocation()
        .find(ShowOnDesktop)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstShowOnDesktop();
      expectComponentToHaveProps(wrapper, {
        parent: GridColumn,
        parentProps: {
          width: 6,
        },
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstShowOnDesktop();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getLocation()
        .find(Grid)
        .at(1);
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });
  });

  describe('each `GridColumn` in the second `Grid` component', () => {
    const getGridColumnInSecondGrid = () =>
      getLocation()
        .find(Grid)
        .at(1)
        .children(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getGridColumnInSecondGrid();
      expectComponentToHaveProps(wrapper, {
        width: 3,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInSecondGrid();
      expectComponentToHaveChildren(wrapper, IconCard);
    });
  });

  describe('each `IconCard` in the second `Grid` component', () => {
    const getIconCardInSecondGrid = () =>
      getLocation()
        .find(Grid)
        .at(1)
        .find(IconCard)
        .first();

    it('should have the right props', () => {
      const wrapper = getIconCardInSecondGrid();
      expectComponentToHaveProps(wrapper, {
        isFilled: true,
        label: expect.any(String),
        name: transportOptions[0].iconName,
      });
    });
  });

  describe('the second `ShowOnDesktop` component', () => {
    const getSecondShowOnDesktop = () =>
      getLocation()
        .find(ShowOnDesktop)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondShowOnDesktop();
      expectComponentToHaveProps(wrapper, {
        parent: GridColumn,
        parentProps: {
          width: 12,
        },
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondShowOnDesktop();
      expectComponentToHaveChildren(wrapper, GoogleMap);
    });
  });

  describe('the first `GoogleMap` component', () => {
    it('should have the right props', () => {
      const wrapper = getLocation()
        .find(GoogleMap)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        isShowingExactLocation: false,
        isShowingApproximateLocation: false,
        latitude: props.latitude,
        longitude: props.longitude,
      });
    });
  });

  describe('the first `ShowOnMobile` component', () => {
    const wrapper = getLocation()
      .find(ShowOnMobile)
      .first();

    it('should have the right props', () => {
      expectComponentToHaveProps(wrapper, {
        parent: GridColumn,
        parentProps: {
          width: 12,
        },
      });
    });

    it('should render the right children', () => {
      expectComponentToHaveChildren(wrapper, GoogleMap, Divider, Grid);
    });
  });

  describe('the third `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getLocation()
        .find(Grid)
        .at(2);
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });
  });

  describe('each `GridColumn` in the third `Grid` component', () => {
    const getGridColumnInThirdGrid = () =>
      getLocation()
        .find(Grid)
        .at(2)
        .children(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getGridColumnInThirdGrid();
      expectComponentToHaveProps(wrapper, {
        width: 3,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInThirdGrid();
      expectComponentToHaveChildren(wrapper, IconCard);
    });
  });

  describe('each `IconCard` in the third `Grid` component', () => {
    const getIconCardInThirdGrid = () =>
      getLocation()
        .find(Grid)
        .at(2)
        .find(IconCard)
        .first();

    it('should have the right props', () => {
      const wrapper = getIconCardInThirdGrid();
      expectComponentToHaveProps(wrapper, {
        isFilled: true,
        label: expect.any(String),
        name: transportOptions[0].iconName,
      });
    });
  });

  it('should have `displayName` `Location`', () => {
    const actual = Location.displayName;
    expect(actual).toBe('Location');
  });
});
