import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getHasErrorMessage } from 'utils/get-has-error-message';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { ErrorMessage } from '../ErrorMessage';

import { adaptOptions } from './utils/adaptOptions';
import { getDefaultValue } from './utils/getDefaultValue';
import { getHasImages } from './utils/getHasImages';

/**
 * A dropdown allows a user to select a value from a series of options.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isOpen: false,
    value: '',
  };

  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    const { name, onChange } = this.props;

    prevValue !== value && onChange(name, value);
  }

  handleChange = (event, data) => {
    this.setState({ value: data.value, isOpen: false });
  };

  handleOpen = isOpen => this.setState({ isOpen });

  handleBlur = (event, data) => {
    this.props.onBlur(event, data);
    this.handleOpen(false);
  };

  render() {
    const { isOpen, value } = this.state;
    const { error, icon, isDisabled, isValid, label, options } = this.props;
    const hasImages = getHasImages(options);
    const adaptedOptions = adaptOptions(options, hasImages);
    const defaultValue = getDefaultValue(adaptedOptions, hasImages, !!label);
    const hasErrorMessage = getHasErrorMessage(error);

    return (
      <div
        className={getClassNames('dropdown-container', {
          'has-images': hasImages,
          dirty: value,
          error: error,
          focus: isOpen,
          valid: isValid,
        })}
      >
        {hasErrorMessage && <ErrorMessage errorMessage={error} />}
        {isValid && <Icon color="green" name={ICON_NAMES.CHECKMARK} />}
        {!hasImages && icon && <Icon name={icon} />}
        <Dropdown
          defaultValue={defaultValue}
          disabled={isDisabled || !adaptedOptions.length}
          icon={<Icon name={ICON_NAMES.CARET_DOWN} />}
          onBlur={this.handleBlur}
          onChange={this.handleChange}
          onClick={() => this.handleOpen(!isOpen)}
          open={isOpen}
          options={adaptedOptions}
          selection
        />
        {!hasImages &&
          label && <label onClick={() => this.handleOpen(true)}>{label}</label>}
      </div>
    );
  }
}

Component.displayName = 'Dropdown';

Component.defaultProps = {
  error: false,
  icon: null,
  isDisabled: false,
  isValid: false,
  label: '',
  name: '',
  onBlur: Function.prototype,
  onChange: Function.prototype,
  options: [],
};

Component.propTypes = {
  /** Is the dropdown in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** Icon for the dropdown. Not displayed if options have images. */
  icon: PropTypes.string,
  /** A disabled dropdown does not allow user interaction. */
  isDisabled: PropTypes.bool,
  /** Is the dropdown in a valid state. */
  isValid: PropTypes.bool,
  /** The label for the dropdown. Not displayed if options have images. */
  label: PropTypes.string,
  /** The name for the dropdown. */
  name: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /** A function called when the dropdown value changes. */
  onChange: PropTypes.func,
  /** The options which the user can select. Dropdown is disabled if options is an empty array. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** The source url for the image to display with the option. */
      image: PropTypes.string,
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
};
