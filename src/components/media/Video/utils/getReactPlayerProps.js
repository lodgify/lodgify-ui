/**
 * @param  {Boolean}  isResponsive
 * @param  {String}   videoSource
 * @return {Object}
 */
export const getReactPlayerProps = (isResponsive, videoSource) => ({
  controls: true,
  className: 'react-player',
  url: videoSource,

  ...(isResponsive
    ? {
        height: '100%',
        width: '100%',
      }
    : {}),
});
