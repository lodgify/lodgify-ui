import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { testidSelectorFactory } from 'utils/testid';

import { Component } from './component';
import { subItems as mockedItems } from './mock/items';

const testid = testidSelectorFactory('horizontalMenu');

const getComponent = (items, otherProps = {}) =>
  mount(<Component items={items} {...otherProps} />);

act(() => {
  describe(`'HorizontalMenu' component`, () => {
    describe('when is mounted with a list of item', () => {
      const mounted = getComponent(mockedItems);

      it('should mount properly', () => {
        expect(mounted.find(testid()).length).toEqual(1);
      });
      it('should mount the same amount of item in the menu', () => {
        expect(
          mounted.find(testid(`menu-item-${mockedItems.length - 1}`)).length > 0
        ).toBe(true);
      });
    });
    describe('when is mounted with an empty list', () => {
      const mounted = getComponent();

      it('should mount properly', () => {
        expect(mounted.find(testid()).length).toEqual(1);
      });
      it("shouldn't mount any item", () => {
        expect(mounted.find(testid(`menu-item`, '*')).length).toEqual(0);
      });
    });

    describe('Interaction: `arrow-right` onClick', () => {
      let mounted = getComponent(mockedItems);

      let trigger = mounted.find(testid('arrow-right'));
      let menu = mounted.find(testid('menu-wrapper'));

      trigger.simulate('click');
      mounted.update();
      const domMenu = menu.getDOMNode();
      const maxScroll = domMenu.scrollWidth - domMenu.clientWidth;

      expect(menu.getDOMNode().scrollLeft).toBe(maxScroll);
    });

    describe('Interaction: `arrow-left` onClick', () => {
      let mounted = getComponent(mockedItems);

      let trigger = mounted.find(testid('arrow-left'));
      let menu = mounted.find(testid('menu-wrapper'));

      trigger.simulate('click');
      mounted.update();

      expect(menu.getDOMNode().scrollLeft).toBe(0);
    });

    describe('when onItemClick is passed', () => {
      let clickedItem;
      const onItemClick = item => {
        clickedItem = item;
      };
      const mounted = getComponent(mockedItems, { onItemClick });

      it('should trigger the passed function when an item is clicked', () => {
        const item = mounted.find(testid(`menu-item-0`)).first();

        item.simulate('click');

        expect(clickedItem).toMatchObject(mockedItems[0]);
      });
    });
  });
});
