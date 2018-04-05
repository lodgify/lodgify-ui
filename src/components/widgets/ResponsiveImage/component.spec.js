import React from 'react';
import { shallow } from 'enzyme';
import { Image as SemanticImage, Label } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';

import { Component as ResponsiveImage } from './component';

const getResponsiveImage = props => shallow(<ResponsiveImage {...props} />);

describe('<ResponsiveImage />', () => {
  it('should render a single Lodgify UI `ResponsiveImage` component', () => {
    const image = getResponsiveImage();
    expect(image).toHaveLength(1);
  });

  describe('the `ResponsiveImage` component', () => {
    const props = {
      imageUrl: 'Dummy URL 🙄',
      sources: [],
      alternativeText: 'Alternative Text 😝',
      className: null,
      isFluid: true,
      onLoad: Function.prototype,
      imageTitle: 'ResponsiveImage title',
    };

    it('should have a <Label> when no imageUrl is provided', () => {
      const actual = getResponsiveImage().find(Label);
      expect(actual).toHaveLength(1);
    });

    it('should contain a Semantic UI <Image> with the right props', () => {
      const semanticImage = getResponsiveImage(props).find(SemanticImage);

      const actual = semanticImage.props();
      expect(actual).toEqual(
        expect.objectContaining({
          src: props.imageUrl,
          alt: props.alternativeText,
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
            '//si5.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=2400&mode=max',
          media: '(min-width: 1200px)',
        },
        {
          srcset:
            '//si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max',
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
