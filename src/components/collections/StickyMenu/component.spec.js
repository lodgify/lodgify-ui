import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as StickyMenu } from './component';
import { menuItems } from './mock-data/mock-data';

const testid = testidSelectorFactory('stickyMenu');
const getStickyHeader = () => mount(<StickyMenu stickyMenuItems={menuItems} />);
const location = '#availability';

document.body.innerHTML = `<div id="availability"></div>`;

let scrollIntoViewMock = jest.fn();

window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

act(() => {
  describe('`StickyMenu` component', () => {
    it('should return the right structure', () => {
      const wrapper = getStickyHeader();

      expect(wrapper.find(testid()).length).toEqual(1);
    });

    describe('Interaction: `Menu.Item` onClick', () => {
      it('should ', () => {
        const wrapper = getStickyHeader();

        const trigger = wrapper.find('MenuItem').at(0);

        trigger.simulate('click', location, {
          data: {
            name: location,
          },
        });
        wrapper.update();

        expect(global.location.href.includes(location)).toBe(true);
        expect(scrollIntoViewMock).toHaveBeenCalled();
      });
    });

    describe('Interaction: `arrow-left` onClick', () => {
      let wrapper = getStickyHeader();

      let trigger = wrapper.find(testid('arrow-left'));
      let menu = wrapper.find(testid('menu'));

      trigger.simulate('click');
      wrapper.update();

      expect(menu.getDOMNode().scrollLeft).toBe(-1000);
    });

    describe('Interaction: `arrow-right` onClick', () => {
      let wrapper = getStickyHeader();

      let trigger = wrapper.find(testid('arrow-right'));
      let menu = wrapper.find(testid('menu'));

      trigger.simulate('click');
      wrapper.update();

      expect(menu.getDOMNode().scrollLeft).toBe(1000);
    });
  });
});
