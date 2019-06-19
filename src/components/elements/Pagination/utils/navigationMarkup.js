import React from 'react';
import { Button } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

export const nextItem = (
  <Button circular content={null}>
    <Icon isColorInverted name={ICON_NAMES.CHEVRON_RIGHT} />
  </Button>
);

export const previousItem = (
  <Button circular content={null}>
    <Icon isColorInverted name={ICON_NAMES.CHEVRON_LEFT} />
  </Button>
);

export const nextItemOutlined = (
  <Button basic circular className="has-outline" content={null}>
    <Icon name={ICON_NAMES.CHEVRON_RIGHT} />
  </Button>
);

export const previousItemOutlined = (
  <Button basic circular className="has-outline" content={null}>
    <Icon name={ICON_NAMES.CHEVRON_LEFT} />
  </Button>
);
