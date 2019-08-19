import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';

import { Divider } from 'elements/Divider';
import { FlexContainer } from 'layout/FlexContainer';
import { Grid } from 'layout/Grid';
import { Heading } from 'typography/Heading';
import { Checkbox } from 'inputs/Checkbox';
import { GridColumn } from 'layout/GridColumn';
import { withResponsive } from 'utils/with-responsive';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { getGridColumns } from './utils/getGridColumns';

/**
 * A collection of information alongside checkboxes.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
const Component = ({ heading, checkboxes, isUserOnMobile }) => (
  <Segment className="is-input-segment is-checkbox-input-segment" vertical>
    <FlexContainer
      alignItems="baseline"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Heading>{heading}</Heading>
      <Divider size="small" />
      <Grid columns={getGridColumns(isUserOnMobile)}>
        {checkboxes.map(({ name, label, ...checkboxProps }) => (
          <GridColumn key={buildKeyFromStrings(label, name)}>
            <Checkbox
              label={label}
              name={name}
              {...checkboxProps}
              isFluid={isUserOnMobile}
              isLabelLeft={isUserOnMobile}
            />
          </GridColumn>
        ))}
      </Grid>
    </FlexContainer>
  </Segment>
);

Component.displayName = 'CheckboxInputSegment';

Component.propTypes = {
  /** The checkboxes to display. See [the `Checkbox` component for valid props](#/Inputs/Checkbox).  */
  checkboxes: PropTypes.arrayOf(PropTypes.object).isRequired,
  /** The text for the input segment's heading. */
  heading: PropTypes.string.isRequired,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
};

export const ComponentWithResponsive = withResponsive(Component);
