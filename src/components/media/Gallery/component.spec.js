import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Modal } from 'elements/Modal';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ResponsiveImage } from 'media/ResponsiveImage';

import { Component as Gallery } from './component';

const images = [
  { imageUrl: '💻', label: '🔷' },
  { imageUrl: '💻', label: '🔷' },
];
const trigger = 'someTrigger';

const getGallery = props =>
  shallow(<Gallery images={images} trigger={trigger} {...props} />);

describe('<Gallery />', () => {
  it('should render a `Modal`', () => {
    const wrapper = getGallery();

    expectComponentToBe(wrapper, Modal);
  });

  describe('the `Modal`', () => {
    it('should get the right props', () => {
      const wrapper = getGallery();

      expectComponentToHaveProps(wrapper, {
        isFullscreen: true,
        trigger,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGallery();

      expectComponentToHaveChildren(wrapper, HorizontalGutters);
    });
  });

  describe('the `HorizontalGutters`', () => {
    const getHorizontalGutters = props =>
      getGallery(props).find(HorizontalGutters);

    it('should have the right children', () => {
      const wrapper = getHorizontalGutters();

      expectComponentToHaveChildren(wrapper, Divider, Grid, Divider);
    });

    describe('if `props.heading` is defined', () => {
      it('shoul have the right children', () => {
        const heading = ':hurtrealbad:';
        const wrapper = getHorizontalGutters({ heading });

        expectComponentToHaveChildren(
          wrapper,
          Divider,
          heading,
          Divider,
          Grid,
          Divider
        );
      });
    });
  });

  describe('the `Grid`', () => {
    const getGrid = () => getGallery().find(Grid);

    it('should have the right props', () => {
      const wrapper = getGrid();

      expectComponentToHaveProps(wrapper, {
        columns: 2,
        stackable: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGrid();

      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getGallery().find(GridRow);

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('each `GridColumn`', () => {
    it('should have the right children', () => {
      const wrapper = getGallery()
        .find(GridColumn)
        .first();

      expectComponentToHaveChildren(wrapper, Heading, ResponsiveImage, Divider);
    });
  });

  describe('each `Heading`', () => {
    const getFirstHeading = () =>
      getGallery()
        .find(Heading)
        .first();

    it('should havce the right props', () => {
      const wrapper = getFirstHeading();

      expectComponentToHaveProps(wrapper, { size: 'small' });
    });

    it('should have the right children', () => {
      const wrapper = getFirstHeading();

      expectComponentToHaveChildren(wrapper, images[0].label);
    });
  });

  describe('each `ResponsiveImage`', () => {
    it('should havce the right props', () => {
      const wrapper = getGallery()
        .find(ResponsiveImage)
        .first();

      expectComponentToHaveProps(wrapper, { imageUrl: images[0].imageUrl });
    });
  });

  it('should have `displayName` Gallery', () => {
    expectComponentToHaveDisplayName(Gallery, 'Gallery');
  });
});
