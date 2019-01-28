import React, { Fragment } from 'react';

import { Icon, ICON_NAMES } from 'elements/Icon';
import { GridColumn } from 'layout/GridColumn';
import { Divider } from 'elements/Divider';

import { getLabelAndValueString } from './getLabelAndValueString';

/**
 * @param {string} checkInTimeLabel
 * @param {string} checkInTime
 * @param {string} checkOutTimeLabel
 * @param {string} checkOutTime
 * @return {Object}
 */
export const getCheckInAndCheckOutMarkup = (
  checkInTimeLabel,
  checkInTime,
  checkOutTimeLabel,
  checkOutTime
) =>
  (!!checkInTime || !!checkOutTime) && (
    <GridColumn computer={9} tablet={7}>
      {!!checkInTime && (
        <Fragment>
          <Icon
            labelText={getLabelAndValueString(checkInTimeLabel, checkInTime)}
            name={ICON_NAMES.CHECK_IN}
          />
          <Divider />
        </Fragment>
      )}
      {!!checkOutTime && (
        <Icon
          labelText={getLabelAndValueString(checkOutTimeLabel, checkOutTime)}
          name={ICON_NAMES.CHECK_OUT}
        />
      )}
    </GridColumn>
  );
