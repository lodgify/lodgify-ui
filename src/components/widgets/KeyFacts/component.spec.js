import React from 'react';
import { shallow } from 'enzyme';

import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { IconCard } from 'elements/IconCard';

import { keyFacts } from './mock-data/keyFacts';
import { Component as KeyFacts } from './component';

const getKeyFacts = () => shallow(<KeyFacts keyFacts={keyFacts} />);
const getGridColumn = () => getKeyFacts().find(GridColumn);
const getHeading = () => getKeyFacts().find(Heading);

describe('<KeyFacts />', () => {
  it('should render a single Lodgify UI `GridColumn` component', () => {
    const wrapper = getKeyFacts();
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
      expect(actual).toBe('Key facts');
    });
  });

  describe('the `Label.Group` component', () => {
    it('should render an `IconCard` for each item in `props.keyFacts`', () => {
      const wrapper = getKeyFacts().find('LabelGroup');
      const actual = wrapper.children(IconCard);
      expect(actual).toHaveLength(keyFacts.length);
    });
  });

  describe('each `IconCard` component', () => {
    it('should get the right props', () => {
      const wrapper = getKeyFacts()
        .find(IconCard)
        .first();
      const actual = wrapper.props();
      const { iconName, isDisabled, label } = keyFacts[0];
      expect(actual).toEqual(
        expect.objectContaining({
          isDisabled: !!isDisabled,
          isFilled: true,
          label: label,
          name: iconName,
        })
      );
    });
  });

  it('should have `displayName` `KeyFacts`', () => {
    const actual = KeyFacts.displayName;
    expect(actual).toBe('KeyFacts');
  });
});
