import React, { Fragment } from 'react';
import { Menu, Accordion } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { SearchBar } from 'general-widgets/SearchBar';
import { Modal } from 'elements/Modal';
import { Icon, ICON_NAMES } from 'elements/Icon';

import { hasSearchBarOptions } from './hasSearchBarOptions';
import { getLogoMarkup } from './getLogoMarkup';
import { getLinkMarkup } from './getLinkMarkup';

/**
 * @param  {Object} props
 * @param  {number} props.activeNavigationItemIndex
 * @param  {string} props.logoSrc
 * @param  {string} props.logoText
 * @param  {Object[]} props.navigationItems
 * @param  {Object[]} props.searchBarGuestsOptions
 * @param  {Object[]} props.searchBarLocationOptions
 * @return {Object}
 */
export const getMobileMenuMarkup = ({
  /* eslint-disable react/prop-types */
  activeNavigationItemIndex,
  logoSrc,
  logoText,
  navigationItems,
  searchBarGuestsOptions,
  searchBarLocationOptions,
  /* eslint-enable react/prop-types */
}) => (
  <Fragment>
    {hasSearchBarOptions(searchBarGuestsOptions, searchBarLocationOptions) && (
      <Menu.Item>
        <SearchBar
          guestsOptions={searchBarGuestsOptions}
          isDisplayedAsModal
          locationOptions={searchBarLocationOptions}
        />
      </Menu.Item>
    )}
    <Menu.Item>
      <Modal isFullscreen trigger={<Icon name={ICON_NAMES.BARS} />}>
        <Menu text vertical>
          {getLogoMarkup(logoSrc, logoText)}
          {navigationItems.map(
            ({ subItems, text, href }, index) =>
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
  </Fragment>
);
