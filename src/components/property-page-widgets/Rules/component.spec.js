import React from 'react';
import { shallow } from 'enzyme';
import { List } from 'semantic-ui-react';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from 'lib/expect-helpers';
import { getArrayOfLengthOfItem } from 'lib/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'lib/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { Icon } from 'elements/Icon';

import { Component as Rules } from './component';

const checkInTime = '09.00 PM';
const checkOutTime = '12.00 AM';
const rules = [
  'Smoking not allowed',
  'No parties or events',
  'Pets are allowed',
];

const props = {
  checkInTime,
  checkOutTime,
  rules,
};

const getRules = otherProps => shallow(<Rules {...props} {...otherProps} />);

describe('<Rules />', () => {
  it('should render a single Lodgify UI `Grid` component', () => {
    const wrapper = getRules();
    expectComponentToBe(wrapper, Grid);
  });

  it('should have the right props', () => {
    const wrapper = getRules();
    expectComponentToHaveProps(wrapper, {
      stackable: true,
    });
  });

  describe('the first `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getRules();
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(4, GridColumn)
      );
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getRules()
        .find(GridColumn)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFirstGridColumn();
      expectComponentToHaveChildren(wrapper, Heading);
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getRules().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();
      expectComponentToHaveProps(wrapper, {
        size: 'small',
      });
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      expectComponentToHaveChildren(wrapper, 'House Rules');
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getRules()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 3,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, List);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getRules()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 3,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, List);
    });

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn().find(List);
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          items: getParagraphsFromStrings(rules.join('\n')),
        })
      );
    });
  });

  describe('the third `GridColumn` component', () => {
    const getThirdGridColumn = () =>
      getRules()
        .find(GridColumn)
        .at(2);

    it('should have the right props', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 2,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  describe('the second `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getRules()
        .find(Grid)
        .at(1);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(2, GridColumn)
      );
    });
  });

  describe('each `GridColumn` in the second `Grid` component', () => {
    const getGridColumnInSecondGrid = () =>
      getRules()
        .find(Grid)
        .at(1)
        .children(GridColumn)
        .first();

    it('should have the right props', () => {
      const wrapper = getGridColumnInSecondGrid();
      expectComponentToHaveProps(wrapper, {
        width: 3,
      });
    });

    it('should render the right children', () => {
      const wrapper = getGridColumnInSecondGrid();
      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each `Icon` in the second `Grid` component', () => {
    const getIconCardInSecondGrid = () =>
      getRules()
        .find(Grid)
        .at(1)
        .find(Icon)
        .first();

    it('should have the right props', () => {
      const wrapper = getIconCardInSecondGrid();
      expectComponentToHaveProps(wrapper, {
        name: expect.any(String),
      });
    });
  });

  describe('the fourth `GridColumn` component', () => {
    const getFourthGridColumn = () =>
      getRules()
        .find(GridColumn)
        .at(5);

    it('should have the right props', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveProps(wrapper, {
        width: 2,
      });
    });

    it('should render the right children', () => {
      const wrapper = getFourthGridColumn();
      expectComponentToHaveChildren(wrapper, Grid);
    });
  });

  it('should have displayName `Rules`', () => {
    expectComponentToHaveDisplayName(Rules, 'Rules');
  });
});
