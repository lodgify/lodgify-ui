import React from 'react';
import { shallow } from 'enzyme';
import { Image as SemanticImage, Label } from 'semantic-ui-react';

import { Paragraph } from 'typography/Paragraph';

import { Component as Thumbnail } from './component';

const getThumbnail = props => shallow(<Thumbnail {...props} />);

describe('<Thumbnail />', () => {
  it('should render a single Lodgify UI `Thumbnail` component', () => {
    const image = getThumbnail();
    expect(image).toHaveLength(1);
  });

  describe('the `Thumbnail` component', () => {
    const props = {
      imageUrl: 'Dummy URL 🙄',
      sources: [],
      alternativeText: 'Alternative Text 😝',
      className: null,
      isCircular: false,
      isFluid: true,
      onLoad: Function.prototype,
      imageTitle: 'Thumbnail title',
    };

    it('should have a <Label> when no imageUrl is provided', () => {
      const actual = getThumbnail().find(Label);
      expect(actual).toHaveLength(1);
    });

    it('should contain a Semantic UI <Image> with the right props', () => {
      const semanticImage = getThumbnail(props).find(SemanticImage);

      const actual = semanticImage.props();
      expect(actual).toEqual(
        expect.objectContaining({
          src: props.imageUrl,
          alt: props.alternativeText,
          circular: props.isCircular,
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
      const sources = getThumbnail(props).find('source');

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
      const actual = getThumbnail({ ...props, sources }).find('source');

      expect(actual).toHaveLength(2);
    });
  });

  it('should render a single Lodgify UI `Paragraph` component when passed a label prop', () => {
    const label = '🔷';
    const wrapper = getThumbnail({ label });
    const actual = wrapper.find(Paragraph);
    expect(actual).toHaveLength(1);
  });

  describe('the `Paragraph` component', () => {
    it('should get `props.label` as its children', () => {
      const label = '🔷';
      const wrapper = getThumbnail({ label });
      const actual = wrapper.find(Paragraph).prop('children');
      expect(actual).toBe(label);
    });
  });
});
