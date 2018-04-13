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

import { keyFacts } from './mock-data/keyFacts';
import { Component as KeyFacts } from './component';

const getKeyFacts = () => shallow(<KeyFacts keyFacts={keyFacts} />);
const getHeading = () => getKeyFacts().find(Heading);

describe('<KeyFacts />', () => {
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getKeyFacts();
    const actual = wrapper.is('div');
    expect(actual).toBe(true);
  });

  describe('the `div` element', () => {
    it('should render the right children', () => {
      const wrapper = getKeyFacts();
      expectComponentToHaveChildren(wrapper, Heading, Label.Group);
    });
  });

  describe('the `Heading` component', () => {
    it('should have the right props', () => {
      const wrapper = getHeading();
      expectComponentToHaveProps(wrapper, { size: 'tiny' });
    });

    it('should render the right children', () => {
      const wrapper = getHeading();
      expectComponentToHaveChildren(wrapper, 'Key facts');
    });
  });

  describe('the `Label.Group` component', () => {
    it('should render an `IconCard` for each item in `props.keyFacts`', () => {
      const wrapper = getKeyFacts().find(Label.Group);
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

  it('should have `displayName` `KeyFacts`', () => {
    const actual = KeyFacts.displayName;
    expect(actual).toBe('KeyFacts');
  });
});
