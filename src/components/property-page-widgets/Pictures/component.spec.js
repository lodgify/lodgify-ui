import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';
import { act } from 'react-dom/test-utils';

import { testidSelectorFactory } from 'utils/testid';

import { images } from './mock-data/images';
import { Component as Pictures } from './component';

const testid = testidSelectorFactory('pictures');

const getPictures = () => shallow(<Pictures galleryImages={images} />);

describe('<Pictures />', () => {
  it('should render the correct structure', () => {
    const actual = getPictures();

    expect(actual).toMatchSnapshot();
  });

  describe('Thumbnail interaction: click', () => {
    it('should set the `Gallery.props.isOpen` to true', () => {
      act(() => {
        let wrapper = shallow(<Pictures galleryImages={images} />);

        let trigger = wrapper.find(testid('thumbnail_0'));

        let gallery = wrapper.find(testid('gallery')).props();

        trigger.props().onClick();
        wrapper.update();

        gallery = wrapper.find(testid('gallery')).props();

        expect(gallery.isOpen).toBe(true);
      });
    });
  });

  describe('Link interaction: click', () => {
    it('should set `Gallery.props.isOpen` true', () => {
      act(() => {
        let wrapper = shallow(<Pictures galleryImages={images} />);

        let trigger = wrapper.find(testid('gallery')).props().trigger.props;

        let gallery = wrapper.find(testid('gallery')).props();

        trigger.onClick();
        wrapper.update();

        gallery = wrapper.find(testid('gallery')).props();

        expect(gallery.isOpen).toBe(true);
      });
    });
  });

  describe('Gallery interaction: onClose', () => {
    it('should set `Gallery.props.isOpen`  to false', () => {
      act(() => {
        let wrapper = shallow(<Pictures galleryImages={images} />);

        let trigger = wrapper.find(testid('gallery')).props().trigger.props;

        let gallery = wrapper.find(testid('gallery')).props();

        trigger.onClick();
        wrapper.update();

        let closeTrigger = wrapper.find(testid('gallery')).props();

        closeTrigger.onClose();
        wrapper.update();

        gallery = wrapper.find(testid('gallery')).props();

        expect(gallery.isOpen).toBe(false);
      });
    });
  });

  it('should have `displayName` `Pictures`', () => {
    expectComponentToHaveDisplayName(Pictures, 'Pictures');
  });
});
