import React from 'react';
import { shallow } from 'enzyme';
import List from 'semantic-ui-react/dist/commonjs/elements/List';
import Item from 'semantic-ui-react/dist/commonjs/views/Item';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import {
  CONTACT_INFORMATION,
  EMAIL,
  LANGUAGES,
  PHONE,
  YOUR_HOST,
} from 'utils/default-strings';
import { Heading } from 'typography/Heading';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Paragraph } from 'typography/Paragraph';

import { Component as HostProfile } from './component';

const catImageUrl =
  'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max';
const name = 'Mitjons & Kira';
const description = 'We do love cats';

const email = 'welovecats@lodgify.com';
const phone = '+34932206524';
const languages = ['English', 'Italian', 'German', 'Spanish'];

const getHostProfile = props =>
  shallow(
    <HostProfile
      avatarUrl={catImageUrl}
      description={description}
      email={email}
      languages={languages}
      name={name}
      phone={phone}
      {...props}
    />
  );

const getGridRows = () => getHostProfile().find(GridRow);
const getGridRowAt = at => getGridRows().at(at);

describe('<HostProfile />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getHostProfile();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    it('should render `GridRows` components', () => {
      expect(getGridRows()).toHaveLength(3);
    });
  });

  describe('The first `GridRow`', () => {
    it('should render a `GridColumn`', () => {
      expectComponentToHaveChildren(getGridRowAt(0), GridColumn);
    });

    describe('The first `GridColumn`', () => {
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

    describe('The first `Heading`', () => {
      it('should render the right children', () => {
        const heading = getGridRowAt(0).find(Heading);

        expectComponentToHaveChildren(heading, YOUR_HOST);
      });
    });
  });

  describe('The second `GridRow`', () => {
    it('should render the right children', () => {
      expectComponentToHaveChildren(getGridRowAt(1), GridColumn);
    });

    describe('the first `GridColumn`', () => {
      const gridColumn = getGridRowAt(1).find(GridColumn);

      it('should render a `GridColumn` with the right props', () => {
        expectComponentToHaveProps(gridColumn, {
          width: 12,
        });
      });

      it('should render the right children', () => {
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

    describe('The `Item.Image`', () => {
      it('should be rendered with the right props', () => {
        expectComponentToHaveProps(itemGroup.find(Item.Image), {
          size: 'tiny',
          avatar: true,
          src: expect.any(String),
        });
      });
    });

    describe('The `Item.Header`', () => {
      const itemHeader = itemGroup.find(Item.Header);

      it('should be rendered with the right props', () => {
        expectComponentToHaveProps(itemHeader, {
          as: 'h4',
        });
      });

      it('should render the right children', () => {
        expectComponentToHaveChildren(itemHeader, name);
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

    it('should render the right children', () => {
      expectComponentToHaveChildren(getGridRowAt(2), GridColumn, GridColumn);
    });

    describe('the first `GridColumn`', () => {
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

    describe('the second `GridColumn`', () => {
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

    describe('the first `Paragraph`', () => {
      const firstParagraph = getGridRows()
        .find(Paragraph)
        .at(0);

      it('should render with the right props', () => {
        expectComponentToHaveProps(firstParagraph, {
          size: 'medium',
        });
      });

      it('should render the right children', () => {
        expectComponentToHaveChildren(firstParagraph, description);
      });
    });

    describe('the second `Heading`', () => {
      const secondHeading = getGridRows()
        .find(Heading)
        .at(1);

      it('should render with the right props', () => {
        expectComponentToHaveProps(secondHeading, {
          size: 'small',
        });
      });

      it('should render the right children', () => {
        expectComponentToHaveChildren(secondHeading, CONTACT_INFORMATION);
      });
    });

    describe('the first `List`', () => {
      const firstList = getGridRows()
        .find(List)
        .at(0);

      it('should render with the right props', () => {
        expectComponentToHaveProps(firstList, {
          relaxed: true,
          size: 'medium',
        });
      });

      it('should render the right children', () => {
        expectComponentToHaveChildren(
          firstList,
          List.Item,
          List.Item,
          List.Item
        );
      });
    });

    describe('the first `List.Item`', () => {
      const ListItem = getGridRows()
        .find(List.Item)
        .at(0);

      it('should render the right children', () => {
        expectComponentToHaveChildren(ListItem, 'span', 'span');
      });

      describe('the two inner `span`', () => {
        it('should render the right children', () => {
          const firstSpan = ListItem.find('span').at(0);
          const secondSpan = ListItem.find('span').at(1);

          expectComponentToHaveChildren(firstSpan, `${EMAIL}: `);
          expectComponentToHaveChildren(secondSpan, email);
        });
      });
    });

    describe('the second `List.Item`', () => {
      const ListItem = getGridRows()
        .find(List.Item)
        .at(1);

      it('should render the right children', () => {
        expectComponentToHaveChildren(ListItem, 'span', 'span');
      });

      describe('the two inner `span`', () => {
        it('should render the right children', () => {
          const firstSpan = ListItem.find('span').at(0);
          const secondSpan = ListItem.find('span').at(1);

          expectComponentToHaveChildren(firstSpan, `${PHONE}: `);
          expectComponentToHaveChildren(secondSpan, phone);
        });
      });
    });

    describe('the third `List.Item`', () => {
      const ListItem = getGridRows()
        .find(List.Item)
        .at(2);

      it('should render the right children', () => {
        expectComponentToHaveChildren(ListItem, 'span', 'span');
      });

      describe('the two inner `span`', () => {
        it('should render the right children', () => {
          const firstSpan = ListItem.find('span').at(0);
          const secondSpan = ListItem.find('span').at(1);

          expectComponentToHaveChildren(firstSpan, `${LANGUAGES}: `);
          expectComponentToHaveChildren(secondSpan, languages.join(', '));
        });
      });
    });
  });

  it('should have displayName `HostProfile`', () => {
    expectComponentToHaveDisplayName(HostProfile, 'HostProfile');
  });
});
