import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getClassNames from 'classnames';

import { getToggledState } from './utils/getToggledState';

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

  toggleActive = () => this.setState(getToggledState);

  render = () => (
    <div
      className={getClassNames('ui', 'marker', {
        active: this.props.isActive || this.state.isActive,
      })}
      onMouseEnter={this.toggleActive}
      onMouseLeave={this.toggleActive}
    />
  );
}

Component.displayName = 'Marker';

Component.defaultProps = {
  isActive: false,
  name: undefined,
  onChange: Function.prototype,
};

Component.propTypes = {
  /** Is the marker in an active state. */
  isActive: PropTypes.bool,
  /** The name for the marker. */
  name: PropTypes.string,
  /**
   * A function called when the active state of the marker changes
   * @param {string}  name
   * @param {Boolean} isActive
   */
  onChange: PropTypes.func,
};
