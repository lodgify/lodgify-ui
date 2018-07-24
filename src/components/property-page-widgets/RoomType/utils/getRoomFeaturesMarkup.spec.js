import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { List } from 'semantic-ui-react';

import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { Paragraph } from 'typography/Paragraph';
import { Icon } from 'elements/Icon';

import { getRoomFeaturesMarkup } from './getRoomFeaturesMarkup';

const features = [
  { iconName: 'double bed', labelText: '1 Bedroom' },
  { iconName: 'guests', labelText: '2 Guests' },
  { labelText: '1 Terrace' },
];

const getMarkup = (isUserOnMobile = false) =>
  shallow(<div>{getRoomFeaturesMarkup(isUserOnMobile, features)}</div>);

describe('`getRoomFeaturesMarkup`', () => {
  const getList = () => getMarkup().find(List);

  it('should return a single wrapping `div`', () => {
    const wrapper = getMarkup();

    expectComponentToBe(wrapper, 'div');
  });

  it('it should have the correct props', () => {
    const wrapper = getList();

    expectComponentToHaveProps(wrapper, {
      floated: 'left',
      horizontal: true,
    });
  });

  it('it should correctly return the correct children', () => {
    const wrapper = getList();

    expectComponentToHaveChildren(
      wrapper,
      ...getArrayOfLengthOfItem(features.length, List.Item)
    );
  });

  describe('each `List.Item`', () => {
    it('should have the right children', () => {
      const wrapper = getMarkup()
        .find(List.Item)
        .at(0);

      expectComponentToHaveChildren(wrapper, Icon);
    });
  });

  describe('each `Icon`', () => {
    it('should have the right props', () => {
      const wrapper = getMarkup()
        .find(Icon)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        labelText: features[0].labelText,
        name: features[0].iconName,
        size: 'small',
      });
    });
  });

  describe('if `showIcons === false`', () => {
    it('should render the right children', () => {
      const wrapper = getMarkup(true)
        .find(List.Item)
        .at(0);

      expectComponentToHaveChildren(wrapper, Paragraph);
    });
  });
});
