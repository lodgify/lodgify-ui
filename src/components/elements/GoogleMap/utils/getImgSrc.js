import { mapOptions } from 'utils/react-google-maps';

/**
 * @param  {string}  apiKey
 * @param  {string}  height
 * @param  {boolean} isShowingExactLocation
 * @param  {number}  latitude
 * @param  {number}  longitude
 * @param  {number}  parentNodeWidth
 * @return {string|undefined}
 */
export const getImgSrc = (
  apiKey,
  height,
  isShowingExactLocation,
  latitude,
  longitude,
  parentNodeWidth
) =>
  !!parentNodeWidth
    ? global.encodeURI(
        [
          `https://maps.googleapis.com/maps/api/staticmap?`,
          `center=${latitude},${longitude}`,
          `&zoom=${mapOptions.zoom}`,
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
            ? `&markers=icon:https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png|${latitude},${longitude}`
            : '',
          `&key=${apiKey}`,
        ].join('')
      )
    : undefined;
