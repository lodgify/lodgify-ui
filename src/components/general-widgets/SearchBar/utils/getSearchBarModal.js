import React from 'react';
import { Form } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { HorizontalGutters } from 'layout/HorizontalGutters';

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
    modalSummaryElement,
    onCloseModal,
    searchButton,
  } = props;
  /* eslint-enable react/prop-types */

  return (
    <Modal
      hasPadding
      header={
        modalSummaryElement ? (
          modalSummaryElement
        ) : (
          <Heading size="small">{modalHeadingText}</Heading>
        )
      }
      isFullscreen
      isOpen={isModalOpen}
      onClose={onCloseModal}
      trigger={searchButton}
    >
      <div className="search-bar is-stackable">
        <HorizontalGutters>
          <Form onSubmit={handleSubmit}>
            {getFormFieldMarkup(props, persistInputChange, false)}
          </Form>
        </HorizontalGutters>
      </div>
    </Modal>
  );
};
