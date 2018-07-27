import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Statistic, Segment } from 'semantic-ui-react';

import { Button } from 'elements/Button';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';

import { Component as Promotion } from './component';

const componentProps = {
  backgroundImage: 'testimage',
  headingText: 'Hello World!',
  discountCode: '123',
  discountAmount: '100%',
  onClick: Function.prototype,
};

const getPromotion = () => shallow(<Promotion {...componentProps} />);

const getPromotionAsStacked = () =>
  shallow(<Promotion {...componentProps} isDisplayedStacked />);

describe('The `Promotion` component', () => {
  it('should render a `Segment` component', () => {
    const wrapper = getPromotion();
    expectComponentToBe(wrapper, Segment);
  });

  describe('the `Segment`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotion();
      expectComponentToHaveProps(wrapper, {
        className: 'is-promotion',
        basic: true,
        onClick: expect.any(Function),
      });
    });

    it('should have the right children', () => {
      const wrapper = getPromotion();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('first `Grid`', () => {
    const getGrid = () =>
      getPromotion()
        .find(Grid)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getGrid();
      expectComponentToHaveProps(wrapper, {
        className: 'first-grid',
        stackable: true,
        stretched: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGrid();
      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('first `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getPromotion()
        .find(GridRow)
        .at(0);
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('first `GridColumn`', () => {
    const getGridColumn = () =>
      getPromotion()
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveProps(wrapper, {
        className: 'content-section',
        style: {
          backgroundImage: `url(${componentProps.backgroundImage})`,
        },
        width: 9,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('second `Grid`', () => {
    const getGrid = () =>
      getPromotion()
        .find(Grid)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getGrid();
      expectComponentToHaveProps(wrapper, {
        padded: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGrid();
      expectComponentToHaveChildren(wrapper, GridRow, GridRow, GridRow);
    });
  });

  describe('second `GridRow`', () => {
    const getGridRow = () =>
      getPromotion()
        .find(GridRow)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getGridRow();
      expectComponentToHaveProps(wrapper, {
        verticalAlign: 'top',
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('second `GridColumn`', () => {
    const getGridColumn = () =>
      getPromotion()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveProps(wrapper, {
        textAlign: 'left',
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('first `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getPromotion()
        .find(Heading)
        .at(0);
      expectComponentToHaveChildren(wrapper, componentProps.headingText);
    });
  });

  describe('third `GridRow`', () => {
    const getGridRow = () =>
      getPromotion()
        .find(GridRow)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getGridRow();
      expectComponentToHaveProps(wrapper, {
        className: 'book-now-button-container',
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('third `GridColumn`', () => {
    const getGridColumn = () =>
      getPromotion()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveProps(wrapper, {
        textAlign: 'center',
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveChildren(wrapper, Button);
    });
  });

  describe('first `Button`', () => {
    const getButton = () =>
      getPromotion()
        .find(Button)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getButton();
      expectComponentToHaveProps(wrapper, {
        isRounded: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getButton();
      expectComponentToHaveChildren(wrapper, 'Book Now with Discount');
    });
  });

  describe('fourth `GridRow`', () => {
    const getGridRow = () =>
      getPromotion()
        .find(GridRow)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getGridRow();
      expectComponentToHaveProps(wrapper, {
        verticalAlign: 'bottom',
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('fourth `GridColumn`', () => {
    const getGridColumn = () =>
      getPromotion()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveProps(wrapper, {
        floated: 'right',
        textAlign: 'right',
        width: 6,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('first `div`', () => {
    it('should have the right children', () => {
      const wrapper = getPromotion()
        .find('div')
        .at(0);
      expectComponentToHaveChildren(wrapper, Paragraph, Button);
    });
  });

  describe('first `Paragraph`', () => {
    const getParagraph = () =>
      getPromotion()
        .find(Paragraph)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getParagraph();
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should have the right children', () => {
      const wrapper = getParagraph();
      expectComponentToHaveChildren(wrapper, 'Use the coupon code');
    });
  });

  describe('second `Button`', () => {
    const getButton = () =>
      getPromotion()
        .find(Button)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getButton();
      expectComponentToHaveProps(wrapper, {
        hasShadow: true,
        isPositionedRight: true,
      });
    });

    it('should have the right children', () => {
      const wrapper = getButton();
      expectComponentToHaveChildren(wrapper, componentProps.discountCode);
    });
  });

  describe('fifth `GridColumn`', () => {
    const getGridColumn = () =>
      getPromotion()
        .find(GridColumn)
        .at(4);

    it('should have the right props', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveProps(wrapper, {
        className: 'discount-section',
        textAlign: 'center',
        verticalAlign: 'middle',
        width: 3,
      });
    });

    it('should have the right children', () => {
      const wrapper = getGridColumn();
      expectComponentToHaveChildren(wrapper, Statistic);
    });
  });

  describe('first `Statistic`', () => {
    const getStatistic = () =>
      getPromotion()
        .find(Statistic)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getStatistic();
      expectComponentToHaveProps(wrapper, {
        size: 'small',
      });
    });

    it('should have the right children', () => {
      const wrapper = getStatistic();
      expectComponentToHaveChildren(wrapper, Statistic.Label, Statistic.Value);
    });
  });
});

describe('`Promotion` as stacked', () => {
  describe('`Segment`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotionAsStacked()
        .find(Segment)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        className: 'is-promotion display-stacked',
        basic: true,
      });
    });
  });

  describe('the first `GridColumn`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotionAsStacked()
        .find(GridColumn)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });
  });

  describe('the second `Grid`', () => {
    it('should have the right children', () => {
      const wrapper = getPromotionAsStacked()
        .find(Grid)
        .at(1);

      expectComponentToHaveChildren(wrapper, GridRow, GridRow);
    });
  });

  describe('the second `GridColumn`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotionAsStacked()
        .find(GridColumn)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        textAlign: 'center',
      });
    });
  });

  describe('the third `GridRow`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotionAsStacked()
        .find(GridRow)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        verticalAlign: 'top',
      });
    });
  });

  describe('the third `GridColumn`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotionAsStacked()
        .find(GridColumn)
        .at(2);

      expectComponentToHaveProps(wrapper, {
        textAlign: 'center',
        width: 12,
      });
    });
  });

  describe('the fourth `GridColumn`', () => {
    it('should have the right props', () => {
      const wrapper = getPromotionAsStacked()
        .find(GridColumn)
        .at(3);

      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });
  });
});
