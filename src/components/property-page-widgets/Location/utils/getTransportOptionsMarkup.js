import React from 'react';
import { Label } from 'semantic-ui-react';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { getFirstFourItems } from 'utils/get-first-four-items';
import { IconCard } from 'elements/IconCard';

import { getTransportOptionLabel } from './getTransportOptionLabel';

export const getTransportOptionsMarkup = transportOptions => (
  <Label.Group>
    {getFirstFourItems(transportOptions).map(
      ({ distance, iconName, label }, index) => (
        <IconCard
          isFilled
          key={buildKeyFromStrings(label, index)}
          label={getTransportOptionLabel(distance, label)}
          name={iconName}
        />
      )
    )}
  </Label.Group>
);
