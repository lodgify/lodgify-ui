import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Dropdown } from 'inputs/Dropdown';

import { getOptionsWithSearch } from '../getOptionsWithSearch';
import { getAllOptions } from '../getAllOptions';

export class Component extends PureComponent {
  handleChange = (name, value) => this.props.onChange(value);

  render = () => {
    const { onFocus, options, value } = this.props;

    return (
      <Dropdown
        getOptionsWithSearch={getOptionsWithSearch}
        isClearable={false}
        isFluid
        onChange={this.handleChange}
        onFocus={onFocus}
        options={getAllOptions(options)}
        value={value}
      />
    );
  };
}

Component.defaultProps = {
  value: undefined,
};

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  value: PropTypes.string,
};

Component.displayName = 'CountrySelectComponent';
