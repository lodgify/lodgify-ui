import {
  MARKER_IMAGE_SRC,
  CIRCLE_IMAGE_SRC,
  DEFAULT_ZOOM,
} from 'utils/google-map-react';

/**
 * @param  {Object}  props
 * @param  {string}  props.apiKey
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
    isShowingApproximateLocation,
    isShowingExactLocation,
    latitude,
    longitude,
  },
  height,
  parentNodeWidth
) => {
  if (!parentNodeWidth) return;

  return global.encodeURI(
    [
      `https://maps.googleapis.com/maps/api/staticmap?`,
      `center=${latitude},${longitude}`,
      `&zoom=${DEFAULT_ZOOM}`,
      `&size=${parentNodeWidth}x${global.parseInt(height, 10)}`,
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
