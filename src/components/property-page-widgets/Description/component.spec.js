import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { Paragraph } from 'typography/Paragraph';
import { Subheading } from 'typography/Subheading';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { ShowOnMobile } from 'layout/ShowOnMobile';

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
  homeHighlightsHeadingText: 'Highlights',
  mainCharacteristicsIcons: {
    color: null,
    hasBorder: false,
    isCircular: false,
    isColorInverted: false,
    isDisabled: false,
    isLabelLeft: false,
    labelText: expect.any(String),
    labelWeight: null,
    name: expect.any(String),
    path: null,
    size: null,
  },
  propertyMainCharacteristics,
  propertyName: 'Yolo',
  propertyType: 'Bed & Breakfast',
};

const getDescription = extraProps =>
  shallow(<Description {...props} {...extraProps} />);
const getDesktopMarkup = getDescription().find(ShowOnDesktop);
const getMobileMarkup = getDescription().find(ShowOnMobile);

describe('<Description />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getDescription();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the first `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getDescription().first();

      expectComponentToHaveProps(wrapper, {
        columns: 1,
      });
    });

    it('should render the right children', () => {
      const wrapper = getDescription().find(Grid);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(5, GridColumn)
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

      expectComponentToHaveChildren(wrapper, Subheading, Heading);
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

  describe('the first `Heading`', () => {
    const getHeading = () => getDescription().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();

      expectComponentToHaveProps(wrapper, {
        size: 'large',
      });
    });

    it('should render the right children', () => {
      const wrapper = getHeading();

      expectComponentToHaveChildren(wrapper, props.propertyName);
    });
  });

  describe('the second `GridColumn`', () => {
    it('should render the right children', () => {
      const wrapper = getDescription()
        .find(GridColumn)
        .at(1);

      expectComponentToHaveChildren(wrapper, ShowOnDesktop, ShowOnMobile);
    });
  });

  describe('the `ShowOnDesktop` component', () => {
    it('should render the right props', () => {
      const wrapper = getDesktopMarkup;

      expectComponentToHaveProps(wrapper, {
        parent: List,
        parentProps: { horizontal: true },
      });
    });

    it('should render the right children', () => {
      const wrapper = getDesktopMarkup;

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, ListItem)
      );
    });

    describe('the `Icon` nested in the first `ListItem`', () => {
      const wrapper = getDesktopMarkup
        .find(ListItem)
        .first()
        .children();

      it('should have the right props', () => {
        expectComponentToHaveProps(wrapper, props.mainCharacteristicsIcons);
      });
    });
  });

  describe('the `ShowOnMobile` component', () => {
    it('should render the right props', () => {
      const wrapper = getMobileMarkup;

      expectComponentToHaveProps(wrapper, {
        parent: Grid,
        parentProps: { columns: 1 },
      });
    });
    it('should render the right children', () => {
      const wrapper = getMobileMarkup;

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });

    describe('the `Icon` nested in the first `GridColumn`', () => {
      const wrapper = getMobileMarkup.find(Icon).at(0);

      it('should have the right props', () => {
        expectComponentToHaveProps(wrapper, props.mainCharacteristicsIcons);
      });
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

      expectComponentToHaveChildren(wrapper, 'Highlights');
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

  describe('the first `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getDescription()
        .find(Icon)
        .at(8);

      expectComponentToHaveProps(wrapper, {
        color: null,
        hasBorder: true,
        isCircular: false,
        isColorInverted: false,
        isDisabled: false,
        isLabelLeft: false,
        labelText: expect.any(String),
        labelWeight: null,
        name: expect.any(String),
        path: null,
        size: null,
      });
    });
  });

  it('should have `displayName` `Description`', () => {
    expectComponentToHaveDisplayName(Description, 'Description');
  });
});
