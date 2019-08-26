import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Message } from 'elements/Message';
import { Link } from 'elements/Link';
import { Divider } from 'elements/Divider';
import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Pagination } from 'elements/Pagination';
import { Heading } from 'typography/Heading';
import { Paragraph } from 'typography/Paragraph';
import { size } from 'utils/size';
import { Dropdown } from 'inputs/Dropdown';
import { FlexContainer } from 'layout/FlexContainer';
import { PropertySearchResult } from 'general-widgets/PropertySearchResult';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { RESULTS } from 'utils/default-strings';
import { withResponsive } from 'utils/with-responsive';

import { PLACEHOLDERS, NUMBER_OF_PROPERTIES_PER_PAGE } from './constants';
import { getNumberOfPages } from './utils/getNumberOfPages';
import { getPropertySearchResultsToDisplay } from './utils/getPropertySearchResultsToDisplay';
import { getFirstPropertyPositionOfActivePage } from './utils/getFirstPropertyPositionOfActivePage';
import { getLastPropertyPositionOfActivePage } from './utils/getLastPropertyPositionOfActivePage';
import { getShowingResultsText } from './utils/getShowingResultsText';
import { getFlexDirection } from './utils/getFlexDirection';
import { getResultsCountText } from './utils/getResultsCountText';

/**
 * The standard widget for displaying a list of property search results.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
class Component extends PureComponent {
  state = {
    activePage: 1,
  };

  componentDidUpdate = (
    { activePage: previousControlledActivePage },
    { activePage: previousInternalActivePage }
  ) => {
    const { activePage: controlledActivePage } = this.props;

    if (controlledActivePage !== previousControlledActivePage)
      return this.setState({ activePage: controlledActivePage });

    const { activePage: internalActivePage } = this.state;

    if (internalActivePage === previousInternalActivePage) return;

    this.props.onChange(internalActivePage);
  };

  handleOnPageChange = (event, { activePage }) => this.setState({ activePage });

  render = () => {
    const {
      activePage = this.state.activePage,
      dropdownLabel,
      dropdownOnChange,
      dropdownOptions,
      dropdownValue,
      isShowingPlaceholder,
      isUserOnMobile,
      messageButtonOnClick,
      messageButtonText,
      messageText,
      propertySearchResults,
      resultsCountText,
      renderResultsCountText,
      renderShowingResultsText,
    } = this.props;
    const propertySearchResultsToDisplay = getPropertySearchResultsToDisplay(
      activePage,
      propertySearchResults
    );
    const { length } = propertySearchResults;

    return (
      <div className="property-search-result-list">
        <div className="result-list-container">
          <FlexContainer alignItems="center" justifyContent="space-between">
            {isShowingPlaceholder ? (
              <FlexContainer>
                <TextPlaceholder length="short" />
              </FlexContainer>
            ) : (
              <Heading size="small">
                {renderResultsCountText(length, resultsCountText)}
              </Heading>
            )}
            {!!size(dropdownOptions) && (
              <Dropdown
                isCompact
                label={dropdownLabel}
                onChange={dropdownOnChange}
                options={dropdownOptions}
                value={dropdownValue}
              />
            )}
          </FlexContainer>
          {messageText ? (
            <Message isTextAlignedCenter={isUserOnMobile}>
              <FlexContainer
                alignItems="center"
                flexDirection={getFlexDirection(isUserOnMobile)}
                justifyContent="space-between"
              >
                {messageText}
                <Link isFluid={isUserOnMobile} onClick={messageButtonOnClick}>
                  {messageButtonText}
                </Link>
              </FlexContainer>
            </Message>
          ) : (
            <Divider size="small" />
          )}
          <FlexContainer flexWrap="wrap">
            {(isShowingPlaceholder
              ? PLACEHOLDERS
              : propertySearchResultsToDisplay
            ).map((propertySearchResult, index) => (
              <PropertySearchResult
                isShowingPlaceholder={isShowingPlaceholder}
                key={buildKeyFromStrings(
                  propertySearchResult.propertyName,
                  index
                )}
                {...propertySearchResult}
              />
            ))}
          </FlexContainer>
          {length > NUMBER_OF_PROPERTIES_PER_PAGE && (
            <FlexContainer
              alignItems="center"
              flexDirection="column"
              flexWrap="wrap"
            >
              <Pagination
                activePage={activePage}
                isShowingPageNumbers
                onPageChange={this.handleOnPageChange}
                totalPages={getNumberOfPages(length)}
              />
              <Paragraph>
                {renderShowingResultsText(
                  getFirstPropertyPositionOfActivePage(activePage),
                  getLastPropertyPositionOfActivePage(activePage, length),
                  length
                )}
              </Paragraph>
            </FlexContainer>
          )}
        </div>
      </div>
    );
  };
}

Component.displayName = 'PropertySearchResultList';

Component.defaultProps = {
  activePage: undefined,
  dropdownLabel: null,
  dropdownOnChange: Function.prototype,
  dropdownOptions: null,
  dropdownValue: undefined,
  isShowingPlaceholder: false,
  messageButtonOnClick: Function.prototype,
  messageButtonText: null,
  messageText: null,
  onChange: Function.prototype,
  propertySearchResults: [],
  renderResultsCountText: getResultsCountText,
  renderShowingResultsText: getShowingResultsText,
  resultsCountText: RESULTS,
};

Component.propTypes = {
  /** Index of the currently active page. */
  activePage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** The label for the dropdown input. */
  dropdownLabel: PropTypes.string,
  /** A function called when the dropdown input value changes. */
  dropdownOnChange: PropTypes.func,
  /** The options which the user can select in the dropdown input. */
  // eslint-disable-next-line react/no-unused-prop-types
  dropdownOptions: PropTypes.arrayOf(
    PropTypes.shape({
      /** The content to show in the dropdown. Can be different from `text`. */
      content: PropTypes.node,
      /** The visible text for the option. */
      text: PropTypes.string.isRequired,
      /** The underlying value for the option. */
      value: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.number,
        PropTypes.string,
      ]),
    })
  ),
  /** The current value of the dropdown input where it is consumed as a controlled component. */
  dropdownValue: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
  ]),
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /**
   * Is the user on a mobile device.
   * Provided by `withResponsive` so ignored in the styleguide.
   * @ignore
   */
  isUserOnMobile: PropTypes.bool.isRequired,
  /** Function called when the clickable button in the message is clicked. */
  messageButtonOnClick: PropTypes.func,
  /** Text to show as a clickable button in the message above the search results. */
  messageButtonText: PropTypes.string,
  /** Text to show as a message above the search results. */
  messageText: PropTypes.string,
  /**
   * A function called each time the page is changed.
   * @param  {number} activePage
   */
  onChange: PropTypes.func,
  /** An array of [`PropertySearchResult`](#/PropertySearchResult) props objects. */
  propertySearchResults: PropTypes.arrayOf(PropTypes.object),
  /**
   * Function called for creating text that shows the total number of results in the list.
   * @param  {number} numberOfResults
   * @param  {string} resultsCountText
   */
  renderResultsCountText: PropTypes.func,
  /**
   * Function called for creating text that shows how many items are showing.
   * @param  {number} activePageFirstItemPosition
   * @param  {number} activePageLastItemPosition
   * @param  {number} numberOfProperties
   */
  renderShowingResultsText: PropTypes.func,
  /** The text to display alongside the results count. */
  resultsCountText: PropTypes.string,
};

export const ComponentWithResponsive = withResponsive(Component);
