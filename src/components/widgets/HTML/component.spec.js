import React from 'react';
import { mount, shallow } from 'enzyme';
import DOMPurify from 'dompurify';

import { Component as HTMLWidget } from './component';

const { headings } = require('./mock-data/examples');

describe('<HTML />', () => {
  it('should render a single Lodgify UI `HTML` component', () => {
    const htmlWidget = shallow(<HTMLWidget />);

    expect(htmlWidget).toBeDefined();
    expect(htmlWidget).toHaveLength(1);
  });

  it('should contain a HTML component with the right props', () => {
    const htmlWidget = shallow(<HTMLWidget htmlString={headings} />).find(
      'div'
    );

    expect(htmlWidget).toHaveLength(1);

    const sanitizedHTML = DOMPurify.sanitize(headings);

    const actual = htmlWidget.props();
    expect(actual).toEqual(
      expect.objectContaining({
        dangerouslySetInnerHTML: {
          __html: sanitizedHTML,
        },
      })
    );
  });

  describe('with children', () => {
    it('should contain a HTML component with the right props', () => {
      const htmlWidget = shallow(
        <HTMLWidget htmlString={headings}>
          <h1>Spec</h1>
        </HTMLWidget>
      );

      expect(htmlWidget.find('div')).toHaveLength(2);

      const actual = htmlWidget
        .find('div')
        .at(0)
        .children();

      expect(actual).toHaveLength(2);
    });
  });

  describe('if `props.htmlString` is passed', () => {
    it('should render it', () => {
      const htmlWidget = mount(<HTMLWidget htmlString={headings} />);

      expect(htmlWidget.find('div')).toHaveLength(1);

      const firstDiv = htmlWidget.find('div').render();

      expect(firstDiv.find('h1')).toHaveLength(1);
      expect(firstDiv.find('h2')).toHaveLength(0);
      expect(firstDiv.find('h3')).toHaveLength(1);
      expect(firstDiv.find('h4')).toHaveLength(1);
      expect(firstDiv.find('h5')).toHaveLength(1);
    });
  });
});
