import React from 'react';
import { Container } from 'semantic-ui-react';

/**
 * HorizontalGutters wraps child components with responsive
 * horizontal gutters on the left and right.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({ textAlign, ...props }) => (
  <Container {...props} textAlign={textAlign} />
);

Component.displayName = 'HorizontalGutters';
