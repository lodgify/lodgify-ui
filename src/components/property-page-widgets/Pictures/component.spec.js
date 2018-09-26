import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { EXPLORE_ALL_PICTURES, PROPERTY_PICTURES } from 'utils/default-strings';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Divider } from 'elements/Divider';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { Heading } from 'typography/Heading';
import { Gallery } from 'media/Gallery';
import { Link } from 'elements/Link';
import { Thumbnail } from 'media/Thumbnail';

import { pictures } from './mock-data/pictures';
import { Component as Pictures } from './component';

const getPictures = () => shallow(<Pictures pictures={pictures} />);

describe('<Pictures />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getPictures();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    const getGrid = () => getPictures().find(Grid);

    it('should have the right props', () => {
      const wrapper = getGrid();

      expectComponentToHaveProps(wrapper, { columns: 3 });
    });

    it('should have the right children', () => {
      const wrapper = getGrid();

      expectComponentToHaveChildren(wrapper, GridColumn, GridRow, GridColumn);
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getPictures()
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
      const wrapper = getPictures().find(Heading);

      expectComponentToHaveChildren(wrapper, PROPERTY_PICTURES);
    });
  });

  describe('the `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getPictures().find(GridRow);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(5, GridColumn)
      );
    });
  });

  describe('each of the array of `GridColumn`s', () => {
    it('should render the right children', () => {
      const wrapper = getPictures()
        .find(GridColumn)
        .at(1);

      expectComponentToHaveChildren(
        wrapper,
        ShowOnDesktop,
        ShowOnMobile,
        Divider
      );
    });
  });

  describe('each of the array of `ShowOnDesktop`s', () => {
    const getShowOnDesktopInArray = () =>
      getPictures()
        .find(ShowOnDesktop)
        .at(0);

    it('should render the right children', () => {
      const wrapper = getShowOnDesktopInArray();

      expectComponentToHaveChildren(wrapper, Thumbnail);
    });
  });

  describe('each `Thumbnail` component', () => {
    it('should get the right props', () => {
      const wrapper = getPictures()
        .find(Thumbnail)
        .at(0);
      const { imageUrl, label } = pictures[0];

      expectComponentToHaveProps(wrapper, {
        imageUrl,
        label,
        size: 'huge',
      });
    });
  });

  describe('each of the array of `ShowOnMobile`s', () => {
    const getShowOnMobileInArray = () =>
      getPictures()
        .find(ShowOnMobile)
        .at(0);

    it('should render the right children', () => {
      const wrapper = getShowOnMobileInArray();

      expectComponentToHaveChildren(wrapper, Thumbnail);
    });
  });

  describe('each `Thumbnail` component', () => {
    it('should get the right props', () => {
      const wrapper = getPictures()
        .find(Thumbnail)
        .at(1);
      const { imageUrl, label } = pictures[0];

      expectComponentToHaveProps(wrapper, {
        imageUrl,
        label,
        hasRoundedCorners: true,
        isSquare: true,
        size: 'large',
      });
    });
  });

  describe('the `GridColumn` component wrapping the link', () => {
    const getGridColumnWithLink = () =>
      getPictures()
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

      expectComponentToHaveChildren(wrapper, Gallery);
    });
  });

  describe('the `Gallery` component', () => {
    it('should have the right props', () => {
      const wrapper = getPictures().find(Gallery);

      expectComponentToHaveProps(wrapper, {
        heading: expect.any(Object),
        images: pictures,
        trigger: <Link>{EXPLORE_ALL_PICTURES}</Link>,
      });
    });
  });

  it('should have `displayName` `Pictures`', () => {
    expectComponentToHaveDisplayName(Pictures, 'Pictures');
  });
});
