import React from 'react';
import { shallow } from 'enzyme';
import ReactPlayer from 'react-player';
import {
  expectComponentToBe,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Video } from './component';

const getVideo = (props = {}) => shallow(<Video {...props} />);

describe('<Video />', () => {
  it('should throw an error if nothing is provided', () => {
    expect(() => getVideo()).toThrow();
  });

  it('should render a single `div.video` element', () => {
    const wrapper = getVideo({ videoSource: '<iframe></iframe>' });

    expectComponentToBe(wrapper, 'div.video');
  });

  describe('the `Video` component', () => {
    it('should render a `div.video.is-url` element if an url is provided', () => {
      const props = { videoSource: 'https://lodgify.com' };
      const wrapper = getVideo(props);

      expectComponentToBe(wrapper, 'div.video.is-url.player-wrapper');
    });

    it('should have the right props', () => {
      const wrapper = getVideo({ videoSource: 'https://lodgify.com' });

      expectComponentToHaveProps(wrapper, {
        style: expect.any(Object),
      });
    });

    it('should render a `div.video.is-html` if an HTML snippet is provided', () => {
      const props = { videoSource: '<iframe></iframe>' };
      const wrapper = getVideo(props);

      expectComponentToBe(wrapper, 'div.video.is-html.player-wrapper');
    });

    it('should render a <ReactPlayer> if HTML is provided', () => {
      const props = { videoSource: 'https://lodgify.com' };
      const video = getVideo(props);

      expect(video.find(ReactPlayer)).toHaveLength(1);
    });

    it('should have a <ReactPlayer> with the right props', () => {
      const props = { videoSource: 'https://lodgify.com' };
      const video = getVideo(props);
      const videoProps = video.find(ReactPlayer).props();

      expect(videoProps).toEqual(
        expect.objectContaining({ url: props.videoSource })
      );
    });
  });

  describe('the responsive capabilities', () => {
    it('should correctly be responsive if the prop is set', () => {
      const props = [
        {
          videoSource: 'https://lodgify.com',
          isResponsive: true,
        },
        {
          videoSource: '<iframe></iframe>',
          isResponsive: true,
        },
      ];

      props.forEach(({ videoSource, isResponsive }) => {
        const wrapper = getVideo({ videoSource, isResponsive });

        expect(wrapper.find('.is-responsive')).toHaveLength(1);
      });
    });
  });
});
