import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { List } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';
import { Icon } from 'elements/Icon';

import { getRoomFeaturesMarkup, getRoomInfo } from './getRoomFeaturesMarkup';

const props = {
  bathroomsNumber: 1,
  bedsNumber: 1,
  guestsNumber: 1,
};

const getRoomFeatureInstance = (isUserOnMobile = false) =>
  shallow(
    <div>
      {getRoomFeaturesMarkup({
        isUserOnMobile,
        ...props,
      })}
    </div>
  ).find(List);

describe('`getRoomFeaturesMarkup`', () => {
  it('it should have the correct props', () => {
    const wrapper = getRoomFeatureInstance();

    expectComponentToHaveProps(wrapper, {
      floated: 'left',
      horizontal: true,
    });
  });

  it('it should correctly return the correct children', () => {
    const wrapper = getRoomFeatureInstance();

    expectComponentToHaveChildren(wrapper, List.Item, List.Item, List.Item);
  });

  getRoomInfo({
    ...props,
  }).forEach((item, index) => {
    describe('`List.Item` at index ' + index, () => {
      it('should have the right children', () => {
        const wrapper = getRoomFeatureInstance()
          .find(List.Item)
          .at(index);

        expectComponentToHaveChildren(wrapper, Icon);
      });
    });

    describe('`Icon` at index ' + index, () => {
      it('should have the right props', () => {
        const wrapper = getRoomFeatureInstance()
          .find(Icon)
          .at(index);

        expectComponentToHaveProps(wrapper, {
          label: item.name,
          name: item.icon,
          size: 'small',
        });
      });
    });

    describe(
      '`Icon` at index should be hidden on mobile devices' + index,
      () => {
        it('should have the right props', () => {
          const wrapper = getRoomFeatureInstance(true)
            .find(List.Item)
            .at(index);
          expectComponentToHaveChildren(wrapper, Paragraph);
        });
      }
    );
  });
});
