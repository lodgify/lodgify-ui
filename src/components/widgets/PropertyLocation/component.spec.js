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
import { Component as PropertyLocation } from './component';

const props = {
  locationDescription,
  locationSummary,
  transportOptions,
  latitude: 41.387863,
  longitude: 2.158105,
};

const getPropertyLocation = () => shallow(<PropertyLocation {...props} />);

describe('<PropertyLocation />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getPropertyLocation();
    const actual = wrapper.is(Grid);
    expect(actual).toBe(true);
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getPropertyLocation()
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
      const wrapper = getPropertyLocation().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Location');
    });
  });

  describe('the `Subheading` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation()
        .find(Subheading)
        .at(0);
      expectComponentToHaveChildren(wrapper, locationSummary);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getPropertyLocation()
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
      getPropertyLocation()
        .find(GridColumn)
        .at(1)
        .children(Paragraph);

    it('should render the right children', () => {
      const wrapper = getParagraphInSecondGridColumn();
      const expected = getParagraphsFromStrings(locationDescription)[0];
      expectComponentToHaveChildren(wrapper, expected);
    });
  });

  describe('the third `GridColumn` component', () => {
    const getThirdGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 6,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation()
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
      getPropertyLocation()
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
      getPropertyLocation()
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

  describe('the fourth `GridColumn` component', () => {
    const getFourthGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(7);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveChildren(wrapper, GoogleMap);
    });
  });

  describe('the `GoogleMap` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyLocation().find(GoogleMap);
      expectComponentToHaveProps(wrapper, {
        isShowingExactLocation: false,
        isShowingApproximateLocation: false,
        latitude: props.latitude,
        longitude: props.longitude,
      });
    });
  });

  it('should have `displayName` `PropertyLocation`', () => {
    const actual = PropertyLocation.displayName;
    expect(actual).toBe('PropertyLocation');
  });
});
