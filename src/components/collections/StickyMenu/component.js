import React, { useState, useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';

import { testidFactory } from 'utils/testid';

import { useScroll } from '../../../hooks/useScroll';
import { HorizontalMenu } from '../HorizontalMenu';

import { getActiveOnScroll } from './utils/getActiveOnScroll';

const TEST_ID_PREFIX = 'stickyMenu';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ stickyMenuItems }) => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    if (stickyMenuItems.length > 0) {
      setActiveItem(stickyMenuItems[0].text);
    }
  }, [stickyMenuItems.length]);

  const activeItemOnScroll = useScroll(
    /* istanbul ignore next */
    () => {
      setActiveItem('');
      return getActiveOnScroll(stickyMenuItems);
    },
    0
  );

  const scrollToComponentOnMenuClick = ({ link, text }) => {
    document.querySelector(link).scrollIntoView({
      behavior: 'smooth',
    });

    window.history.pushState('', '', link);

    setActiveItem(text);
  };
  const items = useMemo(
    () =>
      stickyMenuItems.map(item => ({
        ...item,
        isActive: item.text === activeItemOnScroll || item.text === activeItem,
      })),
    [activeItemOnScroll, activeItem, stickyMenuItems.length]
  );

  return (
    <HorizontalMenu
      className="sticky-menu"
      data-testid={testid()}
      items={items}
      onItemClick={scrollToComponentOnMenuClick}
    />
  );
};

Component.displayName = 'StickyMenu';

Component.defaultProps = {
  stickyMenuItems: [],
};

Component.propTypes = {
  /** The sticky menu items to display. */
  stickyMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      /** The link reference to be set as href. */
      link: PropTypes.string.isRequired,
      /** The text displayed as a menu item. */
      text: PropTypes.string.isRequired,
    })
  ),
};
