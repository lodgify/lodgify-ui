import React from 'react';
import { shallow } from 'enzyme';
import { Image as SemanticImage, Label } from 'semantic-ui-react';

import { Component as Image } from './component';
import { LEGACY_CLASSNAME } from './constants';

describe('<Image />', () => {
  it('should render a single Lodgify UI `Image` component', () => {
    const image = shallow(<Image />);
    expect(image).toHaveLength(1);
  });

  describe('the `Image` component', () => {
    const props = {
      imageUrl: 'Dummy URL 🙄',
      sources: [],
      alternativeText: 'Alternative Text 😝',
      className: null,
      isFluid: true,
      onLoad: Function.prototype,
      imageTitle: 'Image title',
    };

    it('should have a <Label> when no imageUrl is provided', () => {
      const actual = shallow(<Image />).find(Label);
      expect(actual).toHaveLength(1);
    });

    it('should contain a Semantic UI <Image> with the right props', () => {
      const semanticImage = shallow(<Image {...props} />).find(SemanticImage);

      const actual = semanticImage.props();
      expect(actual).toEqual(
        expect.objectContaining({
          src: props.imageUrl,
          alt: props.alternativeText,
          className: LEGACY_CLASSNAME,
          fluid: props.isFluid,
          onLoad: props.onLoad,
          title: props.imageTitle,
          as: 'img',
          ui: true,
        })
      );
    });

    it('should not have any <source> when no imageUrl is provided', () => {
      const sources = shallow(<Image {...props} />).find('source');

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
      const actual = shallow(<Image {...props} sources={sources} />).find(
        'source'
      );

      expect(actual).toHaveLength(2);
    });
  });
});
