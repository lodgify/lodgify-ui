import React from 'react';
import { shallow } from 'enzyme';

import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

import { sleepingArrangements } from './mock-data/sleepingArrangements';
import { Component as SleepingArrangements } from './component';

const getSleepingArrangements = () =>
  shallow(<SleepingArrangements sleepingArrangements={sleepingArrangements} />);
const getGridColumn = () => getSleepingArrangements().find(GridColumn);
const getHeading = () => getSleepingArrangements().find(Heading);

describe('<SleepingArrangements />', () => {
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getSleepingArrangements();
    const actual = wrapper.find(GridColumn);
    expect(actual).toHaveLength(1);
  });

  describe('the `GridColumn` component', () => {
    it('should have the right props', () => {
      const wrapper = getGridColumn();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          width: 12,
        })
      );
    });

    it('should render the right children', () => {
      const children = ['Heading', 'LabelGroup'];
      const wrapper = getGridColumn();
      children.forEach((child, index) => {
        const actual = wrapper.childAt(index).name();
        expect(actual).toBe(child);
      });
    });
  });

  describe('the `Heading` component', () => {
    it('should have the right props', () => {
      const wrapper = getHeading();
      const actual = wrapper.props();
      expect(actual).toEqual(
        expect.objectContaining({
          size: 'tiny',
        })
      );
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      const actual = wrapper.prop('children');
      expect(actual).toBe('Sleeping arrangements');
    });
  });

  describe('the `Label.Group` component', () => {
    it('should render an `IconCard` for each item in `props.sleepingArrangements`', () => {
      const wrapper = getSleepingArrangements().find('LabelGroup');
      const actual = wrapper.children(IconCard);
      expect(actual).toHaveLength(sleepingArrangements.length);
    });
  });

  describe('each `IconCard` component', () => {
    it('should get the right props', () => {
      const wrapper = getSleepingArrangements()
        .find(IconCard)
        .first();
      const actual = wrapper.props();
      const { iconName, label } = sleepingArrangements[0];
      expect(actual).toEqual(
        expect.objectContaining({
          isLeftAligned: true,
          label: label,
          name: iconName,
        })
      );
    });
  });

  it('should have `displayName` `SleepingArrangements`', () => {
    const actual = SleepingArrangements.displayName;
    expect(actual).toBe('SleepingArrangements');
  });
});
