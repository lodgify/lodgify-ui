import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';

import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { GridColumn } from 'layout/GridColumn';
import { Heading } from 'typography/Heading';
import { ShowOn } from 'layout/ShowOn';
import { TextInput } from 'inputs/TextInput';
import { Button } from 'elements/Button';
import { Divider } from 'elements/Divider';
import { HorizontalGutters } from 'layout/HorizontalGutters';
import {
  SUBSCRIBE,
  SUBSCRIBE_TO_OUR_NEWSLETTER,
  YOUR_EMAIL,
} from 'utils/default-strings';

/**
 * An email capture displays a form inviting a user to submit an email address.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  buttonText,
  errorMessage,
  headingText,
  inputError,
  inputLabel,
  inputValue,
  onChangeInput,
  onClickButton,
  successMessage,
}) => (
  <HorizontalGutters>
    <Divider />
    <Grid>
      <GridRow verticalAlign="middle">
        {!errorMessage ? (
          <Fragment>
            <GridColumn computer={5} mobile={12} tablet={12} textAlign="center">
              <Heading hasMargin={false} size="small">
                {headingText}
              </Heading>
              <ShowOn
                mobile
                parent={Divider}
                parentProps={{ size: 'small' }}
                tablet
              />
            </GridColumn>
            <GridColumn computer={4} mobile={12} tablet={7}>
              <TextInput
                error={inputError}
                isFluid
                label={inputLabel}
                onChange={onChangeInput}
                value={inputValue}
              />
              <ShowOn mobile parent={Divider} parentProps={{ size: 'small' }} />
            </GridColumn>
            <GridColumn computer={3} mobile={12} tablet={5}>
              {!successMessage ? (
                <Button isFluid isRounded onClick={onClickButton}>
                  {buttonText}
                </Button>
              ) : (
                <Message content={successMessage} success />
              )}
            </GridColumn>
          </Fragment>
        ) : (
          <GridColumn width={12}>
            <Message content={errorMessage} error />
          </GridColumn>
        )}
      </GridRow>
    </Grid>
    <Divider />
  </HorizontalGutters>
);

Component.displayName = 'EmailCapture';

Component.defaultProps = {
  buttonText: SUBSCRIBE,
  errorMessage: null,
  headingText: SUBSCRIBE_TO_OUR_NEWSLETTER,
  inputError: false,
  inputLabel: YOUR_EMAIL,
  inputValue: undefined,
  onChangeInput: Function.prototype,
  onClickButton: Function.prototype,
  successMessage: null,
};

Component.propTypes = {
  /** The text to display on the button. */
  buttonText: PropTypes.string,
  /** An error message to display in place of the component. */
  errorMessage: PropTypes.string,
  /** The text to display as a heading. */
  headingText: PropTypes.string,
  /** Is the text input in an error state. */
  inputError: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** The visible label for the text input. */
  inputLabel: PropTypes.string,
  /** The value of the text input. */
  inputValue: PropTypes.string,
  /** The function called when the text input is changed.
   *  @param {String} name
   *  @param {String} value
   */
  onChangeInput: PropTypes.func,
  /** The function called when the button is clicked.
   *  @param {Object} event
   */
  onClickButton: PropTypes.func,
  /** A success message to display in place of the button. */
  successMessage: PropTypes.string,
};
