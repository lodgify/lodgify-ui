import React, { Fragment, useState, useMemo, useRef, useEffect } from 'react';
import { string, bool } from 'prop-types';
import classnames from 'classnames';

import { SHOW_MORE } from 'utils/default-strings';
import { testidFactory } from 'utils/testid';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Paragraph } from 'typography/Paragraph';
import { HTML } from 'general-widgets/HTML';

import { MULTI_PARAGRAPH_MAX_HEIGHT } from './constants';

const TEST_ID_PREFIX = 'multiparagraph';

const testid = testidFactory(TEST_ID_PREFIX);

export const Component = ({ content, showMoreLabel, isShowingAll, isHtml }) => {
  const [isOpen, setIsOpen] = useState(isShowingAll);
  const paragraphs = useMemo(() => getParagraphsFromStrings(content), [
    content,
  ]);
  const contentRef = useRef();

  useEffect(() => {
    if (contentRef.current.scrollHeight < MULTI_PARAGRAPH_MAX_HEIGHT) {
      setIsOpen(true);
    } else {
      setIsOpen(isShowingAll);
    }
  }, [content]);

  return (
    <Fragment>
      <div
        className={classnames('multi-paragraph', { open: isOpen })}
        data-testid={testid()}
        ref={contentRef}
      >
        {isHtml ? (
          <HTML data-testid={testid('html-paragraph')} htmlString={content} />
        ) : (
          paragraphs.map((paragraph, key) => (
            <Paragraph data-testid={testid(`paragraph-${key}`)} key={key}>
              {paragraph}
            </Paragraph>
          ))
        )}
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
  isHtml: false,
};
Component.propTypes = {
  /** text to show or hide */
  content: string.isRequired,
  /** not cut the text as default */
  isHtml: bool,
  /** not cut the text as default */
  isShowingAll: bool,
  /** show more button label */
  showMoreLabel: string,
};
