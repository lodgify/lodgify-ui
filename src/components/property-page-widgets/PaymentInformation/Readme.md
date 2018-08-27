```jsx
const paymentScheduleText = `50% due at time of booking. Remaining balance: Due later.`;
const cancellationPolicyText = `All paid prepayments are non-refundable.`;
const cleaningCharge = `25$ (USD)`;
const taxesText = `1%`;
const taxesDescriptionText = `of total booking value`;
const damageDepositText = `A refundable damage deposit of 200.00 € (EUR) is due.`;
const notesText = null;

<PaymentInformation
  paymentScheduleText={paymentScheduleText}
  cleaningCharge={cleaningCharge}
  cancellationPolicyText={cancellationPolicyText}
  taxesText={taxesText}
  taxesDescriptionText={taxesDescriptionText}
  damageDepositText={damageDepositText}
  notesText={notesText}
/>
```

### Content

#### Extra description text

```jsx
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

<PaymentInformation
  paymentScheduleText={paymentScheduleText}
  cleaningCharge={cleaningCharge}
  cancellationPolicyText={cancellationPolicyText}
  taxesText={taxesText}
  taxesDescriptionText={taxesDescriptionText}
  damageDepositText={damageDepositText}
  notesText={notesText}
  extraNotesText={extraNotesText}
/>
```

#### Strings

```jsx
const paymentScheduleText = `50% due at time of booking. Remaining balance: Due later.`;
const cancellationPolicyText = `All paid prepayments are non-refundable.`;
const cleaningCharge = `25$ (USD)`;
const taxesText = `1%`;
const taxesDescriptionText = `of total booking value`;
const damageDepositText = `A refundable damage deposit of 200.00 € (EUR) is due.`;
const notesText = null;

<PaymentInformation
  cancellationPolicyHeadingText="Cancel"
  cancellationPolicyText={cancellationPolicyText}
  cleaningCharge={cleaningCharge}
  cleaningChargeHeadingText="Cleaning"
  damageDepositHeadingText="Damage"
  damageDepositText={damageDepositText}
  headingText="How we charge"
  modalTriggerText="See more"
  notesHeadingText="Notes"
  notesText={notesText}
  paymentScheduleHeadingText="Payment"
  paymentScheduleText={paymentScheduleText}
  taxesDescriptionText={taxesDescriptionText}
  taxesHeadingText="Taxes info"
  taxesText={taxesText}
/>
```
