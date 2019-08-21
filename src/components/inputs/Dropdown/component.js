import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { getIsInputValueReset } from 'utils/get-is-input-value-reset';
import { getHasErrorMessage } from 'utils/get-has-error-message';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { NO_RESULTS } from 'utils/default-strings';
import { getControlledInputValue } from 'utils/get-controlled-input-value';
import { getPropOnCondition } from 'utils/get-prop-on-condition';

import { ErrorMessage } from '../ErrorMessage';

import { getIsOpenAfterChange } from './utils/getIsOpenAfterChange';
import { adaptOptions } from './utils/adaptOptions';
import { getHasImages } from './utils/getHasImages';
import { isValueValid } from './utils/isValueValid';

/**
 * A dropdown allows a user to select a value from a series of options.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    isBlurred: true,
    isDirty: false,
    isOpen: false,
    value: this.props.initialValue,
  };

  componentDidMount() {
    if (!!this.state.value || !!this.props.value) {
      const value = getControlledInputValue(
        this.props.value,
        this.props.initialValue,
        this.state.value
      );

      const isDirty = isValueValid(value);

      this.setState({ isDirty });
    }
  }

  componentDidUpdate(previousProps, previousState) {
    if (getIsInputValueReset(previousProps.value, this.props.value)) {
      this.setState({ value: undefined });
      return;
    }

    const { value, isBlurred } = this.state;
    const { name, onChange, onBlur, onFocus } = this.props;

    if (previousProps.value !== this.props.value) {
      const value = getControlledInputValue(
        this.props.value,
        this.props.initialValue,
        this.state.value
      );

      const isDirty = isValueValid(value);

      this.setState({ isDirty, value });
      return;
    }

    if (previousState.value !== value) {
      onChange(name, value);
    }

    if (!previousState.isBlurred && isBlurred) {
      onBlur(name);
    }

    if (previousState.isBlurred && !isBlurred) {
      onFocus(name);
    }
  }

  handleChange = ({ key }, { value }) => {
    this.setState({
      value,
      isOpen: getIsOpenAfterChange(key),
    });
  };

  handleOpen = isOpen => this.setState({ isOpen, isBlurred: false });

  handleBlur = isBlurred => this.setState({ isBlurred, isOpen: false });

  render() {
    const { isOpen, isDirty } = this.state;
    const {
      getOptionsWithSearch,
      error,
      icon,
      isCompact,
      isDisabled,
      isSearchable,
      isValid,
      noResultsText,
      label,
      options,
      willOpenAbove,
    } = this.props;
    const value = getControlledInputValue(
      this.props.value,
      undefined,
      this.state.value
    );
    const hasImages = getHasImages(options);
    const adaptedOptions = adaptOptions(options, hasImages);
    const hasErrorMessage = getHasErrorMessage(error);

    return (
      <div
        className={getClassNames('dropdown-container', {
          'has-images': hasImages,
          'is-compact': isCompact,
          dirty: isDirty,
          error: error,
          focus: isOpen,
          valid: isValid,
        })}
      >
        {hasErrorMessage && <ErrorMessage errorMessage={error} />}
        {isValid && <Icon color="green" name={ICON_NAMES.CHECKMARK} />}
        {!hasImages && icon && <Icon name={icon} />}
        <Dropdown
          compact={isCompact}
          disabled={isDisabled || !adaptedOptions.length}
          icon={
            <Icon
              name={ICON_NAMES.CARET_DOWN}
              size={getPropOnCondition('small', isCompact)}
            />
          }
          noResultsMessage={noResultsText}
          onBlur={() => this.handleBlur(true)}
          onChange={this.handleChange}
          onClick={() => this.handleOpen(!isOpen)}
          open={isOpen}
          options={adaptedOptions}
          placeholder={getPropOnCondition(label, isCompact)}
          search={getOptionsWithSearch || isSearchable}
          selectOnBlur={false}
          selection
          upward={willOpenAbove}
          value={value}
        />
        {!hasImages && label && !isCompact && (
          <label onClick={() => this.handleOpen(true)}>{label}</label>
        )}
      </div>
    );
  }
}

Component.displayName = 'Dropdown';

Component.defaultProps = {
  error: false,
  getOptionsWithSearch: null,
  icon: null,
  isCompact: false,
  isDisabled: false,
  isSearchable: false,
  isValid: false,
  label: '',
  name: '',
  noResultsText: NO_RESULTS,
  onBlur: Function.prototype,
  onChange: Function.prototype,
  onFocus: Function.prototype,
  options: [],
  value: undefined,
  willOpenAbove: false,
  initialValue: null,
};

Component.propTypes = {
  /** Is the dropdown in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** A function called when a user searches the dropdown options. Returns the filtered options. */
  getOptionsWithSearch: PropTypes.func,
  /** Icon for the dropdown. Not displayed if options have images. */
  icon: PropTypes.string,
  /** The default value of the dropdown. */
  initialValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** A compact dropdown occupies less space. */
  isCompact: PropTypes.bool,
  /** A disabled dropdown does not allow user interaction. */
  isDisabled: PropTypes.bool,
  /** Is the dropdown searchable with keyboard input */
  isSearchable: PropTypes.bool,
  /** Is the dropdown in a valid state. */
  isValid: PropTypes.bool,
  /** The label for the dropdown. Not displayed if options have images. */
  label: PropTypes.string,
  /** The name for the dropdown. */
  name: PropTypes.string,
  /** The text to display when no results are returned from a searchable dropdown. */
  noResultsText: PropTypes.string,
  /**
   * Used internally by `Form` so ignored in the styleguide.
   * @ignore
   */
  onBlur: PropTypes.func,
  /** A function called when the dropdown value changes. */
  onChange: PropTypes.func,
  /**
   * Used internally by `PhoneInput` so ignored in the styleguide.
   * @ignore
   */
  onFocus: PropTypes.func,
  /** The options which the user can select. Dropdown is disabled if options is an empty array. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** Optional visible content for displaying the option in the dropdown menu differently from the text displayed in the input. */
      content: PropTypes.node,
      /** A list of one or more strings separated by commas indicating a set of source sizes for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSizes: PropTypes.string,
      /** A list of one or more strings separated by commas indicating a set of possible image sources for the user agent to use for the image. See [the MDN docs for more information](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img). */
      imageSrcSet: PropTypes.string,
      /** The source url of the image. */
      imageUrl: PropTypes.string,
      /** The indent level of an option. One of: 0, 1, 2, 3, 4, 5 */
      indent: PropTypes.oneOf([0, 1, 2, 3, 4, 5]),
      /** The visible label for the option. */
      label: PropTypes.string,
      /** The visible text for the option. */
      text: PropTypes.node.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /** The current value of the dropdown where it is consumed as a controlled component. */
  value: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Should the dropdown display upward */
  willOpenAbove: PropTypes.bool,
};
