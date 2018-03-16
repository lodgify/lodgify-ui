import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { adaptOptions } from './utils/adaptOptions';
import { getDefaultValue } from './utils/getDefaultValue';

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
    const { label, options, icon } = this.props;
    const optionsWithImages = adaptOptions(options);
    const defaultValue = getDefaultValue(optionsWithImages);
    return (
      <div
        className={getClassNames('dropdown-container', {
          dirty: value,
          'has-images': optionsWithImages,
          focus: isOpen,
        })}
      >
        {!optionsWithImages && icon && <Icon name={icon} size="large" />}
        <Dropdown
          defaultValue={defaultValue}
          onBlur={() => this.handleOpen(false)}
          onChange={this.handleChange}
          onClick={() => this.handleOpen(!isOpen)}
          open={isOpen}
          options={optionsWithImages || options}
          selection
        />
        {!optionsWithImages &&
          label && <label onClick={() => this.handleOpen(true)}>{label}</label>}
      </div>
    );
  }
}

Component.displayName = 'Dropdown';

Component.defaultProps = {
  label: '',
  name: '',
  onChange: Function.prototype,
  icon: null,
};

Component.propTypes = {
  /** Icon for the dropdown. Not displayed if options have images. */
  icon: PropTypes.string,
  /** The label for the dropdown. Not displayed if options have images. */
  label: PropTypes.string,
  /** The name for the dropdown. */
  name: PropTypes.string,
  /** A function called when the dropdown value changes. */
  onChange: PropTypes.func,
  /** The options which the user can select. */
  options: PropTypes.arrayOf(
    PropTypes.shape({
      /** The source url for the image to display with the option. */
      image: PropTypes.string,
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.any,
    })
  ).isRequired,
};
