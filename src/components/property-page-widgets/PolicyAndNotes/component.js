import React from 'react';
import PropTypes from 'prop-types';

import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';
import {
  CANCELLATION_POLICY,
  DAMAGE_DEPOSIT,
  NOTES,
  PAYMENT_SCHEDULE,
  POLICY_AND_NOTES,
  VIEW_MORE,
} from 'utils/default-strings';

/**
 * The standard widget for displaying the policy information and notes of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  cancellationPolicyHeadingText,
  cancellationPolicyText,
  damageDepositHeadingText,
  damageDepositText,
  extraNotesText,
  modalTriggerText,
  notesHeadingText,
  notesText,
  headingText,
  paymentScheduleHeadingText,
  paymentScheduleText,
}) => (
  <Grid stackable>
    <GridRow>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
    </GridRow>
    {(!!paymentScheduleText || !!cancellationPolicyText) && (
      <GridRow>
        {!!paymentScheduleText && (
          <GridColumn width={6}>
            <Heading size="small">{paymentScheduleHeadingText}</Heading>
            <Paragraph size="medium">{paymentScheduleText}</Paragraph>
          </GridColumn>
        )}
        {!!cancellationPolicyText && (
          <GridColumn width={6}>
            <Heading size="small">{cancellationPolicyHeadingText}</Heading>
            <Paragraph size="medium">{cancellationPolicyText}</Paragraph>
          </GridColumn>
        )}
      </GridRow>
    )}
    {!!damageDepositText && (
      <GridRow>
        <GridColumn width={12}>
          <Heading size="small">{damageDepositHeadingText}</Heading>
          <Paragraph size="medium">{damageDepositText}</Paragraph>
        </GridColumn>
      </GridRow>
    )}
    {!!notesText && (
      <GridRow>
        <GridColumn width={12}>
          <Heading size="small">{notesHeadingText}</Heading>
          <Paragraph size="medium">{notesText}</Paragraph>
        </GridColumn>
      </GridRow>
    )}
    {!!extraNotesText && (
      <GridRow>
        <GridColumn width={12}>
          <Modal trigger={<Link>{modalTriggerText}</Link>}>
            {getParagraphsFromStrings(extraNotesText).map(
              (paragraphText, index) => (
                <Paragraph key={buildKeyFromStrings(paragraphText, index)}>
                  {paragraphText}
                </Paragraph>
              )
            )}
          </Modal>
        </GridColumn>
      </GridRow>
    )}
  </Grid>
);

Component.displayName = 'PolicyAndNotes';

Component.defaultProps = {
  cancellationPolicyHeadingText: CANCELLATION_POLICY,
  cancellationPolicyText: null,
  damageDepositHeadingText: DAMAGE_DEPOSIT,
  damageDepositText: null,
  extraNotesText: null,
  modalTriggerText: VIEW_MORE,
  notesHeadingText: NOTES,
  notesText: null,
  headingText: POLICY_AND_NOTES,
  paymentScheduleHeadingText: PAYMENT_SCHEDULE,
  paymentScheduleText: null,
};

Component.propTypes = {
  /** The Cancellation policy heading text */
  cancellationPolicyHeadingText: PropTypes.string,
  /** The Cancellation Policy text to display. */
  cancellationPolicyText: PropTypes.string,
  /** The Damage Deposit heading text */
  damageDepositHeadingText: PropTypes.string,
  /** The Damage Deposit text to display. */
  damageDepositText: PropTypes.string,
  /** The Extra Notes text to display. */
  extraNotesText: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The View More trigger text */
  modalTriggerText: PropTypes.string,
  /** The Notes heading text */
  notesHeadingText: PropTypes.string,
  /** The Notes text to display. */
  notesText: PropTypes.string,
  /** The Payment Schedule heading text */
  paymentScheduleHeadingText: PropTypes.string,
  /** The Payment Schedule text to display. */
  paymentScheduleText: PropTypes.string,
};
