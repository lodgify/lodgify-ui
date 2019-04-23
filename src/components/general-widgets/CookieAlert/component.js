import React from 'react';
import PropTypes from 'prop-types';

import { ACCEPT, LEARN_MORE } from 'utils/default-strings';
import { Modal } from 'elements/Modal';
import { FlexContainer } from 'layout/FlexContainer';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import { Paragraph } from 'typography/Paragraph';
import { withResponsive } from 'utils/with-responsive';
import { Link } from 'elements/Link';

import { getFormMarkup } from './utils/getFormMarkup';

const Component = ({
  buttonText,
  isOpen,
  isUserOnMobile,
  linkText,
  linkUrl,
  onAccept,
  text,
}) => {
  if (!isOpen) return false;
  return isUserOnMobile ? (
    <Modal hasCloseIcon={false} hasRoundedCorners isOpen>
      <HorizontalGutters>
        <FlexContainer
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
        >
          <Divider />
          <Paragraph>{text}</Paragraph>
          <Link href={linkUrl} willOpenInNewTab>
            {linkText}
          </Link>
          <Divider />
          <Button isRounded onClick={onAccept}>
            {buttonText}
          </Button>{' '}
          <Divider />
        </FlexContainer>
      </HorizontalGutters>
    </Modal>
  ) : (
    <div className="cookies-form">
      {getFormMarkup(buttonText, linkText, linkUrl, onAccept, text)}
    </div>
  );
};

Component.displayName = 'CookieAlert';

Component.defaultProps = {
  buttonText: ACCEPT,
  isOpen: false,
  linkText: LEARN_MORE,
  linkUrl: '/',
};

Component.propTypes = {
  /** The text to display on the button inside the component. */
  buttonText: PropTypes.string,
  /** Is the modal open. */
  isOpen: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** The text to display as a link. */
  linkText: PropTypes.string,
  /** The url attached to the link. */
  linkUrl: PropTypes.string,
  /** The on accept handler for the call to action. */
  onAccept: PropTypes.func.isRequired,
  /** The text to display in the component. */
  text: PropTypes.string.isRequired,
  /** The element to be clicked to display the modal. */
};

export const ComponentWithResponsive = withResponsive(Component);
