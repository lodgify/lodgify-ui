import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { getToggledIsActiveState } from 'utils/get-toggled-is-active-state';

/**
 * A marker which marks a point on a plane.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isActive: false,
  };

  componentDidUpdate = (previousProps, previousState) => {
    const { isActive } = this.state;

    if (previousState.isActive === isActive) return;

    const { name, onChange } = this.props;

    onChange(name, isActive);
  };

  handleClick = syntheticEvent => {
    const { name, onClick } = this.props;

    onClick(name, syntheticEvent);
  };

  toggleActive = () => this.setState(getToggledIsActiveState);

  render = () => (
    <div
      className={getClassNames('ui', 'marker', {
        active: this.props.isActive || this.state.isActive,
      })}
      onClick={this.handleClick}
      onMouseOut={this.toggleActive}
      onMouseOver={this.toggleActive}
    />
  );
}

Component.displayName = 'Marker';

Component.defaultProps = {
  isActive: false,
  name: undefined,
  onChange: Function.prototype,
  onClick: Function.prototype,
};

Component.propTypes = {
  /** Is the marker in an active state. */
  isActive: PropTypes.bool,
  /** The name for the marker. */
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A function called when the active state of the marker changes.
   * @param {string}  name
   * @param {Boolean} isActive
   */
  onChange: PropTypes.func,
  /**
   * A function called when the marker is clicked.
   * @param {string}  name
   * @param {Object}  syntheticEvent
   */
  onClick: PropTypes.func,
};
