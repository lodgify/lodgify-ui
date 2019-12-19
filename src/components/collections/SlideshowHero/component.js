import React from 'react';
import { shape, string } from 'prop-types';

import { SearchBar } from 'general-widgets/SearchBar';
import { Header } from 'collections/Header';
import { FlexContainer } from 'layout/FlexContainer';
import { Grid } from 'layout/Grid';
import { GridRow } from 'layout/GridRow';
import { Slideshow } from 'media/Slideshow';
import { Heading } from 'typography/Heading';
import { ShowOn } from 'layout/ShowOn';

/**
 * A slideshow hero displays a home page hero with a slideshow background
 */
// eslint-disable-next-line jsdoc/require-jsdoc
export const Component = ({
  headingText,
  headerProps,
  searchBarProps,
  slideshowProps,
}) => (
    <FlexContainer>
      <div className="slideshow-hero">
        <Header {...headerProps} />
        <div className="slideshow-content-container">
          <Slideshow
            {...slideshowProps}
            isFluid
            isShowingBulletNavigation={false}
          />
          <div className="content-container">
            <ShowOn
              computer
              parent={Heading}
              parentProps={{
                isColorInverted: true,
                size: 'huge',
                textAlign: 'center',
              }}
              tablet
              widescreen
            >
              {headingText}
            </ShowOn>
            <ShowOn
              mobile
              parent={Heading}
              parentProps={{
                isColorInverted: true,
                size: 'large',
                textAlign: 'center',
              }}
            >
              {headingText}
            </ShowOn>
            <Grid areColumnsCentered>
              <GridRow horizontalAlignContent="center">
                <ShowOn
                  computer
                  parent={SearchBar}
                  parentProps={{
                    ...searchBarProps,
                    willLocationDropdownOpenAbove: true,
                    isCalendarIconDisplayed: false,
                  }}
                  tablet
                  widescreen
                />
                <ShowOn mobile>
                  <SearchBar
                    {...searchBarProps}
                    isCalendarIconDisplayed={false}
                    isDisplayedAsModal
                  />
                </ShowOn>
              </GridRow>
            </Grid>
          </div>
        </div>
      </div>
    </FlexContainer>
  );

Component.displayName = 'SlideshowHero';

Component.defaultProps = {
  headingText: null,
  headerProps: {},
  searchBarProps: {},
  slideshowProps: {},
};

Component.propTypes = {
  /** @see See [the `Header` component for valid props](#/Collections/Header).  */
  headerProps: Header,
  /** The text for the heading displayed in the middle of the hero. */
  headingText: string,
  /** @see See [the `SearchBar` component for valid props](#/General%20widgets/SearchBar).  */
  searchBarProps: SearchBar,
  /** @see See [the `Slideshow` component for valid props](#/Media/Slideshow). */
  slideshowProps: Slideshow,
};
