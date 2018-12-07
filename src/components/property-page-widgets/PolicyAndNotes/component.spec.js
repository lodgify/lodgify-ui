import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PolicyAndNotes } from './component';

const paymentScheduleText = `50% due at time of booking. Remaining balance: Due later.`;
const cancellationPolicyText = `All paid prepayments are non-refundable.`;
const damageDepositText = `A refundable damage deposit of 200.00 € (EUR) is due.`;
const notesText = `
  Livingstone is a modern website template with clean and straight lines. Its special feature is a wide horizontal header photo slideshow in which logo and header navigation nicely blend in.

  Maecenas et efficitur diam. Etiam non ante urna. Donec imperdiet cursus lectus, luctus vestibulum urna aliquet vel. Donec non vehicula est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
`;
const extraNotesText = `
  Livingstone is a modern website template with clean and straight lines. Its special feature is a wide horizontal header photo slideshow in which logo and header navigation nicely blend in.

  Maecenas et efficitur diam. Etiam non ante urna. Donec imperdiet cursus lectus, luctus vestibulum urna aliquet vel. Donec non vehicula est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

  Livingstone is a modern website template with clean and straight lines. Its special feature is a wide horizontal header photo slideshow in which logo and header navigation nicely blend in.

  Maecenas et efficitur diam. Etiam non ante urna. Donec imperdiet cursus lectus, luctus vestibulum urna aliquet vel. Donec non vehicula est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
`;

const props = {};

const getPolicyAndNotes = extraProps =>
  mount(<PolicyAndNotes {...props} {...extraProps} />);

describe('<PolicyAndNotes />', () => {
  it('should have the right structure', () => {
    const wrapper = getPolicyAndNotes();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.paymentScheduleText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPolicyAndNotes({ paymentScheduleText });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.cancellationPolicyText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPolicyAndNotes({ cancellationPolicyText });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.damageDepositText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPolicyAndNotes({
        damageDepositText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.notesText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPolicyAndNotes({
        notesText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.extraNotesText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPolicyAndNotes({
        extraNotesText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `PolicyAndNotes`', () => {
    expectComponentToHaveDisplayName(PolicyAndNotes, 'PolicyAndNotes');
  });
});
