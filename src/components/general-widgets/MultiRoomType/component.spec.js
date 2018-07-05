import React from 'react';
import { shallow } from 'enzyme';
import { Card, List, Rating } from 'semantic-ui-react';
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
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';
import { Slideshow } from 'media/Slideshow';

import { getPluralString } from './utils/getPluralString';
import { Component as MultiRoomType } from './component';

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
};

const getMultiRoomType = () => shallow(<MultiRoomType {...props} />);

describe('<MultiRoomType />', () => {
  it('should render a single Semantic UI `Card` component', () => {
    const wrapper = getMultiRoomType();
    expectComponentToBe(wrapper, Card);
  });

  it('should have the right props', () => {
    const wrapper = getMultiRoomType();
    expectComponentToHaveProps(wrapper, { fluid: true });
  });

  describe('`Card`', () => {
    it('should have one child', () => {
      const wrapper = getMultiRoomType().find(Card);
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the first `Grid`', () => {
    it('should render the right children', () => {
      const wrapper = getMultiRoomType()
        .find(Grid)
        .first();
      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the first `GridRow`', () => {
    const getFirstGridRow = () =>
      getMultiRoomType()
        .find(GridRow)
        .first();

    it('should have the right children', () => {
      const wrapper = getFirstGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });
  describe('the first `GridColumn`', () => {
    const getFirstGridColumn = () =>
      getMultiRoomType()
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
        width: 4,
      });
    });
  });
  describe('the `Slideshow`', () => {
    it('should have the right props', () => {
      const wrapper = getMultiRoomType().find(Slideshow);
      expectComponentToHaveProps(wrapper, {
        additionalClass: 'fit-height no-shadow no-border-radius',
        images: props.slideShowImages,
        showBullets: false,
      });
    });
  });

  describe('the second `GridColumn`', () => {
    const getSecondGridColumn = () =>
      getMultiRoomType()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 8,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid`', () => {
    const getSecondGrid = () =>
      getMultiRoomType()
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
      expectComponentToHaveChildren(wrapper, GridRow, List, GridRow);
    });
  });

  describe('the second `GridRow`', () => {
    const getSecondGridRow = () =>
      getMultiRoomType()
        .find(GridRow)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridRow();
      expectComponentToHaveProps(wrapper, {
        columns: 2,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the third `GridColumn`', () => {
    const getThirdGridColumn = () =>
      getMultiRoomType()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 8,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the first `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getMultiRoomType()
        .find(Heading)
        .at(0);
      expectComponentToHaveChildren(wrapper, props.name);
    });
  });

  describe('the fourth `GridColumn`', () => {
    const getFourthGridColumn = () =>
      getMultiRoomType()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveProps(wrapper, {
        textAlign: 'right',
        width: 4,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveChildren(
        wrapper,
        props.ratingNumber.toString(),
        Rating
      );
    });
  });

  describe('`Rating`', () => {
    it('should have the right props', () => {
      const wrapper = getMultiRoomType().find(Rating);
      expectComponentToHaveProps(wrapper, {
        disabled: true,
        maxRating: 5,
        rating: Math.round(props.ratingNumber),
        size: 'tiny',
      });
    });
  });

  describe('the `List`', () => {
    const getList = () => getMultiRoomType().find(List);
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
      getMultiRoomType()
        .find(List.Item)
        .forEach(wrapper => expectComponentToHaveChildren(wrapper, Icon));
    });
  });

  describe('the first `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getMultiRoomType()
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
      const wrapper = getMultiRoomType()
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
      const wrapper = getMultiRoomType()
        .find(Icon)
        .at(2);
      expectComponentToHaveProps(wrapper, {
        label: getPluralString(props.bathroomsNumber, 'Bathroom', 'Bathrooms'),
        name: 'bathroom',
        size: 'small',
      });
    });
  });

  describe('the third `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getMultiRoomType()
        .find(GridRow)
        .at(2);
      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the fifth `GridColumn`', () => {
    const getFifthGridColumn = () =>
      getMultiRoomType()
        .find(GridColumn)
        .at(4);
    it('should have the right props', () => {
      const wrapper = getFifthGridColumn();
      expectComponentToHaveProps(wrapper, { textAlign: 'right', width: 12 });
    });

    it('should render the right childrem', () => {
      const wrapper = getFifthGridColumn();
      expectComponentToHaveChildren(wrapper, Card.Description, Button);
    });
  });

  describe('the `Card.Description`', () => {
    it('should have the right children', () => {
      const wrapper = getMultiRoomType().find(Card.Description);
      expectComponentToHaveChildren(wrapper, 'from ', Heading, ' /night');
    });
  });

  describe('the second `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getMultiRoomType()
        .find(Heading)
        .at(1);
      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  describe('the `Button`', () => {
    const getButton = () => getMultiRoomType().find(Button);

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

  it('should have `displayName` `MultiRoomType`', () => {
    expectComponentToHaveDisplayName(MultiRoomType, 'MultiRoomType');
  });
});
