import {
  getMapOptions,
  MARKER_IMAGE_SRC,
  CIRCLE_IMAGE_SRC,
  DEFAULT_ZOOM,
} from 'utils/google-map-react';

/**
 * @param  {Object}  props
 * @param  {string}  props.apiKey
 * @param  {boolean} props.hasDefaultStyles
 * @param  {boolean} props.isShowingApproximateLocation
 * @param  {boolean} props.isShowingExactLocation
 * @param  {number}  props.latitude
 * @param  {number}  props.longitude
 * @param  {string}  height
 * @param  {number}  parentNodeWidth
 * @return {string|undefined}
 */
export const getImgSrc = (
  {
    apiKey,
    hasDefaultStyles,
    isShowingApproximateLocation,
    isShowingExactLocation,
    latitude,
    longitude,
  },
  height,
  parentNodeWidth
) => {
  if (!parentNodeWidth) return;

  const mapOptions = getMapOptions(hasDefaultStyles);

  return global.encodeURI(
    [
      `https://maps.googleapis.com/maps/api/staticmap?`,
      `center=${latitude},${longitude}`,
      `&zoom=${DEFAULT_ZOOM}`,
      `&size=${parentNodeWidth}x${global.parseInt(height, 10)}`,
      ...mapOptions.styles.map(
        ({ elementType, featureType, stylers }) =>
          `&style=${featureType ? `feature:${featureType}|` : ''}${
            elementType ? `element:${elementType}|` : ''
          }${Object.entries(stylers[0])
            .map(([key, value]) => `${key}:${value.replace('#', '0x')}`)
            .join('|')}`
      ),
      isShowingExactLocation
        ? `&markers=icon:${MARKER_IMAGE_SRC}|${latitude},${longitude}`
        : '',
      isShowingApproximateLocation
        ? `&markers=anchor:center|icon:${CIRCLE_IMAGE_SRC}|${latitude},${longitude}`
        : '',
      `&key=${apiKey}`,
    ].join('')
  );
};
