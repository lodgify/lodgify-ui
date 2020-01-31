import React, { useState, useEffect, useMemo } from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';

import { testidFactory } from 'utils/testid';

import { useScroll } from '../../../hooks/useScroll';
import { HorizontalMenu } from '../HorizontalMenu';

import { getActiveOnScroll } from './utils/getActiveOnScroll';

const TEST_ID_PREFIX = 'stickyMenu';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ className, stickyMenuItems, hasOverflow }) => {
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    if (stickyMenuItems.length > 0) {
      setActiveItem(stickyMenuItems[0].text);
    }

    if (activeItemOnScroll) {
      setActiveItem(activeItemOnScroll);
    }
  });

  const activeItemOnScroll = useScroll(
    /* istanbul ignore next */
    () => {
      return getActiveOnScroll(stickyMenuItems);
    },
    0,
    0
  );

  const scrollToComponentOnMenuClick = ({ link, text }, event) => {
    event.preventDefault();

    setActiveItem(text);

    document.querySelector(link).scrollIntoView({
      behavior: 'smooth',
    });

    window.history.pushState('', '', link);
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
      className={classnames(className, 'sticky-menu')}
      data-testid={testid()}
      hasOverflow={hasOverflow}
      items={items}
      onItemClick={scrollToComponentOnMenuClick}
    />
  );
};

Component.displayName = 'StickyMenu';

Component.defaultProps = {
  className: null,
  hasOverflow: false,
  stickyMenuItems: [],
};

Component.propTypes = {
  /** Custom className for the sticky menu. */
  className: PropTypes.string,
  /** Is the component allowing overflow. */
  hasOverflow: PropTypes.bool,
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
