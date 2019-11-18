import React, { Fragment, useState } from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';

import { SHOW_MORE } from 'utils/default-strings';
import { testidFactory } from 'utils/testid';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';

const TEST_ID_PREFIX = 'multiparagraph';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ content, showMoreLabel, isShowingAll }) => {
  const [isOpen, setIsOpen] = useState(isShowingAll);
  const paragraphs = getParagraphsFromStrings(content);

  return (
    <Fragment>
      <div
        className={classnames('multi-paragraph', { open: isOpen })}
        data-testid={testid()}
      >
        {paragraphs.map((paragraph, key) => (
          <Paragraph data-testid={testid(`paragraph-${key}`)} key={key}>
            {paragraph}
          </Paragraph>
        ))}
      </div>
      {!isOpen && (
        <div
          className="multi-paragraph-read-more"
          data-testid={testid('button-read-more')}
          onClick={() => setIsOpen(true)}
          role="button"
        >
          <span>{showMoreLabel}</span>
        </div>
      )}
    </Fragment>
  );
};

Component.displayName = 'MultiParagraph';
Component.defaultProps = {
  showMoreLabel: SHOW_MORE,
  isShowingAll: false,
};
Component.propTypes = {
  /** text to show or hide */
  content: string.isRequired,
  /** not cut the text as default */
  isShowingAll: bool,
  /** show more button label */
  showMoreLabel: string,
};
