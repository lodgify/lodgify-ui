import React from 'react';
import { shallow } from 'enzyme';
import ReactPlayer from 'react-player';

import { Component as Video } from './component';

const getVideo = (props = {}) => <Video {...props} />;

describe('<Video />', () => {
  it('should render nothing if nothing is provided', () => {
    const video = shallow(getVideo());
    const actual = video.find('div');
    expect(actual).toHaveLength(0);
  });

  it('should render a single `div` children component', () => {
    const video = shallow(getVideo({ videoSource: '<iframe></iframe>' }));
    const actual = video.find('div');
    expect(actual).toHaveLength(1);
  });

  describe('the `Video` component', () => {
    it('should render a div.is-url if an url is provided', () => {
      const props = { isUrl: true, videoSource: 'https://lodgify.com' };
      const video = shallow(getVideo(props));

      expect(video.find('.video.is-url')).toHaveLength(1);
    });

    it('should render a div.is-html if an HTML snippet is provided', () => {
      const props = { isUrl: true, videoSource: '<iframe></iframe>' };
      const video = shallow(getVideo(props));

      expect(video.find('.video.is-html')).toHaveLength(1);
    });

    it('should have the right props', () => {
      const video = shallow(getVideo());
      const videoProps = video.props();

      expect(videoProps).toEqual({});
    });

    it('should render a <ReactPlayer> if HTML is provided', () => {
      const props = { isUrl: true, videoSource: 'https://lodgify.com' };
      const video = shallow(getVideo(props));
      expect(video.find(ReactPlayer)).toHaveLength(1);
    });

    it('should have a <ReactPlayer> with the right props', () => {
      const props = { isUrl: true, videoSource: 'https://lodgify.com' };
      const video = shallow(getVideo(props));
      const videoProps = video.find(ReactPlayer).props();

      expect(videoProps).toEqual(
        expect.objectContaining({ url: props.videoSource })
      );
    });
  });
});
