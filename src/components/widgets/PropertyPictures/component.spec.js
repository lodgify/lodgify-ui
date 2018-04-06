import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ResponsiveImage } from 'widgets/ResponsiveImage';
import { Link } from 'elements/Link';

import { pictures } from './mock-data/pictures';
import { Component as PropertyPictures } from './component';

const getPropertyPictures = () =>
  shallow(<PropertyPictures pictures={pictures} />);

describe('<PropertyPictures />', () => {
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getPropertyPictures();
    const actual = wrapper.is(GridColumn);
    expect(actual).toBe(true);
  });

  describe('the `GridColumn` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyPictures();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const children = ['Heading', 'Grid'];
      const wrapper = getPropertyPictures();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getPropertyPictures().find(Heading);

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
      expect(actual).toBe('Property pictures');
    });
  });

  describe('the `Grid` component', () => {
    const getGrid = () => getPropertyPictures().find(Grid);

    it('should render a `GridColumn` for each item in `props.pictures` plus one for the Link', () => {
      const wrapper = getGrid();
      const actual = wrapper.children(GridColumn);
      expect(actual).toHaveLength(pictures.length + 1);
    });
  });

  describe('each `GridColumn` component wrapping an image', () => {
    const getFirstGridColumnWithImage = () =>
      getPropertyPictures()
        .find(GridColumn)
        .at(1);

    it('should get the right props', () => {
      const wrapper = getFirstGridColumnWithImage();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 4,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumnWithImage();
      const actual = wrapper.find(ResponsiveImage);
      expect(actual).toHaveLength(1);
    });
  });

  describe('each `ResponsiveImage` component', () => {
    it('should get the right props', () => {
      const wrapper = getPropertyPictures()
        .find(ResponsiveImage)
        .at(0);
      const actual = wrapper.props();
      const { imageUrl, label } = pictures[0];
      expect(actual).toEqual(
        expect.objectContaining({
          imageUrl,
          label,
        })
      );
    });
  });

  describe('the `GridColumn` component wrapping the link', () => {
    const getGridColumnWithLink = () =>
      getPropertyPictures()
        .find(GridColumn)
        .at(6);

    it('should get the right props', () => {
      const wrapper = getGridColumnWithLink();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnWithLink();
      const actual = wrapper.find(Link);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the `Link` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyPictures().find(Link);
      const actual = wrapper.prop('children');

      expect(actual).toBe('Explore all pictures');
    });
  });

  it('should have `displayName` `PropertyPictures`', () => {
    const actual = PropertyPictures.displayName;
    expect(actual).toBe('PropertyPictures');
  });
});
