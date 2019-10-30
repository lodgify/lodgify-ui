import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import classnames from 'classnames';

import { getHasErrorMessage } from 'utils/get-has-error-message';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { NO_RESULTS } from 'utils/default-strings';
import { getPropOnCondition } from 'utils/get-prop-on-condition';
import { useIsOpen } from 'hooks/useIsOpen';

import { ErrorMessage } from '../ErrorMessage';

import { adaptOptions } from './utils/adaptOptions';
import { getHasImages } from './utils/getHasImages';

export const Component = ({
  options,
  isCompact,
  value,
  error,
  isValid,
  icon,
  isClearable,
  isDisabled,
  noResultsText,
  getOptionsWithSearch,
  isSearchable,
  label,
  willOpenAbove,
  onChange,
  name,
}) => {
  const [isDropdownOpen, toggleDropdownOpen] = useIsOpen(false);
  const hasImages = useMemo(() => getHasImages(options), [options]);
  const adaptedOptions = useMemo(() => adaptOptions(options, hasImages), [
    options,
  ]);
  const hasErrorMessage = useMemo(() => getHasErrorMessage(error), [error]);
  const change = useCallback(({}, { value: newValue }) => {
    onChange(name, newValue), [];
  });

  const dropDownIcon = useMemo(
    () =>
      (value !== undefined || value !== null) && isClearable
        ? ICON_NAMES.CLOSE
        : ICON_NAMES.CARET_DOWN,
    [value, isClearable]
  );

  return (
    <div
      className={classnames('dropdown-container', {
        'has-images': hasImages,
        'is-compact': isCompact,
        dirty: value !== undefined || value !== null,
        error: error,
        focus: isDropdownOpen,
        valid: isValid,
      })}
    >
      {hasErrorMessage && <ErrorMessage errorMessage={error} />}
      {isValid && <Icon color="green" name={ICON_NAMES.CHECKMARK} />}
      {!hasImages && icon && <Icon name={icon} />}
      <Dropdown
        clearable={isClearable}
        compact={isCompact}
        disabled={isDisabled || !adaptedOptions.length}
        icon={
          <Icon
            name={dropDownIcon}
            size={getPropOnCondition('small', isCompact)}
          />
        }
        noResultsMessage={noResultsText}
        onChange={change}
        onClose={toggleDropdownOpen}
        onOpen={toggleDropdownOpen}
        options={adaptedOptions}
        placeholder={label}
        search={getOptionsWithSearch || isSearchable}
        selectOnBlur={false}
        selection
        upward={willOpenAbove}
        value={value}
      />
    </div>
  );
};

Component.displayName = 'Dropdown';

Component.defaultProps = {
  error: false,
  getOptionsWithSearch: null,
  icon: null,
  isClearable: true,
  isCompact: false,
  isDisabled: false,
  isSearchable: false,
  isValid: false,
  label: '',
  name: '',
  noResultsText: NO_RESULTS,
  onChange: Function.prototype,
  options: [],
  value: undefined,
  willOpenAbove: false,
};

Component.propTypes = {
  /** Is the dropdown in an error state. */
  error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  /** A function called when a user searches the dropdown options. Returns the filtered options. */
  getOptionsWithSearch: PropTypes.func,
  /** Icon for the dropdown. Not displayed if options have images. */
  icon: PropTypes.string,
  /** A dropdown is clearable  */
  isClearable: PropTypes.bool,
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
  /** A function called when the dropdown value changes. */
  onChange: PropTypes.func,
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
