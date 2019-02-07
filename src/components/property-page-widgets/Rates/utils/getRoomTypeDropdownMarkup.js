import React, { Fragment } from 'react';

import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Divider } from 'elements/Divider';
import { Dropdown } from 'inputs/Dropdown';
import { FlexContainer } from 'layout/FlexContainer';
import { Paragraph } from 'typography/Paragraph';

import { getStringWithColonSuffix } from './getStringWithColonSuffix';

/**
 * @param  {boolean}  isShowingPlaceholder
 * @param  {Object[]} options
 * @param  {Function} onChange
 * @param  {string}   roomTypeInputLabel
 * @param  {string|boolean|number} roomTypesValue
 * @return {Object}
 */
export const getRoomTypeDropdownMarkup = (
  isShowingPlaceholder,
  options,
  onChange,
  roomTypeInputLabel,
  roomTypesValue
) =>
  isShowingPlaceholder ? (
    <Fragment>
      <Divider />
      <TextPlaceholder length="medium" />
      <TextPlaceholder length="medium" />
      <Divider />
    </Fragment>
  ) : (
    <Fragment>
      <FlexContainer alignItems="center" flexWrap="wrap">
        <Paragraph weight="heavy">
          {getStringWithColonSuffix(roomTypeInputLabel)}
        </Paragraph>
        <Dropdown
          currentValue={roomTypesValue}
          onChange={onChange}
          options={options}
        />
      </FlexContainer>
      <Divider size="small" />
    </Fragment>
  );
