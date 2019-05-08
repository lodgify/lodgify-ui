import 'semantic-ui-styles/button.less';
import 'semantic-ui-styles/label.less';
import React from 'react';
import { Label, Button } from 'semantic-ui-react';

import { Icon, ICON_NAMES } from 'elements/Icon';

export const nextItem = (
  <Button circular content={null}>
    <Icon isColorInverted name={ICON_NAMES.CHEVRON_RIGHT} />
  </Button>
);

export const pageItem = <Label circular content={null} empty size="tiny" />;

export const prevItem = (
  <Button circular content={null}>
    <Icon isColorInverted name={ICON_NAMES.CHEVRON_LEFT} />
  </Button>
);
