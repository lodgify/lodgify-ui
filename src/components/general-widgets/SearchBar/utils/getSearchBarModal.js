import React from 'react';
import Form from 'semantic-ui-react/dist/commonjs/collections/Form';
import { default as SemanticModal } from 'semantic-ui-react/dist/commonjs/modules/Modal';

import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getFormFieldMarkup } from './getFormFieldMarkup';

/**
 * @param {string}    modalHeadingText
 * @param {Node}      modalTrigger
 * @param {Node}      modalSummaryElement
 * @param {Function}  handleSubmit
 * @param {Function}  persistInputChange
 * @param {Object[]}  props
 * @return {Object}
 */
export const getSearchBarModal = (
  modalHeadingText,
  modalTrigger,
  modalSummaryElement,
  handleSubmit,
  persistInputChange,
  props
) => (
  <Modal isFullscreen trigger={modalTrigger}>
    <SemanticModal.Content>
      {modalSummaryElement ? (
        <div>
          {modalSummaryElement}
          <Divider hasLine />
        </div>
      ) : (
        <Heading size="small">{modalHeadingText}</Heading>
      )}
      <Form onSubmit={handleSubmit}>
        {getFormFieldMarkup(props, persistInputChange, true, false)}
      </Form>
    </SemanticModal.Content>
  </Modal>
);
