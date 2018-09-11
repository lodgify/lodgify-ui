import React from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';

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
  PAYMENT_INFORMATION,
  PAYMENT_SCHEDULE,
  CANCELLATION_POLICY,
  CLEANING_CHARGE,
  TAXES,
  DAMAGE_DEPOSIT,
  NOTES,
  VIEW_MORE,
} from 'utils/default-strings';
import { VerticalGutters } from 'layout/VerticalGutters';

/**
 * The standard widget for displaying the payment information of a property.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  cancellationPolicyHeadingText,
  cancellationPolicyText,
  cleaningCharge,
  cleaningChargeHeadingText,
  damageDepositHeadingText,
  damageDepositText,
  extraNotesText,
  modalTriggerText,
  notesHeadingText,
  notesText,
  headingText,
  paymentScheduleHeadingText,
  paymentScheduleText,
  taxesDescriptionText,
  taxesText,
  taxesHeadingText,
}) => (
  <VerticalGutters>
    <Grid stackable>
      <GridRow>
        <GridColumn width={12}>
          <Heading>{headingText}</Heading>
        </GridColumn>
      </GridRow>
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
      <GridRow>
        {!!cleaningCharge && (
          <GridColumn width={6}>
            <Heading size="small">{cleaningChargeHeadingText}</Heading>
            <Statistic horizontal size="mini" text value={cleaningCharge} />
          </GridColumn>
        )}
        {!!taxesText && (
          <GridColumn width={6}>
            <Heading size="small">{taxesHeadingText}</Heading>
            <Statistic
              horizontal
              label={taxesDescriptionText}
              size="tiny"
              text
              value={taxesText}
            />
          </GridColumn>
        )}
      </GridRow>
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
  </VerticalGutters>
);

Component.displayName = 'PaymentInformation';

Component.defaultProps = {
  cancellationPolicyHeadingText: CANCELLATION_POLICY,
  cancellationPolicyText: null,
  cleaningCharge: null,
  cleaningChargeHeadingText: CLEANING_CHARGE,
  damageDepositHeadingText: DAMAGE_DEPOSIT,
  damageDepositText: null,
  extraNotesText: null,
  modalTriggerText: VIEW_MORE,
  notesHeadingText: NOTES,
  notesText: null,
  headingText: PAYMENT_INFORMATION,
  paymentScheduleHeadingText: PAYMENT_SCHEDULE,
  paymentScheduleText: null,
  taxesDescriptionText: null,
  taxesHeadingText: TAXES,
  taxesText: null,
};

Component.propTypes = {
  /** The Cancellation policy heading text */
  cancellationPolicyHeadingText: PropTypes.string,
  /** The Cancellation Policy text to display. */
  cancellationPolicyText: PropTypes.string,
  /** The Cleaning Charge text to display. */
  cleaningCharge: PropTypes.string,
  /** The Cleaning Charge heading text */
  cleaningChargeHeadingText: PropTypes.string,
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
  /** The Taxes Description text to display. */
  taxesDescriptionText: PropTypes.string,
  /** The Taxes heading text */
  taxesHeadingText: PropTypes.string,
  /** The Taxes text to display. */
  taxesText: PropTypes.string,
};
