import React from 'react';
import { shallow } from 'enzyme';
import { Button, Label } from 'semantic-ui-react';

import { Component as Slideshow } from './component';

describe('<Slideshow />', () => {
  it('should render a single Semantic UI `Slideshow` component', () => {
    const pagination = shallow(<Slideshow totalPages={5} />);
    const actual = pagination.find('Slideshow');
    expect(actual).toHaveLength(1);
  });

  it('should pass the right props to the Semantic UI `Slideshow` component', () => {
    const pagination = shallow(<Slideshow totalPages={5} />);
    const actual = pagination.find('Slideshow').props();
    expect(actual).toEqual(
      expect.objectContaining({
        boundaryRange: 10,
        defaultActivePage: 1,
        firstItem: null,
        lastItem: null,
        nextItem: (
          <Button primary circular icon="chevron right" content={null} />
        ),
        onPageChange: expect.any(Function),
        pageItem: <Label empty circular size="tiny" content={null} />,
        prevItem: (
          <Button primary circular icon="chevron left" content={null} />
        ),
        secondary: true,
        totalPages: 5,
      })
    );
  });

  it('should have displayName `Slideshow`', () => {
    const actual = Slideshow.displayName;
    expect(actual).toBe('Slideshow');
  });
});
