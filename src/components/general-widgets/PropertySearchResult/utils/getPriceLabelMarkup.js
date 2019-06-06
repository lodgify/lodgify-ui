import React, { Fragment } from 'react';
import { Label } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';
import { FlexContainer } from 'layout/FlexContainer';
import { Paragraph } from 'typography/Paragraph';

/**
 *  @param {string}   pricePerPeriod
 *  @param {string}   periodText
 *  @param {string}   [size='medium']
 *  @returns {string}
 */
export const getPriceLabelMarkup = (
  pricePerPeriod,
  periodText,
  size = 'medium'
) =>
  !!pricePerPeriod && !periodText ? (
    <Heading size={size}>{pricePerPeriod}</Heading>
  ) : (
    <Fragment>
      <FlexContainer alignItems="center" flexDirection="row">
        <Paragraph>from</Paragraph>
        <Heading size={size}>{pricePerPeriod}</Heading>
      </FlexContainer>
      <Label> {`${periodText}`}</Label>
    </Fragment>
  );
