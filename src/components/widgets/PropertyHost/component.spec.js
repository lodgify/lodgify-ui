import React from 'react';
import { shallow } from 'enzyme';
import { List, Item } from 'semantic-ui-react';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from 'lib/expect-helpers';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';

import { Component as PropertyHost } from './component';

const catImageUrl =
  'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max';
const name = 'Mitjons & Kira';
const description = `Cats have keen vision; they can see much more detail than dogs.
Concentrated in the center of the retina of the eye, a specific type of cell called a cone gives cats
excellent visual acuity and binocular vision. This allows them to judge speed and distance very well,
an ability that helped them survive as hunters. However, although the cone cells are also
responsible for color vision, it is uncertain whether cats can see colors.

Like dogs, cats also have a lot of the retinal cells called rods, which are good at collecting dim light.
In fact, cats can see 6 times better in dim light than people, giving rise to the myth that cats can see
in the dark. Cats also have a reflective layer called the tapetum lucidum, which magnifies incoming light
and lends a characteristic blue or greenish glint to their eyes at night.`;

const email = 'welovecats@lodgify.com';
const phone = '+34932206524';
const languages = ['English', 'Italian', 'German', 'Spanish'];

const getPropertyHost = props =>
  shallow(
    <PropertyHost
      avatarUrl={catImageUrl}
      name={name}
      description={description}
      email={email}
      phone={phone}
      languages={languages}
      {...props}
    />
  );

const getGridRows = () => getPropertyHost().find(GridRow);
const getGridRowAt = at => getGridRows().at(at);

describe('<PropertyHost />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getPropertyHost();
    expectComponentToBe(wrapper, Grid);
  });

  it('should render `GridRows` components', () => {
    expect(getGridRows()).toHaveLength(3);
  });

  describe('The first `GridRow`', () => {
    it('should render a `GridColumn`', () => {
      expectComponentToHaveChildren(getGridRowAt(0), GridColumn);
    });

    describe('Its `GridColumn`', () => {
      const gridColumn = getGridRowAt(0).find(GridColumn);

      it('should render a `GridColumn` with the right props', () => {
        expectComponentToHaveProps(gridColumn, {
          width: 12,
        });
      });

      it('should render a `Heading` component', () => {
        expectComponentToHaveChildren(gridColumn, Heading);
      });
    });
  });

  describe('The second `GridRow`', () => {
    it('should render a `GridColumn`', () => {
      expectComponentToHaveChildren(getGridRowAt(1), GridColumn);
    });

    describe('Its `GridColumn`', () => {
      const gridColumn = getGridRowAt(1).find(GridColumn);

      it('should render a `GridColumn` with the right props', () => {
        expectComponentToHaveProps(gridColumn, {
          width: 12,
        });
      });

      it('should render a `Heading` component', () => {
        expectComponentToHaveChildren(gridColumn, Item.Group);
      });
    });
  });

  describe('The `Item.Group`', () => {
    const itemGroup = getGridRowAt(1).find(Item.Group);
    const item = itemGroup.find(Item);

    it('should be rendered with the right props', () => {
      expectComponentToHaveProps(itemGroup, {
        unstackable: true,
      });
    });

    it('should render a `Item` as children', () => {
      expectComponentToHaveChildren(itemGroup, Item);
    });

    it('should render a `Item.Image` and `Item.Header` as children of `Item`', () => {
      expectComponentToHaveChildren(item, Item.Image, Item.Header);
    });

    describe('The `Item.Image` and `Item.Header`', () => {
      it('should be rendered with the right props', () => {
        expectComponentToHaveProps(itemGroup.find(Item.Image), {
          size: 'tiny',
          avatar: true,
          src: expect.any(String),
        });

        expectComponentToHaveProps(itemGroup.find(Item.Header), {
          as: 'h4',
          verticalAlign: 'middle',
        });
      });
    });
  });

  describe('The third `GridRow`', () => {
    const firstColumn = getGridRowAt(2)
      .find(GridColumn)
      .at(0);
    const secondColumn = getGridRowAt(2)
      .find(GridColumn)
      .at(1);
    it('should render a `GridColumn`', () => {
      expectComponentToHaveChildren(getGridRowAt(2), GridColumn, GridColumn);
    });

    describe('its first `GridColumn`', () => {
      it('should render with the right props', () => {
        expectComponentToHaveProps(firstColumn, {
          mobile: 12,
          tablet: 12,
          computer: 7,
        });
      });

      it('should render the right children', () => {
        expectComponentToHaveChildren(firstColumn, Paragraph);
      });
    });

    describe('its second `GridColumn`', () => {
      it('should render with the right props', () => {
        expectComponentToHaveProps(secondColumn, {
          mobile: 12,
          tablet: 12,
          computer: 5,
        });
      });

      it('should render the right children', () => {
        expectComponentToHaveChildren(secondColumn, Heading, List);
      });
    });
  });

  it('should have displayName `PropertyHost`', () => {
    expectComponentToHaveDisplayName(PropertyHost, 'PropertyHost');
  });
});
