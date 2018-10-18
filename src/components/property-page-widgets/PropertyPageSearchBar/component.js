import React from 'react';
import PropTypes from 'prop-types';

import { Button } from 'elements/Button';
import { ShowOnMobile } from 'layout/ShowOnMobile';
import { ShowOnDesktop } from 'layout/ShowOnDesktop';
import { CHECK_OUR_AVAILABILITY } from 'utils/default-strings';

import { SearchBar } from '../../general-widgets/SearchBar/index';

export const Component = ({
  guestsOptions,
  isFixed,
  summaryElement,
  modalTrigger,
  modalSummaryElement,
  searchButton,
}) => (
  <div className="property-page-searchbar">
    <ShowOnDesktop parent="div">
      <SearchBar
        guestsOptions={guestsOptions}
        isFixed={isFixed}
        searchButton={searchButton}
        summaryElement={summaryElement}
      />
    </ShowOnDesktop>
    <ShowOnMobile parent="div">
      <SearchBar
        guestsOptions={guestsOptions}
        isDisplayedAsModal
        isFixed={isFixed}
        modalSummaryElement={modalSummaryElement}
        modalTrigger={modalTrigger}
        summaryElement={summaryElement}
      />
    </ShowOnMobile>
  </div>
);

Component.displayName = 'PropertyPageSearchBar';

Component.defaultProps = {
  modalSummaryElement: null,
  modalTrigger: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  isFixed: true,
  searchButton: (
    <Button isPositionedRight isRounded>
      {CHECK_OUR_AVAILABILITY}
    </Button>
  ),
  summaryElement: null,
};
Component.propTypes = {
  guestsOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ).isRequired,
  /**
   * Is the Search Bar fixed to the bottom of the window
   * Used for demo purposes
   * @ignore
   */
  isFixed: PropTypes.bool,
  /** The summary element to display in the mobile modal  */
  modalSummaryElement: PropTypes.node,
  /** The element to be clicked to display the modal. */
  modalTrigger: PropTypes.node,
  /** The Search Button the Search Bar displays. */
  searchButton: PropTypes.node,
  /** The element to display in the fixed container */
  summaryElement: PropTypes.node,
  /** The dropdowns will open above the search bar. */
};
