import React from 'react';
import { shallow } from 'enzyme';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { getArrayOfLengthOfItem } from 'lib/get-array-of-length-of-item';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { Heading } from 'typography/Heading';
import { ResponsiveImage } from 'widgets/ResponsiveImage';
import { Link } from 'elements/Link';
import { Thumbnail } from 'elements/Thumbnail';

import { pictures } from './mock-data/pictures';
import { Component as PropertyPictures } from './component';

const getPropertyPictures = () =>
  shallow(<PropertyPictures pictures={pictures} />);

describe('<PropertyPictures />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getPropertyPictures();
    const actual = wrapper.is(Grid);
    expect(actual).toBe(true);
  });

  describe('the `Grid` component', () => {
    it('should render a `GridColumn` for each item in `props.pictures` plus one for the Link', () => {
      const wrapper = getPropertyPictures();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(7, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getPropertyPictures()
        .find(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyPictures().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Property pictures');
    });
  });

  describe('each of the array of `GridColumn`s', () => {
    const getGridColumnInArray = () =>
      getPropertyPictures()
        .find(GridColumn)
        .at(1);

    it('should get the right props', () => {
      const wrapper = getGridColumnInArray();
      expectComponentToHaveProps(wrapper, {
        width: 4,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInArray();
      expectComponentToHaveChildren(wrapper, ShowOnDesktop, ShowOnMobile);
    });
  });

  describe('each of the array of `ShowOnDesktop`s', () => {
    const getShowOnDesktopInArray = () =>
      getPropertyPictures()
        .find(ShowOnDesktop)
        .at(0);
    it('should render the right children', () => {
      const wrapper = getShowOnDesktopInArray();
      expectComponentToHaveChildren(wrapper, ResponsiveImage);
    });
  });

  describe('each `ResponsiveImage` component', () => {
    it('should get the right props', () => {
      const wrapper = getPropertyPictures()
        .find(ResponsiveImage)
        .at(0);
      const { imageUrl, label } = pictures[0];
      expectComponentToHaveProps(wrapper, {
        imageUrl,
        label,
      });
    });
  });

  describe('each of the array of `ShowOnMobile`s', () => {
    const getShowOnMobileInArray = () =>
      getPropertyPictures()
        .find(ShowOnMobile)
        .at(0);
    it('should render the right children', () => {
      const wrapper = getShowOnMobileInArray();
      expectComponentToHaveChildren(wrapper, Thumbnail);
    });
  });

  describe('each `Thumbnail` component', () => {
    it('should get the right props', () => {
      const wrapper = getPropertyPictures()
        .find(Thumbnail)
        .at(0);
      const { imageUrl, label } = pictures[0];
      expectComponentToHaveProps(wrapper, {
        imageUrl,
        label,
      });
    });
  });

  describe('the `GridColumn` component wrapping the link', () => {
    const getGridColumnWithLink = () =>
      getPropertyPictures()
        .find(GridColumn)
        .at(6);

    it('should get the right props', () => {
      const wrapper = getGridColumnWithLink();
      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnWithLink();
      expectComponentToHaveChildren(wrapper, Link);
    });
  });

  describe('the `Link` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyPictures().find(Link);
      expectComponentToHaveChildren(wrapper, 'Explore all pictures');
    });
  });

  it('should have `displayName` `PropertyPictures`', () => {
    const actual = PropertyPictures.displayName;
    expect(actual).toBe('PropertyPictures');
  });
});
