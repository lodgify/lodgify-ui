import React from 'react';
import { shallow } from 'enzyme';
import { Card, List, Responsive } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Slideshow } from 'media/Slideshow';

import { ComponentWithResponsive as RoomType } from './component';

const props = {
  amenities: [
    {
      name: 'Cooking',
      iconName: 'leaf',
      items: ['Toaster', 'Microwave', 'Coffee Machine'],
    },
    {
      name: 'Bathroom & Laundry',
      iconName: 'paw',
      items: ['Bidet', 'Hair Dryer', 'Iron & Board'],
    },
  ],
  description: 'yayayay',
  imageUrl: '🐱🐱',
  locationName: 'Catania',
  nightPrice: '$280',
  name: 'The Cat House',
  propertyType: 'Bed and breakfast',
  propertyUrl: '/',
  ratingNumber: 4,
  onClickCheckAvailability: Function.prototype,
  slideShowImages: [
    {
      alternativeText: 'Two cats',
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Two cats',
    },
    {
      alternativeText: 'Two more cats',
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Two more cats',
    },
    {
      alternativeText: 'Much cats',
      url: 'https://li3.cdbcdn.com/oh/522a12d9-ab51-4635-94c1-42536f286e4d.jpg',
      title: 'Much cats',
    },
  ],
  isUserOnMobile: false,
  extraFeatures: [{ labelText: '1 Dining-Room' }],
  features: [{ iconName: 'double bed', labelText: '1 Bedroom' }],
};

const getRoomType = extraProps =>
  shallow(<RoomType {...props} {...extraProps} />);
const getWrappedRoomType = extraProps => {
  const Child = getRoomType().prop('as');

  return shallow(<Child {...props} {...extraProps} />);
};

describe('<RoomType />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getRoomType();

    expectComponentToBe(wrapper, Responsive);
  });

  describe('the `Child` of the `RoomType` component', () => {
    it('should have `Card` component as a wrapper', () => {
      const wrapper = getWrappedRoomType();

      expectComponentToBe(wrapper, Card);
    });
  });

  describe('the `Card component`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedRoomType().find(Card);

      expectComponentToHaveProps(wrapper, { fluid: true });
    });

    it('should have one child', () => {
      const wrapper = getWrappedRoomType().find(Card);

      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the first Grid`', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedRoomType()
        .find(Grid)
        .first();

      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the first `GridRow`', () => {
    const getFirstGridRow = () =>
      getWrappedRoomType()
        .find(GridRow)
        .first();

    it('should have the right children', () => {
      const wrapper = getFirstGridRow();

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the first `GridColumn`', () => {
    const getFirstGridColumn = () =>
      getWrappedRoomType()
        .find(GridColumn)
        .first();

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveChildren(wrapper, Slideshow);
    });

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 4,
        mobile: 12,
        verticalAlignContent: null,
      });
    });
  });

  describe('the `Slideshow`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedRoomType()
        .find(Slideshow)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        hasShadow: false,
        images: props.slideShowImages,
        isRounded: false,
        isStretched: true,
        isShowingBulletNavigation: false,
      });
    });
  });

  describe('the second `GridColumn`', () => {
    const getSecondGridColumn = () =>
      getWrappedRoomType()
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
      getWrappedRoomType()
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
        GridRow
      );
    });
  });

  describe('the third `GridColumn`', () => {
    const getThirdGridColumn = () =>
      getWrappedRoomType()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();

      expectComponentToHaveProps(wrapper, {
        computer: 12,
        floated: 'left',
        mobile: 10,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();

      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the first `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedRoomType()
        .find(Heading)
        .at(0);

      expectComponentToHaveChildren(wrapper, props.name);
    });
  });

  describe('the fourth `GridColumn`', () => {
    const getFourthGridColumn = () =>
      getWrappedRoomType()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();

      expectComponentToHaveProps(wrapper, {
        only: 'mobile',
        textAlign: 'right',
        verticalAlignContent: 'middle',
        width: 2,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();

      expectComponentToHaveChildren(wrapper, Modal);
    });
  });

  describe('the last `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedRoomType()
        .find(GridRow)
        .at(1);

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the fifth `GridColumn`', () => {
    const getFifthGridColumn = () =>
      getWrappedRoomType()
        .find(GridColumn)
        .at(6);

    it('should have the right props', () => {
      const wrapper = getFifthGridColumn();

      expectComponentToHaveProps(wrapper, {
        only: 'tablet computer',
        verticalAlignContent: 'bottom',
        width: 4,
      });
    });

    it('should have the right children', () => {
      const wrapper = getFifthGridColumn();

      expectComponentToHaveChildren(wrapper, Modal);
    });
  });

  describe('the second `Modal`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedRoomType()
        .find(Modal)
        .at(1);

      expectComponentToHaveProps(wrapper, {
        trigger: <Link>More Info</Link>,
        size: 'small',
      });
    });
  });

  describe('the sixth `GridColumn`', () => {
    const getSixthGridColumn = () =>
      getWrappedRoomType()
        .find(GridColumn)
        .at(9);

    it('should have the right props', () => {
      const wrapper = getSixthGridColumn();

      expectComponentToHaveProps(wrapper, { textAlign: 'right' });
    });

    it('should render the right children', () => {
      const wrapper = getSixthGridColumn();

      expectComponentToHaveChildren(
        wrapper,
        Card.Description,
        ShowOnMobile,
        Button
      );
    });

    describe('if `isUserOnMobile === true`', () => {
      it('should have the right props', () => {
        const wrapper = getWrappedRoomType({ isUserOnMobile: true })
          .find(Card.Description)
          .at(0)
          .parent();

        expectComponentToHaveProps(wrapper, { textAlign: 'left' });
      });
    });
  });

  describe('the `Card.Description`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedRoomType()
        .find(Card.Description)
        .children();

      expectComponentToBe(wrapper, 'span');
    });
  });

  describe('the `span`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedRoomType()
        .find('span')
        .at(2);

      expectComponentToHaveChildren(wrapper, 'from ', Heading, '/night');
    });
  });

  describe('the second `Heading`', () => {
    const getSecondHeading = () =>
      getWrappedRoomType()
        .find(Heading)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getSecondHeading();

      expectComponentToHaveProps(wrapper, { size: 'medium' });
    });

    it('should have the right children', () => {
      const wrapper = getSecondHeading();

      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  describe('the `ShowOnMobile`', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedRoomType()
        .find(ShowOnMobile)
        .at(0);

      expectComponentToHaveChildren(wrapper, Divider);
    });
  });

  describe('the `Button`', () => {
    const getButton = () =>
      getWrappedRoomType()
        .find(Button)
        .at(0);

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

  it('should have displayName `RoomType`', () => {
    const component = getRoomType().prop('as');

    expectComponentToHaveDisplayName(component, 'RoomType');
  });
});

describe('`RoomType` in mobile view', () => {
  const getMobileFourthGrid = () =>
    getWrappedRoomType({ isUserOnMobile: true })
      .find(GridColumn)
      .at(3);

  describe('`the fourth `GridColumn`', () => {
    it('should have the right props', () => {
      const wrapper = getMobileFourthGrid();

      expectComponentToHaveProps(wrapper, { verticalAlignContent: 'middle' });
    });

    it('should have the right children', () => {
      const wrapper = getMobileFourthGrid();

      expectComponentToHaveChildren(wrapper, Modal);
    });
  });

  describe('the `Modal`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedRoomType({ isUserOnMobile: true })
        .find(Modal)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        trigger: (
          <Icon
            color="yellow"
            isCircular
            isColorInverted
            name={ICON_NAMES.INFO}
            size="small"
          />
        ),
      });
    });
  });

  describe('the `Button`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedRoomType({ isUserOnMobile: true })
        .find(Button)
        .at(2);

      expectComponentToHaveProps(wrapper, { isPositionedRight: false });
    });
  });
});
