import React from 'react';
import { string, bool, node, func } from 'prop-types';
import { Form } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { Modal } from 'elements/Modal';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';

import { SearchFields } from '../SearchFields';

export const Component = ({
  modalSummaryElement,
  modalHeadingText,
  isModalOpen,
  searchButton,
  handleSubmit,
  onCloseModal,
  ...searchFieldsProps
}) => (
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
          <SearchFields {...searchFieldsProps} />
        </Form>
      </HorizontalGutters>
    </div>
  </Modal>
);

Component.displayName = 'SearchModal';
Component.defaultProps = {
  modalSummaryElement: null,
  modalHeadingText: CHECK_OUR_AVAILABILITY,
  handleSubmit: Function.prototype,
  isModalOpen: false,
  onCloseModal: Function.prototype,
  searchButton: <div />,
};
Component.propTypes = {
  handleSubmit: func,
  isModalOpen: bool,
  modalHeadingText: string,
  modalSummaryElement: node,
  onCloseModal: func,
  searchButton: node,
};
