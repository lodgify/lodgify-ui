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
  HEADING_TITLE,
  PAYMENT_SCHEDULE,
  CANCELLATION_POLICY,
  CLEANING_CHARGE,
  TAXES,
  DAMAGE_DEPOSIT,
  NOTES,
  VIEW_MORE,
} from './utils/default-strings';

/**
 * The standard widget for displaying the payment information of a property.
 * @returns {Object}
 */
export const Component = ({
  cancellationPolicyLabel,
  cancellationPolicyText,
  cleaningCharge,
  cleaningChargeLabel,
  damageDepositLabel,
  damageDepositText,
  extraNotesText,
  headingLabel,
  paymentScheduleLabel,
  paymentScheduleText,
  taxesDescriptionText,
  taxesText,
  taxesLabel,
  notesLabel,
  notesText,
  viewMoreLabel,
}) => (
  <Grid stackable>
    <GridRow>
      <GridColumn width={12}>
        <Heading>{headingLabel}</Heading>
      </GridColumn>
    </GridRow>
    <GridRow>
      {!!paymentScheduleText && (
        <GridColumn width={6}>
          <Heading size="small">{paymentScheduleLabel}</Heading>
          <Paragraph size="medium">{paymentScheduleText}</Paragraph>
        </GridColumn>
      )}
      {!!cancellationPolicyText && (
        <GridColumn width={6}>
          <Heading size="small">{cancellationPolicyLabel}</Heading>
          <Paragraph size="medium">{cancellationPolicyText}</Paragraph>
        </GridColumn>
      )}
    </GridRow>
    <GridRow>
      {!!cleaningCharge && (
        <GridColumn width={6}>
          <Heading size="small">{cleaningChargeLabel}</Heading>
          <Statistic horizontal size="mini" text value={cleaningCharge} />
        </GridColumn>
      )}
      {!!taxesText && (
        <GridColumn width={6}>
          <Heading size="small">{taxesLabel}</Heading>
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
          <Heading size="small">{damageDepositLabel}</Heading>
          <Paragraph size="medium">{damageDepositText}</Paragraph>
        </GridColumn>
      </GridRow>
    )}
    {!!notesText && (
      <GridRow>
        <GridColumn width={12}>
          <Heading size="small">{notesLabel}</Heading>
          <Paragraph size="medium">{notesText}</Paragraph>
        </GridColumn>
      </GridRow>
    )}
    {!!extraNotesText && (
      <GridRow>
        <GridColumn width={12}>
          <Modal trigger={<Link>{viewMoreLabel}</Link>}>
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

Component.displayName = 'PaymentInformation';

Component.defaultProps = {
  cancellationPolicyLabel: CANCELLATION_POLICY,
  cancellationPolicyText: null,
  cleaningCharge: null,
  cleaningChargeLabel: CLEANING_CHARGE,
  damageDepositLabel: DAMAGE_DEPOSIT,
  damageDepositText: null,
  extraNotesText: null,
  headingLabel: HEADING_TITLE,
  notesLabel: NOTES,
  notesText: null,
  paymentScheduleLabel: PAYMENT_SCHEDULE,
  paymentScheduleText: null,
  taxesDescriptionText: null,
  taxesLabel: TAXES,
  taxesText: null,
  viewMoreLabel: VIEW_MORE,
};

Component.propTypes = {
  /** The cancellation policy label */
  cancellationPolicyLabel: PropTypes.string,
  /** The Cancellation Policy text to display. */
  cancellationPolicyText: PropTypes.string,
  /** The Cleaning Charge text to display. */
  cleaningCharge: PropTypes.string,
  /** The cleaning charge label */
  cleaningChargeLabel: PropTypes.string,
  /** The damage deposit label */
  damageDepositLabel: PropTypes.string,
  /** The Damage Deposit text to display. */
  damageDepositText: PropTypes.string,
  /** The Extra Notes text to display. */
  extraNotesText: PropTypes.string,
  /** The label for the heading */
  headingLabel: PropTypes.string,
  /** The notes label */
  notesLabel: PropTypes.string,
  /** The Notes text to display. */
  notesText: PropTypes.string,
  /** The label for the payment schedule */
  paymentScheduleLabel: PropTypes.string,
  /** The Payment Schedule text to display. */
  paymentScheduleText: PropTypes.string,
  /** The Taxes Description text to display. */
  taxesDescriptionText: PropTypes.string,
  /** The taxes label */
  taxesLabel: PropTypes.string,
  /** The Taxes text to display. */
  taxesText: PropTypes.string,
  /** The view more label */
  viewMoreLabel: PropTypes.string,
};
