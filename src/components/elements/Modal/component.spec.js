import React from 'react';
import { shallow } from 'enzyme';
import { Modal as SemanticModal } from 'semantic-ui-react';
import {
  expectComponentToBe,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import { Icon } from 'elements/Icon';

import { Component as Modal } from './component';

const trigger = 'someTrigger';
const content = 'someContent';

const getModal = () => shallow(<Modal trigger={trigger}>{content}</Modal>);

describe('<Modal />', () => {
  it('should render a single Semantic UI `Modal` component', () => {
    const wrapper = getModal();
    expectComponentToBe(wrapper, SemanticModal);
  });

  describe('the Semantic UI `Modal` component', () => {
    it('should get the right props', () => {
      const wrapper = getModal();
      expectComponentToHaveProps(wrapper, {
        closeIcon: <Icon name="close" />,
        content,
        dimmer: 'inverted',
        size: 'tiny',
        trigger,
      });
    });
  });

  it('should have `displayName` Modal', () => {
    expectComponentToHaveDisplayName(Modal, 'Modal');
  });
});
