import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { SLEEPING_ARRANGEMENTS } from 'utils/default-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';
import { VerticalGutters } from 'layout/VerticalGutters';

import { Component as SleepingArrangements } from './component';

const sleepingArrangements = [
  { iconName: 'bed', label: '1 king bed' },
  { iconName: 'bed', label: '2 single beds' },
  { iconName: 'paw', label: '1 kennel' },
];

const getSleepingArrangements = () =>
  shallow(<SleepingArrangements sleepingArrangements={sleepingArrangements} />);

describe('<SleepingArrangements />', () => {
  it('should have `VerticalGutters` component as a wrapper', () => {
    const wrapper = getSleepingArrangements();

    expectComponentToBe(wrapper, VerticalGutters);
  });

  describe('the `VerticalGutters` component', () => {
    it('should have the right children', () => {
      const wrapper = getSleepingArrangements();

      expectComponentToHaveChildren(wrapper, Heading, Grid);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getSleepingArrangements().find(Heading);

      expectComponentToHaveChildren(wrapper, SLEEPING_ARRANGEMENTS);
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
