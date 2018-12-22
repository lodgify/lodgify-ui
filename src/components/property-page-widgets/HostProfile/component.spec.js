import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as HostProfile } from './component';

const catImageUrl =
  'https://si4.cdbcdn.com/oh/4efbc79e-34db-4447-b31a-24e77f33f4e9.jpg?w=1024&mode=max';
const name = 'Mitjons & Kira';
const description = 'We do love cats';

const getHostProfile = props =>
  mount(
    <HostProfile
      avatarUrl={catImageUrl}
      description={description}
      name={name}
      {...props}
    />
  );

describe('<HostProfile />', () => {
  it('should render the right structure', () => {
    const actual = getHostProfile();

    expect(actual).toMatchSnapshot();
  });

  describe('if `props.email` is defined', () => {
    it('should render the right structure', () => {
      const actual = getHostProfile({ email: 'welovecats@lodgify.com' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.phone` is defined', () => {
    it('should render the right structure', () => {
      const actual = getHostProfile({ phone: '+34932206524' });

      expect(actual).toMatchSnapshot();
    });
  });

  describe('if `props.languages` is defined', () => {
    it('should render the right structure', () => {
      const actual = getHostProfile({
        languages: ['English', 'Italian', 'German', 'Spanish'],
      });

      expect(actual).toMatchSnapshot();
    });
  });

  it('should have displayName `HostProfile`', () => {
    expectComponentToHaveDisplayName(HostProfile, 'HostProfile');
  });
});
