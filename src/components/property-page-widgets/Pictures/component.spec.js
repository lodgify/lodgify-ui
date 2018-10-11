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
import { Divider } from 'elements/Divider';
import { Heading } from 'typography/Heading';
import { Gallery } from 'media/Gallery';
import { Link } from 'elements/Link';
import { Thumbnail } from 'media/Thumbnail';

import { pictures } from './mock-data/pictures';
import { ComponentWithResponsive as Pictures } from './component';

const props = {
  pictures,
};

const getPictures = () => shallow(<Pictures {...props} />);

const getWrappedPictures = extraProps => {
  const Child = getPictures().prop('as');

  return shallow(<Child isUserOnMobile={false} {...props} {...extraProps} />);
};

describe('<Pictures />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getWrappedPictures();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    const getGrid = () => getWrappedPictures().find(Grid);

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
      getWrappedPictures()
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
      const wrapper = getWrappedPictures().find(Heading);

      expectComponentToHaveChildren(wrapper, PROPERTY_PICTURES);
    });
  });

  describe('the `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedPictures().find(GridRow);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(5, GridColumn)
      );
    });
  });

  describe('each of the array of `GridColumn`s', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedPictures()
        .find(GridColumn)
        .at(1);

      expectComponentToHaveChildren(wrapper, Thumbnail, Divider);
    });
  });

  describe('each `Thumbnail` component on desktop', () => {
    it('should get the right props', () => {
      const wrapper = getWrappedPictures()
        .find(Thumbnail)
        .at(0);
      const { imageUrl, label } = pictures[0];

      expectComponentToHaveProps(wrapper, {
        imageUrl,
        label,
        hasRoundedCorners: false,
        isSquare: false,
        size: 'huge',
      });
    });
  });

  describe('each `Thumbnail` component on mobile', () => {
    it('should get the right props', () => {
      const wrapper = getWrappedPictures({
        isUserOnMobile: true,
      })
        .find(Thumbnail)
        .at(0);
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
      getWrappedPictures()
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
      const wrapper = getWrappedPictures().find(Gallery);

      expectComponentToHaveProps(wrapper, {
        heading: expect.any(Object),
        images: pictures,
        trigger: <Link>{EXPLORE_ALL_PICTURES}</Link>,
      });
    });
  });

  it('should have `displayName` `Pictures`', () => {
    const component = getPictures().prop('as');

    expectComponentToHaveDisplayName(component, 'Pictures');
  });
});
