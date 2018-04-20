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
    it('should render the right props', () => {
      const wrapper = getPropertyLocation();
      expectComponentToHaveProps(wrapper, {
        stackable: true,
      });
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation();
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
      expectComponentToHaveChildren(wrapper, Heading, Paragraph);
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getPropertyLocation().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      expectComponentToHaveChildren(wrapper, 'Location');
    });
  });

  describe('the first `Paragraph` component', () => {
    const getFirstParagraph = () =>
      getPropertyLocation()
        .find(Paragraph)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstParagraph();
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstParagraph();
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

  describe('the first `ShowOnDesktop` component', () => {
    const getFirstShowOnDesktop = () =>
      getPropertyLocation()
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

  describe('the second `ShowOnDesktop` component', () => {
    const getSecondShowOnDesktop = () =>
      getPropertyLocation()
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
      const wrapper = getPropertyLocation()
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
    const wrapper = getPropertyLocation()
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
      const wrapper = getPropertyLocation()
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
      getPropertyLocation()
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
      getPropertyLocation()
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

  it('should have `displayName` `PropertyLocation`', () => {
    const actual = PropertyLocation.displayName;
    expect(actual).toBe('PropertyLocation');
  });
});
