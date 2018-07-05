import React from 'react';
import { List } from 'semantic-ui-react';

import { Icon } from 'elements/Icon';
import { Paragraph } from 'typography/Paragraph';

import { getPluralString } from './getPluralString';

export const getRoomInfo = ({ guestsNumber, bedsNumber, bathroomsNumber }) => [
  {
    name: getPluralString(guestsNumber, 'Guest', 'Guests'),
    icon: 'guests',
  },
  {
    name: getPluralString(bedsNumber, 'Bedroom', 'Bedrooms'),
    icon: 'double bed',
  },
  {
    name: getPluralString(bathroomsNumber, 'Bathroom', 'Bathrooms'),
    icon: 'bathroom',
  },
];

/**
 * @param  {Object}  roomFeature
 * @param  {Boolean} roomFeature.isUserOnMobile
 * @param  {Number}  roomFeature.guestsNumber
 * @param  {Number}  roomFeature.bedsNumber
 * @param  {Number}  roomFeature.bathroomsNumber
 * @return {String}
 */
export const getRoomFeaturesMarkup = ({
  /* eslint-disable react/prop-types */
  isUserOnMobile,
  guestsNumber,
  bedsNumber,
  bathroomsNumber,
  /* eslint-enable */
}) => (
  <List floated="left" horizontal>
    {getRoomInfo({ guestsNumber, bedsNumber, bathroomsNumber }).map(
      (infoItem, index) => (
        <List.Item key={index}>
          {isUserOnMobile ? (
            <Paragraph>{infoItem.name}</Paragraph>
          ) : (
            <Icon label={infoItem.name} name={infoItem.icon} size="small" />
          )}
        </List.Item>
      )
    )}
  </List>
);
