export const logWarning = videoSource => {
  // eslint-disable-next-line no-console
  console.error(
    `Warning:  \`Video.props.videoSource\` must be a valid URL or valid HTML. Received: ${videoSource}`
  );
};
