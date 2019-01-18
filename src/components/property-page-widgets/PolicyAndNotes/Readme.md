```jsx
const paymentScheduleRules = ['50% due at time of booking.', 'Remaining balance: Due later.'];
const cancellationPolicyRules = ['All paid prepayments are non-refundable.'];
const damageDepositRules = ['A refundable damage deposit of 200.00 € (EUR) is due.'];
const notesText = null;

<PolicyAndNotes
  paymentScheduleRules={paymentScheduleRules}
  cancellationPolicyRules={cancellationPolicyRules}
  damageDepositRules={damageDepositRules}
  notesText={notesText}
/>
```

### Content

#### Extra description text

```jsx
const paymentScheduleRules = ['50% due at time of booking.', 'Remaining balance: Due later.'];
const cancellationPolicyRules = ['All paid prepayments are non-refundable.'];
const damageDepositRules = ['A refundable damage deposit of 200.00 € (EUR) is due.'];
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

<PolicyAndNotes
  paymentScheduleRules={paymentScheduleRules}
  cancellationPolicyRules={cancellationPolicyRules}
  damageDepositRules={damageDepositRules}
  notesText={notesText}
  extraNotesText={extraNotesText}
/>
```

#### Strings

```jsx
const paymentScheduleRules = ['50% due at time of booking.', 'Remaining balance: Due later.'];
const cancellationPolicyRules = ['All paid prepayments are non-refundable.'];
const damageDepositRules = ['A refundable damage deposit of 200.00 € (EUR) is due.'];
const notesText = null;

<PolicyAndNotes
  cancellationPolicyHeadingText="Cancel"
  cancellationPolicyRules={cancellationPolicyRules}
  damageDepositHeadingText="Damage"
  damageDepositRules={damageDepositRules}
  headingText="How we charge"
  modalTriggerText="See more"
  notesHeadingText="Notes"
  notesText={notesText}
  paymentScheduleHeadingText="Payment"
  paymentScheduleRules={paymentScheduleRules}
/>
```
