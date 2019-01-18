import React from 'react';
import { Modal as SemanticModal, Form } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { Divider } from 'elements/Divider';

import { getFormFieldMarkup } from './getFormFieldMarkup';

/**
 * @param {Object}    props
 * @param {Function}  handleSubmit
 * @param {Function}  persistInputChange
 * @return {Object}
 */
export const getSearchBarModal = (props, handleSubmit, persistInputChange) => {
  /* eslint-disable react/prop-types */
  const {
    isModalOpen,
    modalHeadingText,
    modalTrigger,
    modalSummaryElement,
    onCloseModal,
  } = props;
  /* eslint-enable react/prop-types */

  return (
    <Modal
      isFullscreen
      isOpen={isModalOpen}
      onClose={onCloseModal}
      trigger={modalTrigger}
    >
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
};
