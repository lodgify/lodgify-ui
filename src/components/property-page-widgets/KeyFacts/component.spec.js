import React from 'react';
import { shallow } from 'enzyme';
import { Label } from 'semantic-ui-react';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
  expectComponentToHaveDisplayName,
  expectComponentToBe,
} from '@lodgify/enzyme-jest-expect-helpers';

import { KEY_FACTS } from 'utils/default-strings';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';

import { keyFacts } from './mock-data/keyFacts';
import { Component as KeyFacts } from './component';

const getKeyFacts = () => shallow(<KeyFacts keyFacts={keyFacts} />);

describe('<KeyFacts />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getKeyFacts();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the `Grid` component', () => {
    it('should render the right children', () => {
      const wrapper = getKeyFacts().find(Grid);

      expectComponentToHaveChildren(wrapper, GridColumn, GridColumn);
    });
  });

  describe('the first `GridColumn` component', () => {
    const getFirstGridColumn = () =>
      getKeyFacts()
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
      const wrapper = getKeyFacts().find(Heading);

      expectComponentToHaveChildren(wrapper, KEY_FACTS);
    });
  });

  describe('the second `GridColumn` component', () => {
    const getSecondGridColumn = () =>
      getKeyFacts()
        .find(GridColumn)
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveProps(wrapper, {
        width: 12,
      });
    });

    it('should render the right children', () => {
      const wrapper = getSecondGridColumn();

      expectComponentToHaveChildren(wrapper, Label.Group);
    });
  });

  describe('the `Label.Group` components', () => {
    const getLabelGroup = () =>
      getKeyFacts()
        .find(Label.Group)
        .at(0);

    it('should render an `IconCard` for each item in `props.keyFacts`', () => {
      const wrapper = getLabelGroup();

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(keyFacts.length, IconCard)
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
