import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';

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

import { PLACEHOLDERS, NUMBER_OF_PROPERTIES_PER_PAGE } from './constants';
import { getNumberOfPages } from './utils/getNumberOfPages';
import { getPropertySearchResultsToDisplay } from './utils/getPropertySearchResultsToDisplay';
import { getFirstPropertyPositionOfActivePage } from './utils/getFirstPropertyPositionOfActivePage';
import { getLastPropertyPositionOfActivePage } from './utils/getLastPropertyPositionOfActivePage';
import { getShowingResultsText } from './utils/getShowingResultsText';

/**
 * The standard widget for displaying a list of property search results.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export class Component extends PureComponent {
  state = {
    activePage: 1,
    propertySearchResultsToDisplay: getPropertySearchResultsToDisplay(
      1,
      this.props.propertySearchResults
    ),
  };

  handleOnPageChange = (event, { activePage }) => {
    this.setState({
      activePage,
      propertySearchResultsToDisplay: getPropertySearchResultsToDisplay(
        activePage,
        this.props.propertySearchResults
      ),
    });
  };

  render = () => {
    const {
      dropdownLabel,
      dropdownOnChange,
      dropdownOptions,
      dropdownValue,
      isShowingPlaceholder,
      propertySearchResults,
      resultsCountText,
      renderShowingResultsText,
    } = this.props;

    const { length: propertySearchResultsLength } = propertySearchResults;

    const { activePage, propertySearchResultsToDisplay } = this.state;

    return isShowingPlaceholder ? (
      <Fragment>
        <Divider size="small" />
        <TextPlaceholder length="short" />
        <Divider size="small" />
        <FlexContainer flexWrap="wrap" justifyContent="center">
          {PLACEHOLDERS.map((propertySearchResult, index) => (
            <PropertySearchResult
              isShowingPlaceholder
              key={buildKeyFromStrings(
                propertySearchResult.placeholderName,
                index
              )}
              {...propertySearchResult}
            />
          ))}
        </FlexContainer>
      </Fragment>
    ) : (
      <Fragment>
        <FlexContainer alignItems="center" justifyContent="space-between">
          <Heading size="small">
            {`${propertySearchResultsLength} ${resultsCountText}`}
          </Heading>
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
        <Divider size="small" />
        <FlexContainer flexWrap="wrap" justifyContent="center">
          {propertySearchResultsToDisplay.map((propertySearchResult, index) => (
            <PropertySearchResult
              key={buildKeyFromStrings(
                propertySearchResult.propertyName,
                index
              )}
              {...propertySearchResult}
            />
          ))}
        </FlexContainer>
        {propertySearchResultsLength > NUMBER_OF_PROPERTIES_PER_PAGE && (
          <FlexContainer
            alignItems="center"
            flexDirection="column"
            flexWrap="wrap"
          >
            <Pagination
              isShowingPageNumbers
              onPageChange={this.handleOnPageChange}
              totalPages={getNumberOfPages(propertySearchResultsLength)}
            />
            <Paragraph>
              {renderShowingResultsText(
                getFirstPropertyPositionOfActivePage(activePage),
                getLastPropertyPositionOfActivePage(
                  activePage,
                  propertySearchResultsLength
                ),
                propertySearchResultsLength
              )}
            </Paragraph>
          </FlexContainer>
        )}
      </Fragment>
    );
  };
}

Component.displayName = 'PropertySearchResultList';

Component.defaultProps = {
  dropdownLabel: null,
  dropdownOnChange: Function.prototype,
  dropdownOptions: null,
  dropdownValue: undefined,
  propertySearchResults: [],
  resultsCountText: RESULTS,
  isShowingPlaceholder: false,
  renderShowingResultsText: getShowingResultsText,
};

Component.propTypes = {
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
  /** An array of [`PropertySearchResult`](#/PropertySearchResult) props objects. */
  propertySearchResults: PropTypes.arrayOf(PropTypes.object),
  /** The text to display alongside the results count. */
  renderShowingResultsText: PropTypes.func,
  /**
   * Function called for creating text that shows how many items are showing.
   * @param  {number} activePageFirstItemPosition
   * @param  {number} activePageLastItemPosition
   * @param  {number} numberOfProperties
   */
  resultsCountText: PropTypes.string,
};
