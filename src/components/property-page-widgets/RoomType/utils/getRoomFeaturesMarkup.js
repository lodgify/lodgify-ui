import React from 'react';
import { List } from 'semantic-ui-react';

import { GridColumn } from 'layout/GridColumn';
import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

/**
 * @param  {boolean}   showIcons
 * @param  {Object[]}  features
 * @return {Object}
 */
export const getRoomFeaturesMarkup = (showIcons, features) => (
  <GridColumn
    as={List}
    className="only-horizontal-padding"
    floated="left"
    horizontal
  >
    {features.map(({ labelText, iconName }, index) => (
      <List.Item key={index}>
        {showIcons ? (
          <Paragraph>{labelText}</Paragraph>
        ) : (
          <Icon labelText={labelText} name={iconName} size="small" />
        )}
      </List.Item>
    ))}
  </GridColumn>
);
