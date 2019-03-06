import React from 'react';
import { shallow } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as Modal } from './component';

const trigger = 'someTrigger';
const content = 'someContent';

const getModal = props =>
  shallow(
    <Modal trigger={trigger} {...props}>
      {content}
    </Modal>
  );

describe('<Modal />', () => {
  it('render the right structure', () => {
    const actual = getModal();

    expect(actual).toMatchSnapshot();
  });

  describe('if `props.isFullscreen` is `true`', () => {
    it('render the right structure', () => {
      const actual = getModal({ isFullscreen: true });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.size` is `small`', () => {
    it('render the right structure', () => {
      const actual = getModal({ size: 'small' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.header` is passed', () => {
    it('should get the right props', () => {
      const actual = getModal({ header: 'yo' });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have `displayName` Modal', () => {
    expectComponentToHaveDisplayName(Modal, 'Modal');
  });
});
