import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import classnames from 'classnames';

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
  willOpenAbove,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popup
      className="counter-dropdown"
      content={
        <FlexContainer flexDirection="row" justifyContent="space-between">
          <Paragraph>{counterLabel}</Paragraph>
          <Counter
            max={maximumCounterValue}
            name={counterName}
            onChange={onChange}
            value={counterValue}
          />
        </FlexContainer>
      }
      on="click"
      onClose={() => setIsOpen(false)}
      onOpen={() => setIsOpen(true)}
      open={isOpen}
      position={willOpenAbove ? 'top left' : 'bottom left'}
      text={dropdownLabel}
      trigger={
        <div className="dropdown-container" role="button">
          <div
            className={classnames(
              'ui selection dropdown',
              'counter-dropdown-trigger',
              {
                active: isOpen,
              }
            )}
          >
            {dropdownLabel}
            <Icon name={ICON_NAMES.CARET_DOWN}></Icon>
          </div>
        </div>
      }
    />
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
  willOpenAbove: false,
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
  /** Will the dropdown open above or below the trigger */
  willOpenAbove: PropTypes.bool,
};
