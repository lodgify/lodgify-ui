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

import { getRuleMarkup } from './utils/getRuleMarkup';

/**
 * The standard widget for displaying the policy information and notes of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  cancellationPolicyHeadingText,
  cancellationPolicyRules,
  damageDepositHeadingText,
  damageDepositRules,
  extraNotesText,
  modalTriggerText,
  notesHeadingText,
  notesText,
  headingText,
  paymentScheduleHeadingText,
  paymentScheduleRules,
}) => (
  <Grid isStackable>
    <GridRow>
      <GridColumn width={12}>
        <Heading>{headingText}</Heading>
      </GridColumn>
    </GridRow>
    {(!!paymentScheduleRules || !!cancellationPolicyRules) && (
      <GridRow>
        {!!paymentScheduleRules && (
          <GridColumn width={6}>
            <Heading size="small">{paymentScheduleHeadingText}</Heading>
            {paymentScheduleRules.map(getRuleMarkup)}
          </GridColumn>
        )}
        {!!cancellationPolicyRules && (
          <GridColumn width={6}>
            <Heading size="small">{cancellationPolicyHeadingText}</Heading>
            {cancellationPolicyRules.map(getRuleMarkup)}
          </GridColumn>
        )}
      </GridRow>
    )}
    {!!damageDepositRules && (
      <GridRow>
        <GridColumn width={12}>
          <Heading size="small">{damageDepositHeadingText}</Heading>
          {damageDepositRules.map(getRuleMarkup)}
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
  cancellationPolicyRules: null,
  damageDepositHeadingText: DAMAGE_DEPOSIT,
  damageDepositRules: null,
  extraNotesText: null,
  modalTriggerText: VIEW_MORE,
  notesHeadingText: NOTES,
  notesText: null,
  headingText: POLICY_AND_NOTES,
  paymentScheduleHeadingText: PAYMENT_SCHEDULE,
  paymentScheduleRules: null,
};

Component.propTypes = {
  /** The Cancellation policy heading text. */
  cancellationPolicyHeadingText: PropTypes.string,
  /** The list of Cancellation Policy rules to display. */
  cancellationPolicyRules: PropTypes.arrayOf(PropTypes.string),
  /** The Damage Deposit heading text. */
  damageDepositHeadingText: PropTypes.string,
  /** The list of Damage Deposit rules to display. */
  damageDepositRules: PropTypes.arrayOf(PropTypes.string),
  /** The Extra Notes text to display. */
  extraNotesText: PropTypes.string,
  /** The text to display as a heading at the top of the widget. */
  headingText: PropTypes.string,
  /** The View More trigger text. */
  modalTriggerText: PropTypes.string,
  /** The Notes heading text. */
  notesHeadingText: PropTypes.string,
  /** The Notes text to display. */
  notesText: PropTypes.string,
  /** The Payment Schedule heading text. */
  paymentScheduleHeadingText: PropTypes.string,
  /** The list of Payment Schedule rules to display. */
  paymentScheduleRules: PropTypes.arrayOf(PropTypes.string),
};
