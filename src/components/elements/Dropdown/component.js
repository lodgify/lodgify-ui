import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
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
    prevValue !== value && this.props.onChange(value);
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
    const { label, options } = this.props;
    const optionsWithImages = adaptOptions(options);
    const defaultValue = getDefaultValue(optionsWithImages);
    return (
      <Dropdown
        className={getClassNames({
          dirty: value,
          hasImages: optionsWithImages,
        })}
        defaultValue={defaultValue}
        onChange={this.handleChange}
        options={optionsWithImages || options}
        placeholder={label}
        selection
      />
    );
  }
}

Component.displayName = 'Dropdown';

Component.defaultProps = {
  label: '',
  onChange: () => {},
};

Component.propTypes = {
  /** The label for the dropdown. */
  label: PropTypes.string,
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
