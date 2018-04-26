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
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';
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
        ...getArrayOfLengthOfItem(3, GridColumn)
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
    it('should render the right children', () => {
      const wrapper = getRules().find(Heading);
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
        computer: 3,
        tablet: 5,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();
      expectComponentToHaveChildren(wrapper, List);
    });
  });

  describe('the `List` component', () => {
    it('should have the right props', () => {
      const wrapper = getRules().find(List);
      expectComponentToHaveProps(wrapper, {
        items: expect.any(Array),
      });
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
        computer: 9,
        tablet: 7,
      });
    });

    it('should render the right children', () => {
      const wrapper = getThirdGridColumn();
      expectComponentToHaveChildren(wrapper, Icon, Divider, Icon);
    });
  });

  describe('the first `Icon` in the second `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getRules()
        .find(Icon)
        .at(0);
      expectComponentToHaveProps(wrapper, {
        label: expect.stringContaining('Check in:'),
        name: 'question mark',
      });
    });
  });

  describe('the second `Icon` in the second `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getRules()
        .find(Icon)
        .at(1);
      expectComponentToHaveProps(wrapper, {
        label: expect.stringContaining('Check out:'),
        name: 'question mark',
      });
    });
  });

  it('should have displayName `Rules`', () => {
    expectComponentToHaveDisplayName(Rules, 'Rules');
  });
});
