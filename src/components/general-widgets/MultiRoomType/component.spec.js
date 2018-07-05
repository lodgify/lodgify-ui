import React from 'react';
import { shallow } from 'enzyme';
import { Card, List, Responsive } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Button } from 'elements/Button';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Divider } from 'elements/Divider';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Slideshow } from 'media/Slideshow';

import { getPluralString } from './utils/getPluralString';
import { ComponentWithResponsive as MultiRoomType } from './component';

const props = {
  bathroomsNumber: 2,
  bedsNumber: 3,
  guestsNumber: 3,
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  name: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4,
  checkAvailabilityHandler: Function.prototype,
  slideShowImages: [
    {
      alternativeText: 'Two cats',
      url: '//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Two cats',
    },
    {
      alternativeText: 'Two more cats',
      url: '//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Two more cats',
    },
    {
      alternativeText: 'Much cats',
      url: '//li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Much cats',
    },
  ],
  isUserOnMobile: false,
};

const getMultiRoomType = () => shallow(<MultiRoomType {...props} />);
const getWrappedMultiRoomType = () => {
  const Child = getMultiRoomType().prop('as');
  return shallow(<Child {...props} />);
};

describe('<MultiRoomType />', () => {
  it('should render a single Semantic UI `Responsive` component', () => {
    const wrapper = getMultiRoomType();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('`Card`', () => {
    const firstCardInComponent = () => getWrappedMultiRoomType().find(Card);

    it('should have the right props', () => {
      const wrapper = firstCardInComponent();
      expectComponentToHaveProps(wrapper, { fluid: true });
    });

    it('should have one child', () => {
      const wrapper = firstCardInComponent();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the first Grid`', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Grid)
        .first();
      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the first `GridRow`', () => {
    const getFirstGridRow = () =>
      getWrappedMultiRoomType()
        .find(GridRow)
        .first();

    it('should have the right children', () => {
      const wrapper = getFirstGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the first `GridColumn`', () => {
    const getFirstGridColumn = () =>
      getWrappedMultiRoomType()
        .find(GridColumn)
        .first();

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Slideshow);
    });

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        verticalAlignContent: null,
        computer: 4,
        mobile: 12,
      });
    });
  });

  describe('the `Slideshow`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedMultiRoomType().find(Slideshow);
      expectComponentToHaveProps(wrapper, {
        additionalClass: 'fit-height no-shadow no-border-radius',
        images: props.slideShowImages,
        showBullets: false,
      });
    });
  });

  describe('the second `GridColumn`', () => {
    const getSecondGridColumn = () =>
      getWrappedMultiRoomType()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        computer: 8,
        mobile: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid`', () => {
    const getSecondGrid = () =>
      getWrappedMultiRoomType()
        .find(Grid)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGrid();
      expectComponentToHaveProps(wrapper, {
        padded: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGrid();

      expectComponentToHaveChildren(
        wrapper,
        GridColumn,
        GridColumn,
        List,
        ShowOnMobile,
        GridRow
      );
    });
  });

  describe('the third `GridColumn`', () => {
    const getThirdGridColumn = () =>
      getWrappedMultiRoomType()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveProps(wrapper, {
        computer: 8,
        mobile: 12,
        tablet: 8,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the first `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Heading)
        .at(0);
      expectComponentToHaveChildren(wrapper, props.name);
    });
  });

  describe('the fourth `GridColumn`', () => {
    const getFourthGridColumn = () =>
      getWrappedMultiRoomType()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveProps(wrapper, {
        computer: 4,
        only: 'tablet computer',
        textAlign: 'right',
      });
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('the `List`', () => {
    const getList = () => getWrappedMultiRoomType().find(List);
    it('should have the right props', () => {
      const wrapper = getList();
      expectComponentToHaveProps(wrapper, {
        floated: 'left',
        horizontal: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getList();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, List.Item)
      );
    });
  });

  describe('each `List.Item`', () => {
    it('should render the right children', () => {
      getWrappedMultiRoomType()
        .find(List.Item)
        .forEach(wrapper => expectComponentToHaveChildren(wrapper, Icon));
    });
  });

  describe('the first `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Icon)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        label: getPluralString(props.guestsNumber, 'Guest', 'Guests'),
        name: 'guests',
        size: 'small',
      });
    });
  });

  describe('the second `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Icon)
        .at(1);
      expectComponentToHaveProps(wrapper, {
        label: getPluralString(props.bedsNumber, 'Bedroom', 'Bedrooms'),
        name: 'double bed',
        size: 'small',
      });
    });
  });

  describe('the third `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Icon)
        .at(2);
      expectComponentToHaveProps(wrapper, {
        label: getPluralString(props.bathroomsNumber, 'Bathroom', 'Bathrooms'),
        name: 'bathroom',
        size: 'small',
      });
    });
  });

  describe('the `Card.Description`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedMultiRoomType().find(Card.Description);
      expectComponentToHaveChildren(wrapper, 'from ', Heading, ' /night');
    });
  });

  describe('the second `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Heading)
        .at(1);
      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  describe('the `Button`', () => {
    const getButton = () => getWrappedMultiRoomType().find(Button);

    it('should have the right props', () => {
      const wrapper = getButton();
      expectComponentToHaveProps(wrapper, {
        isPositionedRight: true,
        isRounded: true,
        onClick: expect.any(Function),
      });
    });

    it('should render the right children', () => {
      const wrapper = getButton();
      expectComponentToHaveChildren(wrapper, 'Check Availability');
    });
  });

  it('should have displayName `MultiRoomType`', () => {
    const component = getMultiRoomType().prop('as');
    expectComponentToHaveDisplayName(component, 'MultiRoomType');
  });
});

describe('`MultiRoomType` in mobile view', () => {
  describe('`getRatingMarkup`', () => {
    it('should only be visible after the card list items', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(ShowOnMobile)
        .at(0);
      expectComponentToHaveChildren(wrapper, 'div');
    });

    it('should not be visible next to the `Heading`', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(Grid)
        .at(1)
        .find(GridColumn);
      const column2 = wrapper.at(1);
      expectComponentToHaveChildren(wrapper.at(0), Heading);
      expectComponentToHaveChildren(column2, 'div');
      expectComponentToHaveProps(column2, {
        only: 'tablet computer',
      });
    });
  });

  describe('the second `ShowMobile`', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedMultiRoomType()
        .find(ShowOnMobile)
        .at(1);
      expectComponentToHaveChildren(wrapper, Divider);
    });
  });
});
