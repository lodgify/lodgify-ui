import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'elements/Divider';
import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Heading } from 'typography/Heading';
import { size } from 'utils/size';
import { Dropdown } from 'inputs/Dropdown';
import { FlexContainer } from 'layout/FlexContainer';
import { PropertySearchResult } from 'general-widgets/PropertySearchResult';
import { buildKeyFromStrings } from 'utils/build-key-from-strings';
import { RESULTS } from 'utils/default-strings';

import { PLACEHOLDERS } from './constants';

/**
 * The standard widget for displaying a list of property search results.
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  dropdownLabel,
  dropdownOnChange,
  dropdownOptions,
  dropdownValue,
  isShowingPlaceholder,
  propertySearchResults,
  resultsCountText,
}) =>
  isShowingPlaceholder ? (
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
          {`${propertySearchResults.length} ${resultsCountText}`}
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
        {propertySearchResults.map((propertySearchResult, index) => (
          <PropertySearchResult
            key={buildKeyFromStrings(propertySearchResult.propertyName, index)}
            {...propertySearchResult}
          />
        ))}
      </FlexContainer>
    </Fragment>
  );

Component.displayName = 'PropertySearchResultList';

Component.defaultProps = {
  dropdownLabel: null,
  dropdownOnChange: Function.prototype,
  dropdownOptions: null,
  dropdownValue: undefined,
  propertySearchResults: [],
  resultsCountText: RESULTS,
  isShowingPlaceholder: false,
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
  resultsCountText: PropTypes.string,
};
