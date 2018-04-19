import React from 'react';
import { Label, Button } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';

export const nextItem = (
  <Button circular content={null}>
    <Icon isColorInverted name="chevron right" />
  </Button>
);

export const pageItem = <Label empty circular size="tiny" content={null} />;

export const prevItem = (
  <Button circular content={null}>
    <Icon isColorInverted name="chevron left" />
  </Button>
);
