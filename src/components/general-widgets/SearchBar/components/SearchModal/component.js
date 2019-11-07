import React, { useState } from 'react';
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
  onSubmit,
  ...searchFieldsProps
}) => {
  const [isOpen, setIsOpen] = useState(isModalOpen);

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
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      trigger={
        <div
          data-test-id="search-bar-search-modal-trigger"
          onClick={() => setIsOpen(true)}
        >
          {searchButton}
        </div>
      }
    >
      <div className="search-bar is-stackable">
        <HorizontalGutters>
          <Form onSubmit={onSubmit}>
            <SearchFields {...searchFieldsProps} />
          </Form>
        </HorizontalGutters>
      </div>
    </Modal>
  );
};

Component.displayName = 'SearchModal';
Component.defaultProps = {
  modalSummaryElement: null,
  modalHeadingText: CHECK_OUR_AVAILABILITY,
  onSubmit: Function.prototype,
  isModalOpen: false,
  searchButton: <div />,
};
Component.propTypes = {
  isModalOpen: bool,
  modalHeadingText: string,
  modalSummaryElement: node,
  onSubmit: func,
  searchButton: node,
};
