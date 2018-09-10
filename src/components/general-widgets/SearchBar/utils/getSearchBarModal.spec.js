import React from 'react';
import { shallow } from 'enzyme';
import {
  expectComponentToHaveChildren,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';
import { Modal as SemanticModal, Form } from 'semantic-ui-react';
import { expectComponentToBe } from '@lodgify/enzyme-jest-expect-helpers/lib/expectComponentToBe';

import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getSearchBarModal } from './getSearchBarModal';

const modalTrigger = <div />;
const mobileSummaryElement = null;
const handleSubmit = () => {};
const persistInputChange = () => {};
const props = {};

const getModalMarkup = (alternativeProps = {}) =>
  shallow(
    <div>
      {getSearchBarModal(
        modalTrigger,
        alternativeProps.mobileSummaryElement || mobileSummaryElement,
        handleSubmit,
        persistInputChange,
        props
      )}
    </div>
  ).children();

describe('getFormFieldMarkup', () => {
  it('should return a `Modal`', () => {
    const wrapper = getModalMarkup();

    expectComponentToBe(wrapper, Modal);
  });

  describe('the `Modal`', () => {
    it('should have the right props', () => {
      const wrapper = getModalMarkup();

      expectComponentToHaveProps(wrapper, {
        isFullscreen: true,
        trigger: modalTrigger,
      });
    });

    it('should have the right children', () => {
      const wrapper = getModalMarkup();

      expectComponentToHaveChildren(wrapper, SemanticModal.Content);
    });
  });

  describe('the `Modal.Content`', () => {
    it('should have the right children', () => {
      const wrapper = getModalMarkup()
        .find(SemanticModal.Content)
        .at(0);

      expectComponentToHaveChildren(wrapper, Heading, Form);
    });

    it('should have the right children if mobile summary is defined', () => {
      const wrapper = getModalMarkup({
        mobileSummaryElement: <div />,
      })
        .find(SemanticModal.Content)
        .at(0);

      expectComponentToHaveChildren(wrapper, 'div', Form);
    });
  });

  describe('the first `Heading`', () => {
    it('should have the right props', () => {
      const wrapper = getModalMarkup()
        .find(Heading)
        .at(0);

      expectComponentToHaveProps(wrapper, {
        size: 'small',
      });
    });
  });

  describe('the mobile summary when defined', () => {
    it('should have the right children', () => {
      const wrapper = getModalMarkup({
        mobileSummaryElement: <div />,
      })
        .find('div')
        .at(0);

      expectComponentToHaveChildren(wrapper, 'div', Divider);
    });
  });
});
