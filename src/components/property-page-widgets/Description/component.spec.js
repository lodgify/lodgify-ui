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
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Paragraph } from 'typography/Paragraph';
import { Subheading } from 'typography/Subheading';

import { getParagraphWithEllipsis } from './utils/getParagraphWithEllipsis';
import {
  descriptionText,
  extraDescriptionText,
  propertyMainCharacteristics,
} from './mock-data/props';
import { Component as Description } from './component';

const props = {
  descriptionText,
  homeHighlights: [
    { iconName: 'credit card', text: 'credit cards' },
    { iconName: 'no children', text: 'no children allowed' },
  ],
  propertyMainCharacteristics,
  propertyName: 'Yolo',
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
        columns: 1,
      });
    });

    it('should render the right children', () => {
      const wrapper = getDescription();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(9, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getDescription()
        .find(GridColumn)
        .first();

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveChildren(wrapper, Subheading);
    });
  });

  describe('the `Subheading` component', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(Subheading)
        .first();

      expectComponentToHaveChildren(wrapper, props.propertyType);
    });
  });

  describe('the second `GridColumn`', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(GridColumn)
        .at(1);

      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the first `Heading`', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(Heading)
        .at(0);

      expectComponentToHaveChildren(wrapper, props.propertyName);
    });
  });

  describe('each of propertyKeyFact `GridColumn`s', () => {
    const getGridColumnInSecondGrid = () =>
      getDescription()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getGridColumnInSecondGrid();

      expectComponentToHaveProps(wrapper, {
        computer: 3,
        mobile: 6,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInSecondGrid();

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each of the propertyKeyFact `Icon`s', () => {
    it('should have the right props', () => {
      const wrapper = getDescription()
        .find(Icon)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        labelText: propertyMainCharacteristics[0].text,
        name: propertyMainCharacteristics[0].iconName,
      });
    });
  });

  describe('the seventh `GridColum` component', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(GridColumn)
        .at(6);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(
          getParagraphsFromStrings(descriptionText).length,
          Paragraph
        )
      );
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

  describe('if `props.extraDescriptionText` is passed', () => {
    describe('the last `Paragraph` component', () => {
      it('should render the right children', () => {
        const wrapper = getDescription({ extraDescriptionText })
          .find(Paragraph)
          .at(1);
        const finalParagraph = getParagraphWithEllipsis(
          getParagraphsFromStrings(descriptionText)[1]
        );

        expectComponentToHaveChildren(wrapper, finalParagraph, Modal);
      });
    });
  });

  describe('the eighth `GridColumn` component', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(GridColumn)
        .at(7);

      expectComponentToHaveChildren(wrapper, Subheading);
    });
  });

  describe('the second `Subheading` component', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(Subheading)
        .at(1);

      expectComponentToHaveChildren(wrapper, 'Home highlights');
    });
  });

  describe('the ninth `GridColumn` component', () => {
    it('should have the right amount of children', () => {
      const wrapper = getDescription()
        .find(GridColumn)
        .at(8);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(props.homeHighlights.length, Icon)
      );
    });
  });

  describe('each `Icon`', () => {
    it('shoudl have the right props', () => {
      const wrapper = getDescription()
        .find(Icon)
        .at(4);

      expectComponentToHaveProps(wrapper, {
        hasBorder: true,
        labelText: props.homeHighlights[0].text,
        name: props.homeHighlights[0].iconName,
      });
    });
  });

  it('should have `displayName` `Description`', () => {
    expectComponentToHaveDisplayName(Description, 'Description');
  });
});
