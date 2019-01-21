import React from 'react';
import { Menu } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Button } from 'elements/Button';
import { ShowOn } from 'layout/ShowOn';
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
  <ShowOn
    computer
    parent={Menu.Menu}
    parentProps={{ position: 'right' }}
    tablet
    widescreen
  >
    {navigationItems.map(({ subItems, text, href }, index) =>
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
          <Menu.Item
            active={index === activeNavigationItemIndex}
            href={href}
            key={buildKeyFromStrings(text, index)}
            link
          >
            {text}
          </Menu.Item>
        </Submenu>
      ) : (
        getLinkMarkup(text, href, index, activeNavigationItemIndex)
      )
    )}
    {primaryCTA && (
      <Menu.Item className="no-underline" link>
        <Button isRounded onClick={primaryCTA.onClick}>
          {primaryCTA.text}
        </Button>
      </Menu.Item>
    )}
  </ShowOn>
);