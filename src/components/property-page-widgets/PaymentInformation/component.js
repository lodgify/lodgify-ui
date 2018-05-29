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

/**
 * The standard widget for displaying the payment information of a property.
 * @returns {Object}
 */
export const Component = ({
  paymentScheduleText,
  cancellationPolicyText,
  cleaningCharge,
  taxesText,
  taxesDescriptionText,
  damageDepositText,
  notesText,
  extraNotesText,
}) => (
  <Grid stackable>
    <GridRow>
      <GridColumn width={12}>
        <Heading>Payment Information</Heading>
      </GridColumn>
    </GridRow>
    <GridRow>
      {!!paymentScheduleText && (
        <GridColumn width={6}>
          <Heading size="small">Payment Schedule</Heading>
          <Paragraph size="medium">{paymentScheduleText}</Paragraph>
        </GridColumn>
      )}
      {!!cancellationPolicyText && (
        <GridColumn width={6}>
          <Heading size="small">Cancellation Policy</Heading>
          <Paragraph size="medium">{cancellationPolicyText}</Paragraph>
        </GridColumn>
      )}
    </GridRow>
    <GridRow>
      {!!cleaningCharge && (
        <GridColumn width={6}>
          <Heading size="small">Cleaning Charge</Heading>
          <Statistic horizontal size="mini" text value={cleaningCharge} />
        </GridColumn>
      )}
      {!!taxesText && (
        <GridColumn width={6}>
          <Heading size="small">Taxes</Heading>
          <Statistic
            horizontal
            text
            size="tiny"
            label={taxesDescriptionText}
            value={taxesText}
          />
        </GridColumn>
      )}
    </GridRow>
    {!!damageDepositText && (
      <GridRow>
        <GridColumn width={12}>
          <Heading size="small">Damage Deposit</Heading>
          <Paragraph size="medium">{damageDepositText}</Paragraph>
        </GridColumn>
      </GridRow>
    )}
    {!!notesText && (
      <GridRow>
        <GridColumn width={12}>
          <Heading size="small">Notes</Heading>
          <Paragraph size="medium">{notesText}</Paragraph>
        </GridColumn>
      </GridRow>
    )}
    {!!extraNotesText && (
      <GridRow>
        <GridColumn width={12}>
          <Modal trigger={<Link>View more</Link>}>
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
  paymentScheduleText: null,
  cleaningCharge: null,
  cancellationPolicyText: null,
  taxesText: null,
  taxesDescriptionText: null,
  damageDepositText: null,
  notesText: null,
  extraNotesText: null,
};

Component.propTypes = {
  /** The Payment Schedule text to display. */
  paymentScheduleText: PropTypes.string,
  /** The Cleaning Charge text to display. */
  cleaningCharge: PropTypes.string,
  /** The Cancellation Policy text to display. */
  cancellationPolicyText: PropTypes.string,
  /** The Taxes text to display. */
  taxesText: PropTypes.string,
  /** The Taxes Description text to display. */
  taxesDescriptionText: PropTypes.string,
  /** The Damage Deposit text to display. */
  damageDepositText: PropTypes.string,
  /** The Notes text to display. */
  notesText: PropTypes.string,
  /** The Extra Notes text to display. */
  extraNotesText: PropTypes.string,
};
