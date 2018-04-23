import React from 'react';
import { shallow } from 'enzyme';

import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from 'lib/expect-helpers';
import { getArrayOfLengthOfItem } from 'lib/get-array-of-length-of-item';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';

import { keyFacts } from './mock-data/keyFacts';
import { Component as KeyFacts } from './component';

const getKeyFacts = () => shallow(<KeyFacts keyFacts={keyFacts} />);

describe('<KeyFacts />', () => {
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getKeyFacts();
    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getKeyFacts();
      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the `Heading` component', () => {
    it('should render the right children', () => {
      const wrapper = getKeyFacts().find(Heading);
      expectComponentToHaveChildren(wrapper, 'Key facts');
    });
  });

  describe('the inner `GridColumn` components', () => {
    const getInnerColumn = () =>
      getKeyFacts()
        .find(Grid)
        .at(1)
        .find(GridColumn)
        .at(0);

    it('should render with the right props', () => {
      const wrapper = getInnerColumn();

      wrapper.children().forEach((element, index) =>
        expectComponentToHaveProps(wrapper.at(index), {
          computer: 2,
          tablet: 3,
          mobile: 4,
          streched: true,
        })
      );
    });

    it('should render an `IconCard` for each item in `props.keyFacts`', () => {
      const wrapper = getInnerColumn();

      wrapper
        .children()
        .forEach((element, index) =>
          expectComponentToHaveChildren(
            wrapper.at(index),
            ...getArrayOfLengthOfItem(1, IconCard)
          )
        );
    });
  });

  describe('each `IconCard` component', () => {
    it('should get the right props', () => {
      const wrapper = getKeyFacts()
        .find(IconCard)
        .first();
      const { iconName, isDisabled, label } = keyFacts[0];
      expectComponentToHaveProps(wrapper, {
        isDisabled: !!isDisabled,
        isFilled: true,
        label: label,
        name: iconName,
      });
    });
  });

  it('should have displayName `KeyFacts`', () => {
    expectComponentToHaveDisplayName(KeyFacts, 'KeyFacts');
  });
});
