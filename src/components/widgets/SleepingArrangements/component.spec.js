import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'semantic-ui-react';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from 'lib/expect-helpers';
import { getArrayOfLengthOfItem } from 'lib/get-array-of-length-of-item';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

import { sleepingArrangements } from './mock-data/sleepingArrangements';
import { Component as SleepingArrangements } from './component';

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
      expectComponentToHaveChildren(wrapper, Heading, Label.Group);
    });
  });

  describe('the `Heading` component', () => {
    const getHeading = () => getSleepingArrangements().find(Heading);

    it('should have the right props', () => {
      const wrapper = getHeading();
      expectComponentToHaveProps(wrapper, {
        size: 'tiny',
      });
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      expectComponentToHaveChildren(wrapper, 'Sleeping arrangements');
    });
  });

  describe('the `Label.Group` component', () => {
    it('should render an `IconCard` for each item in `props.sleepingArrangements`', () => {
      const wrapper = getSleepingArrangements().find('LabelGroup');
      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(sleepingArrangements.length, IconCard)
      );
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
    const actual = SleepingArrangements.displayName;
    expect(actual).toBe('SleepingArrangements');
  });
});
