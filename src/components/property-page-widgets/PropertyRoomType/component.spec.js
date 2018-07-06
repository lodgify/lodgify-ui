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
import { Icon } from 'elements/Icon';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { Slideshow } from 'media/Slideshow';

import { ComponentWithResponsive as PropertyRoomType } from './component';

const props = {
  amenities: [{ iconName: 'wheelchair', label: 'Elevator' }],
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
  extraFeatures: [{ label: '1 Dining-Room' }],
  features: [{ iconName: 'double bed', label: '1 Bedroom' }],
};

const getPropertyRoomType = extraProps =>
  shallow(<PropertyRoomType {...props} {...extraProps} />);
const getWrappedPropertyRoomType = extraProps => {
  const Child = getPropertyRoomType().prop('as');
  return shallow(<Child {...props} {...extraProps} />);
};

describe('<PropertyRoomType />', () => {
  it('should be wrapped in a Semantic UI `Responsive` component', () => {
    const wrapper = getPropertyRoomType();
    expectComponentToBe(wrapper, Responsive);
  });

  describe('the wrapper `PropertyRoomType` component', () => {
    it('should be a Semantic UI `Card`', () => {
      const wrapper = getWrappedPropertyRoomType();
      expectComponentToBe(wrapper, Card);
    });

    it('should have the right props', () => {
      const wrapper = getWrappedPropertyRoomType();
      expectComponentToHaveProps(wrapper, { fluid: true });
    });

    it('should have one child', () => {
      const wrapper = getWrappedPropertyRoomType();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the first Grid`', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedPropertyRoomType()
        .find(Grid)
        .first();
      expectComponentToHaveChildren(wrapper, GridRow);
    });
  });

  describe('the first `GridRow`', () => {
    const getFirstGridRow = () =>
      getWrappedPropertyRoomType()
        .find(GridRow)
        .first();

    it('should have the right children', () => {
      const wrapper = getFirstGridRow();
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the first `GridColumn`', () => {
    const getFirstGridColumn = () =>
      getWrappedPropertyRoomType()
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
      const wrapper = getWrappedPropertyRoomType()
        .find(Slideshow)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        additionalClass: 'fit-height no-shadow no-border-radius',
        images: props.slideShowImages,
        showBullets: false,
      });
    });
  });

  describe('the second `GridColumn`', () => {
    const getSecondGridColumn = () =>
      getWrappedPropertyRoomType()
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
      getWrappedPropertyRoomType()
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

  describe('the first `GridColumn`', () => {
    const getThirdGridColumn = () =>
      getWrappedPropertyRoomType()
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
      const wrapper = getWrappedPropertyRoomType()
        .find(Heading)
        .at(0);
      expectComponentToHaveChildren(wrapper, props.name);
    });
  });

  describe('the fourth `GridColumn`', () => {
    const getFourthGridColumn = () =>
      getWrappedPropertyRoomType()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveProps(wrapper, {
        computer: 4,
        mobile: 2,
        textAlign: 'right',
        verticalAlignContent: 'top',
      });
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('the `ShowOnMobile', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedPropertyRoomType()
        .find(ShowOnMobile)
        .at(0);
      expectComponentToHaveChildren(wrapper, 'div');
    });
  });

  describe('the last `GridRow`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedPropertyRoomType()
        .find(GridRow)
        .at(1);
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the fifth `GridColumn`', () => {
    const getFifthGridColumn = () =>
      getWrappedPropertyRoomType()
        .find(GridColumn)
        .at(4);

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
      const wrapper = getWrappedPropertyRoomType()
        .find(Modal)
        .at(0);
      expectComponentToHaveProps(wrapper, { trigger: <Link>More Info</Link> });
    });
  });

  describe('the sixth `GridColumn`', () => {
    const getSixthGridColumn = () =>
      getWrappedPropertyRoomType()
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
        const wrapper = getWrappedPropertyRoomType({ isUserOnMobile: true })
          .find(Card.Description)
          .at(0)
          .parent();
        expectComponentToHaveProps(wrapper, { textAlign: 'left' });
      });
    });
  });

  describe('the `Card.Description`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedPropertyRoomType().find(Card.Description);
      expectComponentToHaveChildren(wrapper, 'from ', Heading, ' /night');
    });
  });

  describe('the second `Heading`', () => {
    it('should have the right children', () => {
      const wrapper = getWrappedPropertyRoomType()
        .find(Heading)
        .at(2);
      expectComponentToHaveChildren(wrapper, props.nightPrice);
    });
  });

  describe('the second `ShowOnMobile`', () => {
    it('should render the right children', () => {
      const wrapper = getWrappedPropertyRoomType()
        .find(ShowOnMobile)
        .at(1);
      expectComponentToHaveChildren(wrapper, Divider);
    });
  });

  describe('the `Button`', () => {
    const getButton = () =>
      getWrappedPropertyRoomType()
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

  it('should have displayName `PropertyRoomType`', () => {
    const component = getPropertyRoomType().prop('as');
    expectComponentToHaveDisplayName(component, 'PropertyRoomType');
  });
});

describe('`PropertyRoomType` in mobile view', () => {
  const getMobileFourthGrid = () =>
    getWrappedPropertyRoomType({ isUserOnMobile: true })
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
      const wrapper = getWrappedPropertyRoomType({ isUserOnMobile: true })
        .find(Modal)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        trigger: (
          <Icon
            color="yellow"
            isCircular
            isColorInverted
            name="info"
            size="small"
          />
        ),
      });
    });
  });

  describe('the `Button`', () => {
    it('should have the right props', () => {
      const wrapper = getWrappedPropertyRoomType({ isUserOnMobile: true })
        .find(Button)
        .at(2);
      expectComponentToHaveProps(wrapper, { isPositionedRight: false });
    });
  });
});
