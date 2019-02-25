import React, { Fragment } from 'react';
import { Menu } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Button } from 'elements/Button';
import { Submenu } from 'elements/Submenu';

import { getSubmenuPointing } from './getSubmenuPointing';
import { getLinkMarkup } from './getLinkMarkup';

/**
 * @param  {Object}   props
 * @param  {number}   props.activeNavigationItemIndex
 * @param  {Object[]} props.navigationItems
 * @param  {Object}   props.primaryCTA
 * @return {Object}
 */
export const getStandardMenuMarkup = ({
  /* eslint-disable react/prop-types */
  activeNavigationItemIndex,
  navigationItems,
  primaryCTA,
  /* eslint-enable react/prop-types */
}) => (
  <Fragment>
    {navigationItems.map(({ subItems, text, href, target }, index) =>
      size(subItems) > 0 ? (
        <Submenu
          isMenuItem
          isSimple
          isTriggerUnderlined={index === activeNavigationItemIndex}
          isTriggeredOnHover
          items={subItems}
          key={buildKeyFromStrings(text, index)}
          pointing={getSubmenuPointing(
            index,
            size(navigationItems),
            !!primaryCTA
          )}
        >
          {text}
        </Submenu>
      ) : (
        getLinkMarkup(text, href, target, index, activeNavigationItemIndex)
      )
    )}
    {primaryCTA && (
      <Menu.Item className="no-underline" link>
        <Button isRounded onClick={primaryCTA.onClick}>
          {primaryCTA.text}
        </Button>
      </Menu.Item>
    )}
  </Fragment>
);
