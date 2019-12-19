import React, { useState, useRef, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { ShowOn } from 'layout/ShowOn';
import { Link } from 'elements/Link';
import { Icon } from 'elements/Icon';
import { FlexContainer } from 'layout/FlexContainer';
import { testidFactory } from 'utils/testid';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';

import { useScroll } from '../../../hooks/useScroll';

import { RIGHT_END, LEFT_END } from './constants';
import { getActiveOnScroll } from './utils/getActiveOnScroll';

const TEST_ID_PREFIX = 'stickyMenu';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ stickyMenuItems }) => {
  const [activeItem, setActiveItem] = useState('');
  const menuComponent = useRef();

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

  const scrollToComponentOnMenuClick = (link, text) => {
    document.querySelector(link).scrollIntoView({
      behavior: 'smooth',
    });

    window.history.pushState('', '', link);

    setActiveItem(text);
  };

  const scrollMenuRight = () => {
    menuComponent.current.scrollLeft = RIGHT_END;
  };

  const scrollMenuLeft = () => {
    menuComponent.current.scrollLeft = LEFT_END;
  };

  return (
    <FlexContainer
      alignItems="center"
      className="sticky-menu"
      data-testid={testid()}
      justifyContent="center"
    >
      <ShowOn mobile tablet>
        <div
          className="arrow left"
          data-testid={testid('arrow-left')}
          onClick={() => scrollMenuLeft()}
        >
          <Icon name="chevron left" />
        </div>
      </ShowOn>
      <div
        className="menu-wrapper"
        data-testid={testid('menu')}
        ref={menuComponent}
      >
        <Menu>
          {stickyMenuItems.map(({ text, link }, index) => (
            <Menu.Item
              active={activeItem === text || activeItemOnScroll === text}
              key={buildKeyFromStrings(text, index)}
              name={text}
              onClick={(event, data) =>
                scrollToComponentOnMenuClick(link, data.name)
              }
            >
              <Link>{text}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
      <ShowOn mobile tablet>
        <div
          className="arrow right"
          data-testid={testid('arrow-right')}
          onClick={() => scrollMenuRight()}
        >
          <Icon name="chevron right" />
        </div>
      </ShowOn>
    </FlexContainer>
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
