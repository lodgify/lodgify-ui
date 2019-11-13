import React from 'react';
import { mount } from 'enzyme';

import { HeaderLogo } from './HeaderLogo';

const mountHeaderLogo = props => mount(<HeaderLogo {...props} />);

describe('HeaderLogo', () => {
  describe('passing `logoSubText`', () => {
    it('should return a paragraph with the sub text', () => {
      const header = mountHeaderLogo({ logoSubText: 'foo' });

      expect(header).toMatchSnapshot();
    });
  });
  describe('passing `logoSrc`', () => {
    it('should return an image with the sub text', () => {
      const header = mountHeaderLogo({ logoSrc: 'foo' });

      expect(header).toMatchSnapshot();
    });
  });
});
