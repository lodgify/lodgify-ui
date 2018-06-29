import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

import { Component as SleepingArrangements } from './component';

const sleepingArrangements = [
  { iconName: 'bed', label: '1 king bed' },
  { iconName: 'bed', label: '2 single beds' },
  { iconName: 'paw', label: '1 kennel' },
];

const getSleepingArrangements = () =>
  shallow(<SleepingArrangements sleepingArrangements={sleepingArrangements} />);

describe('<SleepingArrangements />', () => {
  it('should render a single `div` element', () => {
    const wrapper = getSleepingArrangements();
    const actual = wrapper.is('div');
    expect(actual).toBe(true);
  });

  describe('the `div` element', () => {
    it('should render the right children', () => {
      const wrapper = getSleepingArrangements();
      expectComponentToHaveChildren(wrapper, Heading, Grid);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getSleepingArrangements().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Sleeping arrangements');
    });
  });

  describe('the `Grid` component', () => {
    it('should render an `IconCard` for each item in `props.sleepingArrangements`', () => {
      const wrapper = getSleepingArrangements().find(GridColumn);
      wrapper.forEach((element, index) => {
        expectComponentToHaveChildren(wrapper.at(index), IconCard);
      });
    });
  });

  describe('each `IconCard` component', () => {
    it('should get the right props', () => {
      const wrapper = getSleepingArrangements()
        .find(IconCard)
        .first();
      const { iconName, label } = sleepingArrangements[0];
      expectComponentToHaveProps(wrapper, {
        isLeftAligned: true,
        label: label,
        name: iconName,
      });
    });
  });

  it('should have `displayName` `SleepingArrangements`', () => {
    expectComponentToHaveDisplayName(
      SleepingArrangements,
      'SleepingArrangements'
    );
  });
});
