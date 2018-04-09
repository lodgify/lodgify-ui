import React from 'react';
import { shallow } from 'enzyme';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { Modal } from 'elements/Modal';

import { getParagraphsFromStrings } from './utils/getParagraphsFromStrings';
import {
  descriptionText,
  extraDescriptionText,
  icons,
} from './mock-data/props';
import { Component as PropertyLocation } from './component';

const props = {
  descriptionText,
  icons,
  propertyType: 'Bed & Breakfast',
};

const getPropertyLocation = extraProps =>
  shallow(<PropertyLocation {...props} {...extraProps} />);

describe('<PropertyLocation />', () => {
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getPropertyLocation();
    const actual = wrapper.is(GridColumn);
    expect(actual).toBe(true);
  });

  describe('the first `GridColumn` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyLocation();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getPropertyLocation();
      const actual = wrapper.children();
      expect(actual).toHaveLength(1);
      expect(actual.is(Grid)).toBe(true);
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getPropertyLocation()
        .find(Grid)
        .at(0);
      const actual = wrapper.children(GridColumn);
      expect(actual).toHaveLength(2);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 7,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      const actual = wrapper.children(Paragraph);
      expect(actual).toHaveLength(3);
    });
  });

  describe('the first `Paragraph` component', () => {
    const getFirstParagraph = () =>
      getPropertyLocation()
        .find(Paragraph)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstParagraph();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getFirstParagraph();
      const actual = wrapper.prop('children');
      expect(actual).toBe(props.propertyType);
    });
  });

  describe('the other `Paragraph` components', () => {
    it('should render the right children', () => {
      getParagraphsFromStrings(descriptionText).forEach((paragraphText, i) => {
        const wrapper = getPropertyLocation()
          .find(Paragraph)
          .at(i + 1);
        const actual = wrapper.prop('children');
        expect(actual).toBe(paragraphText);
      });
    });
  });

  describe('the third `GridColumn` component', () => {
    const getThirdGridColumn = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          verticalAlignContent: 'middle',
          width: 5,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      const actual = wrapper.children(Grid);
      expect(actual).toHaveLength(1);
    });
  });

  describe('the second `Grid` component', () => {
    const getSecondGrid = () =>
      getPropertyLocation()
        .find(Grid)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGrid();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          areColumnsCentered: true,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getSecondGrid();
      const actual = wrapper.children(GridColumn);
      expect(actual).toHaveLength(4);
    });
  });

  describe('each of the `GridColumn`s in the second `Grid` component', () => {
    const getGridColumnInSecondGrid = () =>
      getPropertyLocation()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getGridColumnInSecondGrid();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 5,
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInSecondGrid();
      const actual = wrapper.children(Icon);
      expect(actual).toHaveLength(1);
    });
  });

  describe('each of the `Icon`s in the second `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getPropertyLocation()
        .find(Icon)
        .at(0);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          label: icons[0].label,
          name: icons[0].iconName,
        })
      );
    });
  });

  describe('if `props.extraDescriptionText` is passed', () => {
    describe('the first `Grid` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getPropertyLocation({ extraDescriptionText })
          .find(Grid)
          .at(0);
        const actual = wrapper.children(GridColumn);
        expect(actual).toHaveLength(3);
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getPropertyLocation({ extraDescriptionText })
          .find(GridColumn)
          .at(7);

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();
        const actual = wrapper.props();
        expect(actual).toEqual(
          expect.objectContaining({
            width: 12,
          })
        );
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();
        const actual = wrapper.children(Modal);
        expect(actual).toHaveLength(1);
      });
    });

    describe('the `Modal` component', () => {
      it('should have the right props', () => {
        const wrapper = getPropertyLocation({ extraDescriptionText }).find(
          Modal
        );
        const actual = wrapper.props();
        expect(actual).toEqual(
          expect.objectContaining({
            children: expect.any(Array),
            trigger: <Link>View more</Link>,
          })
        );
      });
    });
  });

  it('should have `displayName` `PropertyLocation`', () => {
    const actual = PropertyLocation.displayName;
    expect(actual).toBe('PropertyLocation');
  });
});
