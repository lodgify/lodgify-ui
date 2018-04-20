import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

/**
 * ShowOnDesktop is the Lodgify UI interface for the
 * Semantic UI ShowOnDesktop.
 *
 * To customise how the ShowOnDesktop gets computed, override the @columnCount
 * definition of Semantic UI.
 *
 * @returns {Object}
 */
export const Component = ({ ...props }) => (
  <Responsive {...props} minWidth={599} />
);

Component.displayName = 'ShowOnDesktop';
