import React from 'react';
import { Menu, Accordion } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';

import { getLogoMarkup } from './getLogoMarkup';
import { getLinkMarkup } from './getLinkMarkup';

/**
 * @param  {Object}   props
 * @param  {number}   props.activeNavigationItemIndex
 * @param  {string}   props.logoSizes
 * @param  {string}   props.logoSrc
 * @param  {string}   props.logoSrcSet
 * @param  {string}   props.logoText
 * @param  {Object[]} props.navigationItems
 * @return {Object}
 */
export const getHiddenMenuMarkup = ({
  /* eslint-disable react/prop-types */
  activeNavigationItemIndex,
  logoSizes,
  logoSrc,
  logoSrcSet,
  logoText,
  navigationItems,
  /* eslint-enable react/prop-types */
}) => (
  <Menu.Item className="no-underline">
    <Modal isFullscreen trigger={<Icon name={ICON_NAMES.BARS} />}>
      {getLogoMarkup(logoText, logoSrc, logoSizes, logoSrcSet)}
      <Menu text vertical>
        {navigationItems.map(({ subItems, text, href }, index) =>
          size(subItems) ? (
            <Accordion
              as={Menu.Item}
              key={buildKeyFromStrings(text, index)}
              panels={[
                {
                  title: {
                    content: text,
                    key: buildKeyFromStrings(text, index),
                  },
                  content: {
                    content: subItems.map(({ text, href }, index) =>
                      getLinkMarkup(
                        text,
                        href,
                        index,
                        activeNavigationItemIndex
                      )
                    ),
                    key: buildKeyFromStrings(index, text),
                  },
                },
              ]}
            />
          ) : (
            getLinkMarkup(text, href, index, activeNavigationItemIndex)
          )
        )}
      </Menu>
    </Modal>
  </Menu.Item>
);
