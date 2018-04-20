import React from 'react';
import PropTypes from 'prop-types';
import { Responsive } from 'semantic-ui-react';

/**
 * ShowOnMobile is the Lodgify UI interface for the
 * Semantic UI ShowOnMobile.
 *
 * To customise how the ShowOnMobile gets computed, override the @columnCount
 * definition of Semantic UI.
 *
 * @returns {Object}
 */
export const Component = ({ ...props }) => (
  <Responsive {...props} maxWidth={599} />
);

Component.displayName = 'ShowOnMobile';
