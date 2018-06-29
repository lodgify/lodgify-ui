import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Subheading } from 'typography/Subheading';
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';

import {
  descriptionText,
  extraDescriptionText,
  icons,
} from './mock-data/props';
import { Component as Description } from './component';

const props = {
  descriptionText,
  icons,
  propertyType: 'Bed & Breakfast',
};

const getDescription = extraProps =>
  shallow(<Description {...props} {...extraProps} />);

describe('<Description />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getDescription();
    expectComponentToBe(wrapper, Grid);
  });

  describe('the first `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getDescription();
      expectComponentToHaveProps(wrapper, {
        stackable: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getDescription();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(2, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getDescription()
        .find(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        computer: 7,
        tablet: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(
        wrapper,
        Subheading,
        ...getArrayOfLengthOfItem(2, Paragraph)
      );
    });
  });

  describe('the `Subheading` component', () => {
    it('should render the right children', () => {
      const wrapper = getDescription().find(Subheading);
      expectComponentToHaveChildren(wrapper, props.propertyType);
    });
  });

  describe('the `Paragraph` components', () => {
    it('should render the right children', () => {
      getParagraphsFromStrings(descriptionText).forEach(
        (paragraphText, index) => {
          const wrapper = getDescription()
            .find(Paragraph)
            .at(index);
          expectComponentToHaveChildren(wrapper, paragraphText);
        }
      );
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getDescription()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        verticalAlignContent: 'middle',
        computer: 5,
        tablet: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(Grid)
        .at(1);
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });
  });

  describe('each of the `GridColumn`s in the second `Grid` component', () => {
    const getGridColumnInSecondGrid = () =>
      getDescription()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getGridColumnInSecondGrid();
      expectComponentToHaveProps(wrapper, {
        width: 6,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInSecondGrid();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each of the `Icon`s in the second `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getDescription()
        .find(Icon)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        label: icons[0].label,
        name: icons[0].iconName,
      });
    });
  });

  describe('if `props.extraDescriptionText` is passed', () => {
    describe('the first `GridColumn` component', () => {
      it('should render an extra `Modal` component', () => {
        const wrapper = getDescription({ extraDescriptionText })
          .find(GridColumn)
          .first();
        expectComponentToHaveChildren(
          wrapper,
          Subheading,
          ...getArrayOfLengthOfItem(2, Paragraph),
          ...getArrayOfLengthOfItem(1, Modal)
        );
      });
    });

    describe('the `Modal` component', () => {
      it('should have the right props', () => {
        const wrapper = getDescription({ extraDescriptionText }).find(Modal);
        expectComponentToHaveProps(wrapper, {
          children: expect.any(Array),
          trigger: <Link>View more</Link>,
        });
      });
    });
  });

  it('should have `displayName` `Description`', () => {
    expectComponentToHaveDisplayName(Description, 'Description');
  });
});
