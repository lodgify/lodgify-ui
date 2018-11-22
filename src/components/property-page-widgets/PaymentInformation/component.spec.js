import React from 'react';
import { mount } from 'enzyme';
import { expectComponentToHaveDisplayName } from '@lodgify/enzyme-jest-expect-helpers';

import { Component as PaymentInformation } from './component';

const paymentScheduleText = `50% due at time of booking. Remaining balance: Due later.`;
const cancellationPolicyText = `All paid prepayments are non-refundable.`;
const cleaningCharge = `25$ (USD)`;
const taxesText = `1%`;
const taxesDescriptionText = `of total booking value`;
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

const getPaymentInformation = extraProps =>
  mount(<PaymentInformation {...props} {...extraProps} />);

describe('<PaymentInformation />', () => {
  it('should have the right structure', () => {
    const wrapper = getPaymentInformation();

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `props.paymentScheduleText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({ paymentScheduleText });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.cancellationPolicyText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({ cancellationPolicyText });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.cleaningCharge` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({ cleaningCharge });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.taxesText` and `props.taxesDescriptionText` are passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({
        taxesDescriptionText,
        taxesText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.damageDepositText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({
        damageDepositText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.notesText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({
        notesText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `props.extraNotesText` is passed', () => {
    it('should have the right structure', () => {
      const wrapper = getPaymentInformation({
        extraNotesText,
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  it('should have `displayName` `PaymentInformation`', () => {
    expectComponentToHaveDisplayName(PaymentInformation, 'PaymentInformation');
  });
});
