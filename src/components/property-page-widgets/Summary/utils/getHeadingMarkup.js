import React from 'react';
import { Segment } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

/**
 * @param  {string} propertyName
 * @return {Object}
 */
export const getHeadingMarkup = propertyName => (
  <Segment>
    <Heading>{propertyName}</Heading>
  </Segment>
);
