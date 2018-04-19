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
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';

import {
  descriptionText,
  extraDescriptionText,
  icons,
} from './mock-data/props';
import { Component as PropertyDescription } from './component';

const props = {
  descriptionText,
  icons,
  propertyType: 'Bed & Breakfast',
};

const getPropertyDescription = extraProps =>
  shallow(<PropertyDescription {...props} {...extraProps} />);

describe('<PropertyDescription />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getPropertyDescription();
    const actual = wrapper.is(Grid);
    expect(actual).toBe(true);
  });

  describe('the first `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyDescription();
      expectComponentToHaveProps(wrapper, {
        stackable: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getPropertyDescription();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getPropertyDescription()
        .find(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 7,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, Paragraph)
      );
    });
  });

  describe('the first `Paragraph` component', () => {
    const getFirstParagraph = () =>
      getPropertyDescription()
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
      expectComponentToHaveChildren(wrapper, props.propertyType);
    });
  });

  describe('the other `Paragraph` components', () => {
    it('should render the right children', () => {
      getParagraphsFromStrings(descriptionText).forEach(
        (paragraphText, index) => {
          const wrapper = getPropertyDescription()
            .find(Paragraph)
            .at(index + 1);
          expectComponentToHaveChildren(wrapper, paragraphText);
        }
      );
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getPropertyDescription()
        .find(GridColumn)
        .at(1);
    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        only: 'computer',
        width: 1,
      });
    });
  });

  describe('the third `GridColumn` component', () => {
    const getThirdGridColumn = () =>
      getPropertyDescription()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveProps(wrapper, {
        verticalAlignContent: 'middle',
        width: 4,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyDescription()
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
      getPropertyDescription()
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
      const wrapper = getPropertyDescription()
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
        const wrapper = getPropertyDescription({ extraDescriptionText })
          .find(GridColumn)
          .first();
        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(3, Paragraph),
          ...getArrayOfLengthOfItem(1, Modal)
        );
      });
    });

    describe('the `Modal` component', () => {
      it('should have the right props', () => {
        const wrapper = getPropertyDescription({ extraDescriptionText }).find(
          Modal
        );
        expectComponentToHaveProps(wrapper, {
          children: expect.any(Array),
          trigger: <Link>View more</Link>,
        });
      });
    });
  });

  it('should have `displayName` `PropertyDescription`', () => {
    const actual = PropertyDescription.displayName;
    expect(actual).toBe('PropertyDescription');
  });
});
