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
    value: '',
  };

  // eslint-disable-next-line valid-jsdoc
  /**
   * Call the onChange function passed down via props
   * with the new state value
   */
  componentDidUpdate(prevProps, { value: prevValue }) {
    const { value } = this.state;
    const { name, onChange } = this.props;
    prevValue !== value && onChange(name, value);
  }

  // eslint-disable-next-line valid-jsdoc
  /**
   * Persist the value in component state
   */
  handleChange = (event, data) => {
    this.setState({ value: data.value });
  };

  render() {
    const { value } = this.state;
    const { label, options, icon } = this.props;
    const optionsWithImages = adaptOptions(options);
    const defaultValue = getDefaultValue(optionsWithImages);
    return (
      <div
        className={getClassNames('dropdown-container', {
          'has-images': optionsWithImages,
          'has-left-icon': icon,
        })}
      >
        <Dropdown
          className={getClassNames({
            dirty: value,
          })}
          className={value ? 'dirty' : ''}
          defaultValue={defaultValue}
          onChange={this.handleChange}
          options={optionsWithImages || options}
          placeholder={label}
          selection
        />
        {icon && <Icon name={icon} className="left-dropdown-icon" />}
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
  /** Icon for the dropdown */
  icon: PropTypes.string,
  /** The label for the dropdown. */
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
