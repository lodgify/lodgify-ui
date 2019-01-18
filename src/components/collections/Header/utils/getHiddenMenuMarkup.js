import React from 'react';
import { Menu, Accordion } from 'semantic-ui-react';
import { size } from 'lodash';

import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { Icon, ICON_NAMES } from 'elements/Icon';
import { Modal } from 'elements/Modal';
import { SearchBar } from 'general-widgets/SearchBar';
import { ShowOn } from 'layout/ShowOn';

import { hasSearchBarOptions } from './hasSearchBarOptions';
import { getLogoMarkup } from './getLogoMarkup';
import { getLinkMarkup } from './getLinkMarkup';

/**
 * @param  {Object}   props
 * @param  {number}   props.activeNavigationItemIndex
 * @param  {boolean}  props.isSearchBarModalOpen
 * @param  {string}   props.logoSrc
 * @param  {string}   props.logoText
 * @param  {Object[]} props.navigationItems
 * @param  {Function} props.onCloseSearchBarModal
 * @param  {Function} props.searchBarGetIsDayBlocked
 * @param  {Object[]} props.searchBarGuestsOptions
 * @param  {Object[]} props.searchBarLocationOptions
 * @param  {string}   props.searchBarModalHeadingText
 * @param  {Function} props.searchBarOnChangeInput
 * @param  {Function} props.searchBarOnSubmit
 * @param  {Object}   props.searchBarSearchButton
 * @param  {boolean}  isHiddenMenuShowingInAllDevices
 * @return {Object}
 */
export const getHiddenMenuMarkup = (
  {
    /* eslint-disable react/prop-types */
    activeNavigationItemIndex,
    isSearchBarModalOpen,
    logoSizes,
    logoSrc,
    logoSrcSet,
    logoText,
    navigationItems,
    onCloseSearchBarModal,
    searchBarDateRangePickerLocaleCode,
    searchBarGetIsDayBlocked,
    searchBarGuestsOptions,
    searchBarLocationOptions,
    searchBarModalHeadingText,
    searchBarOnChangeInput,
    searchBarOnSubmit,
    searchBarSearchButton,
    /* eslint-enable react/prop-types */
  },
  isHiddenMenuShowingInAllDevices
) => (
  <ShowOn
    computer={isHiddenMenuShowingInAllDevices}
    mobile
    parent={Menu.Menu}
    parentProps={{ position: 'right' }}
    tablet={isHiddenMenuShowingInAllDevices}
    widescreen={isHiddenMenuShowingInAllDevices}
  >
    {hasSearchBarOptions(searchBarGuestsOptions, searchBarLocationOptions) && (
      <Menu.Item>
        <SearchBar
          dateRangePickerLocaleCode={searchBarDateRangePickerLocaleCode}
          getIsDayBlocked={searchBarGetIsDayBlocked}
          guestsOptions={searchBarGuestsOptions}
          isDisplayedAsModal
          isModalOpen={isSearchBarModalOpen}
          locationOptions={searchBarLocationOptions}
          modalHeadingText={searchBarModalHeadingText}
          onChangeInput={searchBarOnChangeInput}
          onCloseModal={onCloseSearchBarModal}
          onSubmit={searchBarOnSubmit}
          searchButton={searchBarSearchButton}
        />
      </Menu.Item>
    )}
    <Menu.Item>
      <Modal isFullscreen trigger={<Icon name={ICON_NAMES.BARS} />}>
        <Menu text vertical>
          {getLogoMarkup(logoText, logoSrc, logoSizes, logoSrcSet)}
          {navigationItems.map(({ subItems, text, href }, index) =>
            size(subItems) ? (
              <Accordion
                as={Menu.Item}
                key={buildKeyFromStrings(text, index)}
                panels={[
                  {
                    title: {
                      content: (
                        <Menu.Item
                          active={index === activeNavigationItemIndex}
                          href={href}
                          key={buildKeyFromStrings(text, index)}
                          link
                        >
                          {text}
                        </Menu.Item>
                      ),
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
  </ShowOn>
);
