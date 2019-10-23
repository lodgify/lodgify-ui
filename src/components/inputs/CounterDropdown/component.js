import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import getClassNames from 'classnames';

import { GUESTS } from 'utils/default-strings';
import { Counter } from 'inputs/Counter';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { FlexContainer } from 'layout/FlexContainer';
import { Paragraph } from 'typography/Paragraph';

/**
 * A counter dropdown allows a user to select a value from a counter input.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  counterLabel,
  counterName,
  counterValue,
  dropdownLabel,
  maximumCounterValue,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={getClassNames('dropdown-container', 'counter-dropdown', {
        focus: isOpen,
      })}
    >
      <Dropdown
        clearable
        icon={<Icon name={ICON_NAMES.CARET_DOWN} />}
        onBlur={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        open={isOpen}
        options={[
          <FlexContainer flexDirection="row" justifyContent="space-between">
            <Paragraph>{counterLabel}</Paragraph>
            <Counter
              max={maximumCounterValue}
              name={counterName}
              onChange={onChange}
              value={counterValue}
            />
          </FlexContainer>,
        ]}
        selection
        text={dropdownLabel}
      />
    </div>
  );
};

Component.displayName = 'CounterDropdown';

Component.defaultProps = {
  counterLabel: GUESTS,
  counterName: undefined,
  counterValue: undefined,
  dropdownLabel: GUESTS,
  maximumCounterValue: undefined,
  onChange: undefined,
};

Component.propTypes = {
  /** The label that is positioned next to the counter. */
  counterLabel: PropTypes.string,
  /** The name for the counter. */
  counterName: PropTypes.string,
  /** The value of the counter. Minimum 0. */
  counterValue: PropTypes.number,
  /** The text that populates the dropdown's label. */
  dropdownLabel: PropTypes.string,
  /** The maximum value the counter accepts. */
  maximumCounterValue: PropTypes.number,
  /** A function called when the counter value changes. */
  onChange: PropTypes.func,
};
