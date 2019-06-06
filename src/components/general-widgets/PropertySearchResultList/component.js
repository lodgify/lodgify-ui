import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { Divider } from 'elements/Divider';
import { TextPlaceholder } from 'elements/TextPlaceholder';
import { Heading } from 'typography/Heading';
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
      <Heading size="small">
        {`${propertySearchResults.length} ${resultsCountText}`}
      </Heading>
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
  propertySearchResults: [],
  resultsCountText: RESULTS,
  isShowingPlaceholder: false,
};

Component.propTypes = {
  /** Is the component showing placeholders to reserve space for content which will appear. */
  isShowingPlaceholder: PropTypes.bool,
  /** An array of [`PropertySearchResult`](#/PropertySearchResult) props objects. */
  propertySearchResults: PropTypes.arrayOf(PropTypes.object),
  /** The text to display alongside the results count. */
  resultsCountText: PropTypes.string,
};
