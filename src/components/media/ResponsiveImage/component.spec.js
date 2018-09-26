import React from 'react';
import { shallow } from 'enzyme';
import { Image as SemanticImage, Label } from 'semantic-ui-react';
import { expectComponentToBe } from '@lodgify/enzyme-jest-expect-helpers';

import { Paragraph } from 'typography/Paragraph';
import { IMAGE_NOT_FOUND } from 'utils/default-strings';

import { expectComponentToHaveProps } from '../../../../node_modules/@lodgify/enzyme-jest-expect-helpers/lib/expectComponentToHaveProps';

import { Component as ResponsiveImage } from './component';

const getResponsiveImage = props => shallow(<ResponsiveImage {...props} />);

describe('<ResponsiveImage />', () => {
  it('should have `picture` component as a wrapper', () => {
    const wrapper = getResponsiveImage();

    expectComponentToBe(wrapper, 'picture');
  });

  describe('the `ResponsiveImage` component', () => {
    const props = {
      imageUrl: 'Dummy URL 🙄',
      sources: [],
      alternativeText: 'Alternative Text 😝',
      className: null,
      isAvatar: false,
      isFluid: true,
      onLoad: Function.prototype,
      imageTitle: 'ResponsiveImage title',
    };

    it('should have a <Label> when no imageUrl is provided', () => {
      const actual = getResponsiveImage().find(Label);

      expect(actual).toHaveLength(1);
    });

    describe('the `Label`', () => {
      const getLabel = props => getResponsiveImage(props).find(Label);

      it('should have the right props', () => {
        const wrapper = getLabel();

        expectComponentToHaveProps(wrapper, { content: IMAGE_NOT_FOUND });
      });

      describe('if `props.imageNotFoundLabelText` is passed', () => {
        it('should have the right props', () => {
          const wrapper = getLabel({ imageNotFoundLabelText: 'ayyy' });

          expectComponentToHaveProps(wrapper, { content: 'ayyy' });
        });
      });
    });

    it('should contain a Semantic UI <Image> with the right props', () => {
      const semanticImage = getResponsiveImage(props).find(SemanticImage);

      const actual = semanticImage.props();

      expect(actual).toEqual(
        expect.objectContaining({
          src: props.imageUrl,
          alt: props.alternativeText,
          avatar: props.isAvatar,
          className: String.prototype,
          fluid: props.isFluid,
          onLoad: props.onLoad,
          title: props.imageTitle,
          as: 'img',
          ui: true,
        })
      );
    });

    it('should not have any <source> when no imageUrl is provided', () => {
      const sources = getResponsiveImage(props).find('source');

      expect(sources).toHaveLength(0);
    });

    it('should have defined the right <source>s when provided', () => {
      const sources = [
        {
          srcset:
            'https://si5.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=2400&mode=max',
          media: '(min-width: 1200px)',
        },
        {
          srcset:
            'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max',
          media: '(min-width: 1024px)',
        },
      ];
      const actual = getResponsiveImage({ ...props, sources }).find('source');

      expect(actual).toHaveLength(2);
    });
  });

  it('should render a single Lodgify UI `Paragraph` component when passed a label prop', () => {
    const label = '🔷';
    const wrapper = getResponsiveImage({ label });
    const actual = wrapper.find(Paragraph);

    expect(actual).toHaveLength(1);
  });

  describe('the `Paragraph` component', () => {
    it('should get `props.label` as its children', () => {
      const label = '🔷';
      const wrapper = getResponsiveImage({ label });
      const actual = wrapper.find(Paragraph).prop('children');

      expect(actual).toBe(label);
    });
  });
});
