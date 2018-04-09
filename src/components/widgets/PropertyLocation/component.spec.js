import React from 'react';
import { shallow } from 'enzyme';

import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
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
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getPropertyLocation();
    const actual = wrapper.is(GridColumn);
    expect(actual).toBe(true);
  });

  describe('the first `GridColumn` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyLocation();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getPropertyLocation();
      const children = ['Heading', 'Paragraph', 'Grid'];
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getPropertyLocation().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      const actual = wrapper.prop('children');
      expect(actual).toBe('Location');
    });
  });

  describe('the first `Paragraph` component', () => {
    const getFirstParagraph = () =>
      getPropertyLocation()
        .find(Paragraph)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstParagraph();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getFirstParagraph();
      const actual = wrapper.prop('children');
      expect(actual).toBe(locationSummary);
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation()
        .find(Grid)
        .at(0);
      const actual = wrapper.children(GridColumn);
      expect(actual).toHaveLength(3);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 6,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      const actual = wrapper.children(Paragraph);
      expect(actual).toHaveLength(1);
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
      const actual = wrapper.prop('children');
      const expected = getParagraphsFromStrings(locationDescription)[0];
      expect(actual).toBe(expected);
    });
  });

  describe('the third `GridColumn` component', () => {
    const getThirdGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 6,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      const actual = wrapper.children(Grid);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the second `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation()
        .find(Grid)
        .at(1);
      const actual = wrapper.children(GridColumn);
      expect(actual).toHaveLength(4);
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
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 3,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInSecondGrid();
      const actual = wrapper.children(IconCard);
      expect(actual).toHaveLength(1);
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
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          isFilled: true,
          label: expect.any(String),
          name: transportOptions[0].iconName,
        })
      );
    });
  });

  describe('the fourth `GridColumn` component', () => {
    const getFourthGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(7);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();
      const actual = wrapper.children(GoogleMap);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `GoogleMap` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyLocation().find(GoogleMap);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          isShowingExactLocation: false,
          isShowingApproximateLocation: false,
          latitude: props.latitude,
          longitude: props.longitude,
        })
      );
    });
  });

  it('should have `displayName` `PropertyLocation`', () => {
    const actual = PropertyLocation.displayName;
    expect(actual).toBe('PropertyLocation');
  });
});
