import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { Icon } from 'elements/Icon';

import { adaptOptions } from './utils/adaptOptions';
import { getDefaultValue } from './utils/getDefaultValue';
import { getHasImages } from './utils/getHasImages';

/**
 * A dropdown allows a user to select a value from a series of options.
 * @extends React.PureComponent
 */
export class Component extends PureComponent {
  state = {
    isOpen: false,
    value: '',
  };

  /**
   * Call the onChange function passed down via props
   * with the new state value
   */
  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    const { name, onChange } = this.props;
    prevValue !== value && onChange(name, value);
  }

  /**
   * Persist the value in component state
   */
  handleChange = (event, data) => {
    this.setState({ value: data.value, isOpen: false });
  };

  /**
   * Handle actions to change the isOpen state .
   */
  handleOpen = isOpen => this.setState({ isOpen });

  render() {
    const { isOpen, value } = this.state;
    const { icon, isDisabled, label, options } = this.props;
    const hasImages = getHasImages(options);
    const adaptedOptions = adaptOptions(options, hasImages);
    const defaultValue = getDefaultValue(adaptedOptions, hasImages, !!label);
    return (
      <div
        className={getClassNames('dropdown-container', {
          dirty: value,
          'has-images': hasImages,
          focus: isOpen,
        })}
      >
        {!hasImages && icon && <Icon name={icon} />}
        <Dropdown
          defaultValue={defaultValue}
          disabled={isDisabled || !adaptedOptions.length}
          icon={<Icon name="caret down" />}
          onBlur={() => this.handleOpen(false)}
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
  isDisabled: false,
  icon: null,
  label: '',
  name: '',
  onChange: Function.prototype,
  options: [],
};

Component.propTypes = {
  /** Icon for the dropdown. Not displayed if options have images. */
  icon: PropTypes.string,
  /** A disabled dropdown does not allow user interaction. */
  isDisabled: PropTypes.bool,
  /** The label for the dropdown. Not displayed if options have images. */
  label: PropTypes.string,
  /** The name for the dropdown. */
  name: PropTypes.string,
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
