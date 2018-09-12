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
const modalSummaryElement = null;
const handleSubmit = () => {};
const persistInputChange = () => {};
const props = {};

const getModalMarkup = (alternativeProps = {}) =>
  shallow(
    <div>
      {getSearchBarModal(
        modalTrigger,
        alternativeProps.modalSummaryElement || modalSummaryElement,
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
        modalSummaryElement: <div />,
      })
        .find(SemanticModal.Content)
        .at(0);

      expectComponentToHaveChildren(wrapper, 'div', Form);
    });
  });

  describe('the first `Heading`', () => {
    const getHeading = () =>
      getModalMarkup()
        .find(Heading)
        .at(0);

    it('should have the right props', () => {
      const wrapper = getHeading();

      expectComponentToHaveProps(wrapper, {
        size: 'small',
      });
    });

    it('should have the right children', () => {
      const wrapper = getHeading();

      expectComponentToHaveChildren(wrapper, 'Check our availability');
    });
  });

  describe('if `props.modalSummaryElement` is passed', () => {
    describe('the first `div` element', () => {
      it('should have the right children', () => {
        const wrapper = getModalMarkup({
          modalSummaryElement: <div />,
        })
          .find('div')
          .at(0);

        expectComponentToHaveChildren(wrapper, 'div', Divider);
      });
    });
  });
});
