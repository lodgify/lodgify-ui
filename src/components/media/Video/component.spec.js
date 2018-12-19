jest.mock('react-player', () => {
  const Component = props => <div {...props} />;

  Component.displayName = 'ReactPlayer';
  return Component;
});
jest.mock('./utils/logWarning');

import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { logWarning } from './utils/logWarning';
import { Component as Video } from './component';

const getVideo = props => mount(<Video {...props} />);

describe('<Video />', () => {
  describe('if `props.videoSource` is a valid URL', () => {
    it('should render the right structure', () => {
      const props = { videoSource: 'https://lodgify.com' };
      const actual = getVideo(props);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.videoSource` is valid HTML', () => {
    it('should render the right structure', () => {
      const props = { videoSource: '<iframe></iframe>' };
      const actual = getVideo(props);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.videoSource` is not a valid URL or valid HTML', () => {
    const props = { videoSource: undefined };

    it('should call `logWarning` with the right arguments', () => {
      getVideo(props);

      expect(logWarning).toHaveBeenCalledWith(null);
    });

    it('should render the right structure', () => {
      const actual = getVideo(props);

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.isResponsive` is `true`', () => {
    it('should render the right structure', () => {
      const props = { isResponsive: true };
      const actual = getVideo(props);

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have the right `displayName`', () => {
    expectComponentToHaveDisplayName(Video, 'Video');
  });
});
