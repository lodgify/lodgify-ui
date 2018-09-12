import React from 'react';
import { Modal as SemanticModal, Form } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getFormFieldMarkup } from './getFormFieldMarkup';

/**
 * @param {Node}      modalTrigger
 * @param {Node}      modalSummaryElement
 * @param {Function}  handleSubmit
 * @param {Function}  persistInputChange
 * @param {Object[]}  props
 * @return {Object}
 */
export const getSearchBarModal = (
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
        <Heading size="small">Check our availability</Heading>
      )}
      <Form onSubmit={handleSubmit}>
        {getFormFieldMarkup(props, persistInputChange, true, false)}
      </Form>
    </SemanticModal.Content>
  </Modal>
);
