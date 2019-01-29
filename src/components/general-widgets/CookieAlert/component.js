import React from 'react';
import PropTypes from 'prop-types';

import { Modal } from 'elements/Modal';
import { FlexContainer } from 'layout/FlexContainer';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Paragraph } from 'typography/Paragraph';
<<<<<<< Updated upstream
import { Link } from 'elements/Link';

export const Component = ({
  buttonText,
  isOpen,
  linkText,
  linkUrl,
  onClick,
  onClose,
  text,
  trigger,
}) => (
  <Modal
    dimmer
    hasMargin
    isAlignedBottom
    isBackgroundTransparent
    isJustifiedRight
    isModalRounded
    isOpen={isOpen}
    onClose={onClose}
    trigger={trigger}
  >
    <HorizontalGutters>
      <FlexContainer
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Divider />
        <Paragraph>{text}</Paragraph>
        <Link href={linkUrl}>{linkText}</Link>
        <Divider />
        <Button isRounded onClick={onClick}>
          {buttonText}
        </Button>
        <Divider />
      </FlexContainer>
    </HorizontalGutters>
  </Modal>
);
=======
import { withResponsive } from 'utils/with-responsive';

import { getFormMarkup } from './utils/getFormMarkup';

const Component = ({
  buttonText,
  isFormOpen,
  isOpen,
  isUserOnMobile,
  onClick,
  onSubmit,
  text,
  trigger,
}) =>
  isUserOnMobile ? (
    <Modal closeIcon={null} hasRoundedCorners isOpen={isOpen} trigger={trigger}>
      <HorizontalGutters>
        <FlexContainer
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Divider />
          <Paragraph>{text}</Paragraph>
          <Divider />
          <Button isRounded onClick={onClick}>
            {buttonText}
          </Button>
          <Divider />
        </FlexContainer>
      </HorizontalGutters>
    </Modal>
  ) : (
    <div className="cookies-form">
      {getFormMarkup(isFormOpen, onSubmit, buttonText, text)}
    </div>
  );
>>>>>>> Stashed changes

Component.displayName = 'CookieAlert';

Component.defaultProps = {
  buttonText: 'Accept',
  isOpen: false,
<<<<<<< Updated upstream
  linkText: 'Learn more',
  linkUrl: '/',
  onClose: Function.prototype,
  trigger: <Button isRounded>Sample text</Button>,
=======
  trigger: null,
  isFormOpen: true,
>>>>>>> Stashed changes
};

Component.propTypes = {
  /** The text to display on the button inside the modal. */
  buttonText: PropTypes.string,
<<<<<<< Updated upstream
  /** Is the modal open. */
  isOpen: PropTypes.bool,
  /** The text to display as a link. */
  linkText: PropTypes.string,
  /** The url for the link text. */
  linkUrl: PropTypes.string,
  /** The function called when the modal button is clicked. */
  onClick: PropTypes.func.isRequired,
  /** The function called when the modal is closed. */
  onClose: PropTypes.func,
=======
  /** Is the cookies form visible */
  isFormOpen: PropTypes.bool,
  /** Is the modal open. */
  isOpen: PropTypes.bool,
  /** The text to display as a link. */
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The function called when the modal button is clicked. */
  onClick: PropTypes.func.isRequired,
  /** The function to call when the form is submitted
   *  @param {Object} values - The values of the inputs in the form.
   */
  onSubmit: PropTypes.func.isRequired,
>>>>>>> Stashed changes
  /** The text to display in the modal. */
  text: PropTypes.string.isRequired,
  /** The element to be clicked to display the modal. */
  trigger: PropTypes.node,
};
<<<<<<< Updated upstream
=======

export const ComponentWithResponsive = withResponsive(Component);
>>>>>>> Stashed changes
