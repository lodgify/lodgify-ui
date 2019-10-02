import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Slider, Rail, Tracks, Handles } from 'react-compound-slider';
import { Label } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getControlledInputValue } from 'utils/get-controlled-input-value';

import { DEFAULT_VALUE } from './constants';
import { getIsValueEqual } from './utils/getIsValueEqual';

/**
 * A range allows a user to select a value from a constrained domain.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    activeHandleID: null,
    value: this.props.initialValue || DEFAULT_VALUE,
  };

  componentDidUpdate = (previousProps, previousState) => {
    const { value } = this.state;

    if (getIsValueEqual(previousState.value, value)) return;

    const { name, onChange } = this.props;

    onChange(name, value);
  };

  handleChange = value => this.setState({ value });

  handleSlideEnd = () => this.setState({ activeHandleID: null });

  handleSlideStart = (value, { activeHandleID }) =>
    this.setState({ activeHandleID });

  render = () => {
    const {
      domain,
      isShowingTrackOutsideLeft,
      isShowingTrackOutsideRight,
      renderValue,
      step,
    } = this.props;
    const value = getControlledInputValue(
      this.props.value,
      undefined,
      this.state.value
    );

    return (
      <Slider
        className="ui range"
        domain={domain}
        mode={2}
        onChange={this.handleChange}
        onSlideEnd={this.handleSlideEnd}
        onSlideStart={this.handleSlideStart}
        step={step}
        values={value}
      >
        <Rail>
          {({ getRailProps }) => <div className="rail" {...getRailProps()} />}
        </Rail>
        <div />
        <Tracks
          left={isShowingTrackOutsideLeft}
          right={isShowingTrackOutsideRight}
        >
          {({ tracks, getTrackProps }) => (
            <Fragment>
              {tracks.map(({ id, source, target }) => (
                <div
                  className="track"
                  key={id}
                  style={{
                    left: `${source.percent}%`,
                    width: `${target.percent - source.percent}%`,
                  }}
                  {...getTrackProps()}
                />
              ))}
            </Fragment>
          )}
        </Tracks>
        <Handles>
          {({ handles, getHandleProps }) => (
            <Fragment>
              {handles.map(({ id, percent, value }, key) => (
                <div
                  className={getClassNames('handle-clickable-area', {
                    active: id === this.state.activeHandleID,
                  })}
                  key={key}
                  style={{ left: `calc(${percent}% - 10px)` }}
                  {...getHandleProps(id)}
                >
                  <div className="handle" />
                  <Label pointing="below">{renderValue(value)}</Label>
                </div>
              ))}
            </Fragment>
          )}
        </Handles>
      </Slider>
    );
  };
}

Component.displayName = 'Range';

Component.defaultProps = {
  domain: [0, 100],
  initialValue: undefined,
  isShowingTrackOutsideLeft: true,
  isShowingTrackOutsideRight: false,
  name: '',
  onChange: Function.prototype,
  renderValue: value => value,
  step: 1,
  value: undefined,
};

Component.propTypes = {
  /** The lower and upper bound of the constrained domain from which a user can select values. */
  domain: PropTypes.arrayOf(PropTypes.number),
  /** The default value of the range. */
  initialValue: PropTypes.arrayOf(PropTypes.number),
  /** Is the range displaying a coloured track between the left of the rail to the leftmost handle. */
  isShowingTrackOutsideLeft: PropTypes.bool,
  /** Is the range displaying a coloured track between the right of the rail to the rightmost handle. */
  isShowingTrackOutsideRight: PropTypes.bool,
  /** The name for the range. */
  name: PropTypes.string,
  /** A function called when the range value changes. */
  onChange: PropTypes.func,
  /** A function returning a React node for modifying the way values are rendered. */
  renderValue: PropTypes.func,
  /** The stepping interval between selectable values. */
  step: PropTypes.number,
  /** The current value of the range where it is consumed as a controlled component. */
  value: PropTypes.arrayOf(PropTypes.number),
};
