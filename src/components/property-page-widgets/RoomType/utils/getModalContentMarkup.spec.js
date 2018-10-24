import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import ListItem from 'semantic-ui-react/dist/commonjs/elements/List/ListItem';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Amenities } from 'property-page-widgets/Amenities';
import { Divider } from 'elements/Divider';
import { Paragraph } from 'typography/Paragraph';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Rating } from 'elements/Rating';
import { Slideshow } from 'media/Slideshow';

import { getModalContentMarkup } from './getModalContentMarkup';

const amenities = [
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
];

const description = 'yoyo description';
const extraFeatures = [{ labelText: '1 Dining-Room' }];
const features = [{ iconName: 'double bed', labelText: '1 Bedroom' }];
const name = 'yoyo name';
const nightPrice = '$1010';
const ratingNumber = 3.2;
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
        Rating,
        Divider,
        Slideshow,
        Paragraph,
        List,
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

  describe('`Rating`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup().find(Rating);

      expectComponentToHaveProps(wrapper, { ratingNumber: ratingNumber });
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

  describe('the first `List`', () => {
    const getFirstList = () =>
      getMarkup()
        .find(List)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstList();

      expectComponentToHaveProps(wrapper, { horizontal: true });
    });

    it('should render the right number of children', () => {
      const wrapper = getFirstList();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(
          [...features, ...extraFeatures].length,
          ListItem
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

      expectComponentToHaveChildren(wrapper, features[0].labelText);
    });
  });

  describe('`Amenities`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup().find(Amenities);

      expectComponentToHaveProps(wrapper, { amenities });
    });
  });

  describe('the first `Grid`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup()
        .find(Grid)
        .at(0);

      expectComponentToHaveChildren(wrapper, GridColumn);
    });
  });

  describe('the first `GridColumn`', () => {
    const getFirstGridColumn = () =>
      getMarkup()
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();

      expectComponentToHaveProps(wrapper, {
        verticalAlignContent: 'bottom',
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();

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
});
