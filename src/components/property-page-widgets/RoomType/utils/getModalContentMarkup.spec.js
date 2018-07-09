import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Amenities } from 'property-page-widgets/Amenities';
import { Divider } from 'elements/Divider';
import { Paragraph } from 'typography/Paragraph';
import { Button } from 'elements/Button';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Slideshow } from 'media/Slideshow';

import { getModalContentMarkup } from './getModalContentMarkup';

const amenities = [
  { iconName: 'wheelchair', label: 'Elevator' },
  { iconName: 'coffee', label: 'Free Coffee', isDisabled: true },
];

const onClickCheckAvailability = Function.prototype;
const description = 'yoyo description';
const extraFeatures = [{ label: '1 Dining-Room' }];
const features = [{ iconName: 'double bed', label: '1 Bedroom' }];
const name = 'yoyo name';
const nightPrice = '$1010';
const ratingNumber = 4;
const slideShowImages = [
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
];

const getMarkup = () =>
  shallow(
    getModalContentMarkup(
      amenities,
      onClickCheckAvailability,
      description,
      extraFeatures,
      features,
      name,
      nightPrice,
      ratingNumber,
      slideShowImages
    )
  );

describe('getModalContentMarkup', () => {
  it('should return a `Modal.Content` component', () => {
    const wrapper = getMarkup();
    expectComponentToBe(wrapper, 'div');
  });

  describe('the `div`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup();
      expectComponentToHaveChildren(
        wrapper,
        Heading,
        'div',
        Divider,
        Slideshow,
        Paragraph,
        Grid,
        Divider,
        Amenities,
        Grid
      );
    });
  });

  describe('`Heading`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup().find(Heading);
      expectComponentToHaveChildren(wrapper, name);
    });
  });

  describe('`Slideshow`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup().find(Slideshow);
      expectComponentToHaveProps(wrapper, {
        additionalClass: 'no-shadow',
        images: slideShowImages,
      });
    });
  });

  describe('the first `Paragraph`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup()
        .find(Paragraph)
        .at(0);
      expectComponentToHaveChildren(wrapper, description);
    });
  });

  describe('the first `Grid`', () => {
    const getFirstGrid = () =>
      getMarkup()
        .find(Grid)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstGrid();
      expectComponentToHaveProps(wrapper, { columns: 4, stackable: true });
    });

    it('should render the right number of children', () => {
      const wrapper = getFirstGrid();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(
          [...features, ...extraFeatures].length,
          GridColumn
        )
      );
    });
  });

  describe('each `GridColumn`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup()
        .find(GridColumn)
        .at(0);
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('each `Paragraph`', () => {
    const getParagraph = () =>
      getMarkup()
        .find(Paragraph)
        .at(1);
    it('should have the right props', () => {
      const wrapper = getParagraph();
      expectComponentToHaveProps(wrapper, { weight: 'heavy' });
    });

    it('should render the right children', () => {
      const wrapper = getParagraph();
      expectComponentToHaveChildren(wrapper, features[0].label);
    });
  });

  describe('the second `Divider`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(Divider)
        .at(1);
      expectComponentToHaveProps(wrapper, { hasLine: true });
    });
  });

  describe('`Amenities`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup().find(Amenities);
      expectComponentToHaveProps(wrapper, { amenities });
    });
  });

  describe('the second `Grid`', () => {
    it('should rnder the right children', () => {
      const wrapper = getMarkup()
        .find(Grid)
        .at(1);
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the third `GridColumn`', () => {
    const getThirdGridColumn = () =>
      getMarkup()
        .find(GridColumn)
        .at(2);
    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveProps(wrapper, {
        verticalAlignContent: 'bottom',
        width: 6,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });

  describe('the fourth `Paragraph`', () => {
    it('should have the right children', () => {
      const wrapper = getMarkup()
        .find(Paragraph)
        .at(3);
      expectComponentToHaveChildren(wrapper, 'from', 'strong', '/night');
    });
  });

  describe('the `strong` element', () => {
    it('should have the right children', () => {
      const wrapper = getMarkup().find('strong');
      expectComponentToHaveChildren(wrapper, ` ${nightPrice} `);
    });
  });

  describe('the fourth `GridColumn`', () => {
    const getFourthGrid = () =>
      getMarkup()
        .find(GridColumn)
        .at(3);

    it('should have the right props', () => {
      const wrapper = getFourthGrid();
      expectComponentToHaveProps(wrapper, {
        verticalAlignContent: 'bottom',
        width: 6,
      });
    });

    it('should have the right children', () => {
      const wrapper = getFourthGrid();
      expectComponentToHaveChildren(wrapper, Button);
    });
  });

  describe('the `Button`', () => {
    const getButton = () => getMarkup().find(Button);
    it('should have the right props', () => {
      const wrapper = getButton();
      expectComponentToHaveProps(wrapper, {
        isPositionedRight: true,
        isRounded: true,
        onClick: expect.any(Function),
      });
    });

    it('should have the right children', () => {
      const wrapper = getButton();
      expectComponentToHaveChildren(wrapper, 'Check Availability');
    });
  });
});
