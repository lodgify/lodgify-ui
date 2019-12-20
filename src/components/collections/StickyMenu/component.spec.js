import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import { testidSelectorFactory } from 'utils/testid';

import { Component as StickyMenu } from './component';
import { menuItems } from './mock-data/mock-data';

const testid = testidSelectorFactory('stickyMenu');
const getStickyHeader = (items = menuItems) =>
  mount(<StickyMenu stickyMenuItems={items} />);
const link = '#availability';

document.body.innerHTML = `<div id="availability"></div>`;

let scrollIntoViewMock = jest.fn();

window.HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;

act(() => {
  describe('`StickyMenu` component', () => {
    it('should return the right structure', () => {
      const wrapper = getStickyHeader();

      expect(wrapper.find(testid()).length).toEqual(1);
    });

    describe('when no stickyMenuItems are passed', () => {
      const wrapper = getStickyHeader([]);

      it(`should't have any active item`, () => {
        expect(wrapper.find('a.active').length).toBe(0);
      });
    });

    describe('Interaction: `Menu.Item` onClick', () => {
      it('should ', () => {
        const wrapper = getStickyHeader();

        const trigger = wrapper.find('MenuItem').at(0);

        trigger.simulate('click', link, {
          data: {
            name: link,
          },
        });
        wrapper.update();

        expect(global.location.href.includes(link)).toBe(true);
        expect(scrollIntoViewMock).toHaveBeenCalled();
      });
    });
  });
});
