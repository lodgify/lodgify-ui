import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { FlexContainer } from 'layout/FlexContainer';
import { Rating } from 'elements/Rating';
import { Paragraph } from 'typography/Paragraph';

/**
 * A summary card which displays basic property information.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  handleClick = syntheticEvent => {
    const { name, onClick } = this.props;

    onClick(name, syntheticEvent);
  };

  render = () => {
    const { propertyName, propertyType, ratingNumber } = this.props;

    return (
      <Card className="has-summary-card" onClick={this.handleClick}>
        <Card.Header>
          <Heading>{propertyName}</Heading>
        </Card.Header>
        <FlexContainer alignItems="center" flexDirection="row">
          <Rating iconSize="tiny" ratingNumber={ratingNumber} />
          <Paragraph size="medium">{propertyType}</Paragraph>
        </FlexContainer>
      </Card>
    );
  };
}

Component.displayName = 'SummaryCard';

Component.defaultProps = {
  name: undefined,
  onClick: Function.prototype,
};

Component.propTypes = {
  /** The name for the summary card. */
  name: PropTypes.string,
  /** The function to call when the summary card is clicked.
   *  @param {Object} event
   */
  onClick: PropTypes.func,
  /** The name of the property. */
  propertyName: PropTypes.string.isRequired,
  /** The name of the type of the property. */
  propertyType: PropTypes.string.isRequired,
  /** The numeral rating for the property, out of 5. */
  ratingNumber: PropTypes.number.isRequired,
};
