import React from 'react';
import { List } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param  {Boolean} showIcons
 * @param  {Object[]}  features
 * @return {Object}
 */
export const getRoomFeaturesMarkup = (showIcons, features) => (
  <List floated="left" horizontal>
    {features.map((infoItem, index) => (
      <List.Item key={index}>
        {showIcons ? (
          <Paragraph>{infoItem.label}</Paragraph>
        ) : (
          <Icon label={infoItem.label} name={infoItem.iconName} size="small" />
        )}
      </List.Item>
    ))}
  </List>
);
