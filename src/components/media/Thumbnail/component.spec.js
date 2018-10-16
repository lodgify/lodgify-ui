import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { getBackgroundImageUrl } from 'utils/get-background-image-url';
import { Paragraph } from 'typography/Paragraph';

import { Component as Thumbnail } from './component';

const props = {
  imageUrl: 'www.⚡️.net',
  className: '🚥',
};

const getThumbnail = extraProps =>
  shallow(<Thumbnail {...props} {...extraProps} />);

describe('<Thumbnail />', () => {
  it('should render a single Lodgify UI `div` element', () => {
    const wrapper = getThumbnail();

    expectComponentToBe(wrapper, 'div');
  });

  it('should have the right `ui thumbnail` classNames', () => {
    const wrapper = getThumbnail();

    expectComponentToHaveProps(wrapper, {
      className: 'ui thumbnail 🚥',
    });
  });

  it('should render a single `div`', () => {
    const wrapper = getThumbnail();

    expectComponentToHaveChildren(wrapper, 'div');
  });

  describe('the second `div` element', () => {
    const getSecondDiv = () =>
      getThumbnail()
        .find('div')
        .at(1);

    it('should have the right props', () => {
      const wrapper = getSecondDiv();

      expectComponentToHaveProps(wrapper, {
        className: 'ui image',
        style: {
          backgroundImage: getBackgroundImageUrl(props.imageUrl),
        },
      });
    });

    describe('if `props.isCircular` is true', () => {
      const getSecondDivWithIsCircularProp = () =>
        getThumbnail({ isCircular: true })
          .find('div')
          .at(1);

      it('should have the right classNames', () => {
        const wrapper = getSecondDivWithIsCircularProp();

        expectComponentToHaveProps(wrapper, {
          className: 'ui image circular',
        });
      });
    });

    describe('if `props.isSquare` is true', () => {
      const getSecondDivWithIsSquareProp = () =>
        getThumbnail({ isSquare: true })
          .find('div')
          .at(1);

      it('should have the right classNames', () => {
        const wrapper = getSecondDivWithIsSquareProp();

        expectComponentToHaveProps(wrapper, {
          className: 'ui image square',
        });
      });
    });

    describe('if `props.hasRoundedCorners` is true', () => {
      const getSecondDivWithIsSquareProp = () =>
        getThumbnail({ hasRoundedCorners: true })
          .find('div')
          .at(1);

      it('should have the right classNames', () => {
        const wrapper = getSecondDivWithIsSquareProp();

        expectComponentToHaveProps(wrapper, {
          className: 'ui image rounded',
        });
      });
    });

    describe('if `props.size` is supplied', () => {
      const getSecondDivWithSizeProp = () =>
        getThumbnail({ size: 'small' })
          .find('div')
          .at(1);

      it('should have the right classNames', () => {
        const wrapper = getSecondDivWithSizeProp();

        expectComponentToHaveProps(wrapper, {
          className: 'ui image small',
        });
      });
    });

    it('should have the right children', () => {
      const wrapper = getSecondDiv();

      expectComponentToHaveChildren(wrapper, 'span');
    });
  });

  describe('the only `span`', () => {
    const getFirstSpan = () => getThumbnail().find('span');

    it('should have the right props', () => {
      const wrapper = getFirstSpan();

      expectComponentToHaveProps(wrapper, {
        role: 'img',
      });
    });

    describe('if `props.alternativeText` is informed', () => {
      const getFirstSpanWithPropAlternativeText = () =>
        getThumbnail({ alternativeText: 'lightning' }).find('span');

      it('should have the right `props`', () => {
        const wrapper = getFirstSpanWithPropAlternativeText();

        expectComponentToHaveProps(wrapper, {
          'aria-label': 'lightning',
        });
      });
    });
  });

  describe('if `props.Label` is informed', () => {
    it('should render the right children', () => {
      const wrapper = getThumbnail({ label: 'Hello' });

      expectComponentToHaveChildren(wrapper, 'div', Paragraph);
    });
  });

  it('should have the displayName `Thumbnail`', () => {
    expectComponentToHaveDisplayName(Thumbnail, 'Thumbnail');
  });
});
