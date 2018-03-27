import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Rating } from 'semantic-ui-react';

import { Heading } from 'typography/Heading';

/**
 * The standard widget for featuring a property.
 * @returns {Object}
 */
export const Component = ({
  bedroomsNumber,
  imageUrl,
  guestsNumber,
  locationName,
  nightPrice,
  propertyName,
  propertyType,
  ratingNumber,
}) => (
  <Card>
    <Image src={imageUrl} />
    <Card.Content>
      <Card.Meta>{propertyType}</Card.Meta>
      <Card.Header>{propertyName}</Card.Header>
      <Card.Description>{locationName}</Card.Description>
      <Card.Description>
        Guests: {guestsNumber} | Bedrooms: {bedroomsNumber}
      </Card.Description>
      <Card.Description>
        {ratingNumber}
        <Rating maxRating={5} rating={Math.round(ratingNumber)} size="mini" />
      </Card.Description>
      <Card.Description>
        from <Heading size="tiny">{nightPrice}</Heading> /night
      </Card.Description>
    </Card.Content>
  </Card>
);

Component.displayName = 'FeaturedProperty';

Component.defaultProps = {
  // imageUrl: '',
  // alternativeText: 'FeaturedProperty Widget',
  // imageTitle: 'FeaturedProperty title',
  // className: null,
  // sources: [],
  // onLoad: Function.prototype,
  // isFluid: true,
};

Component.propTypes = {
  // /** URL pointing to the image to render */
  // imageUrl: PropTypes.string,
  // /** Collection of objects to specify different image sources
  //  *  [See this for more info](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  //  */
  // sources: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     srcset: PropTypes.string.isRequired,
  //     media: PropTypes.string.isRequired,
  //   })
  // ),
  // /** Alternative text to show if the image can't be loaded by the browser */
  // alternativeText: PropTypes.string,
  // /** Title of the image to show when hovering it on desktop browsers */
  // imageTitle: PropTypes.string,
  // /** Custom class name string to customize the resulting img */
  // className: PropTypes.string,
  // /** Whether to render fluidly the image or not */
  // isFluid: PropTypes.bool,
  // /** The function to call when the image is loaded */
  // onLoad: PropTypes.func,
};
