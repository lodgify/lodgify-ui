import { logWarning } from './logWarning';

describe('logWarning', () => {
  it('should call `console.error` with the right arguments', () => {
    // eslint-disable-next-line no-console
    console.error = jest.fn();

    const videoSource = '🎮';

    logWarning(videoSource);

    // eslint-disable-next-line no-console
    expect(console.error).toHaveBeenCalledWith(
      `Warning:  \`Video.props.videoSource\` must be a valid URL or valid HTML. Received: ${videoSource}`
    );
  });
});
