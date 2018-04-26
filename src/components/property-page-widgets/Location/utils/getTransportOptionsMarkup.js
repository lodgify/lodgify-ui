import React from 'react';
import { Label } from 'semantic-ui-react';

import { getUniqueKey } from 'lib/get-unique-key';
import { getFirstFourItems } from 'lib/get-first-four-items';
import { IconCard } from 'elements/IconCard';

import { getTransportOptionLabel } from './getTransportOptionLabel';

export const getTransportOptionsMarkup = transportOptions => (
  <Label.Group>
    {getFirstFourItems(transportOptions).map(
      ({ distance, iconName, label }, index) => (
        <IconCard
          isFilled
          key={getUniqueKey(label, index)}
          label={getTransportOptionLabel(distance, label)}
          name={iconName}
        />
      )
    )}
  </Label.Group>
);
