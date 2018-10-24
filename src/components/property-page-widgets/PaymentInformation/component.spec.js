import React from 'react';
import { shallow } from 'enzyme';
import Statistic from 'semantic-ui-react/dist/commonjs/views/Statistic';
import {
  expectComponentToBe,
  expectComponentToHaveChildren,
  expectComponentToHaveDisplayName,
  expectComponentToHaveProps,
} from '@lodgify/enzyme-jest-expect-helpers';

import {
  PAYMENT_SCHEDULE,
  CANCELLATION_POLICY,
  CLEANING_CHARGE,
  TAXES,
  DAMAGE_DEPOSIT,
  NOTES,
  VIEW_MORE,
} from 'utils/default-strings';
import { getArrayOfLengthOfItem } from 'utils/get-array-of-length-of-item';
import { getParagraphsFromStrings } from 'utils/get-paragraphs-from-strings';
import { Grid } from 'layout/Grid';
import { GridColumn } from 'layout/GridColumn';
import { GridRow } from 'layout/GridRow';
import { Paragraph } from 'typography/Paragraph';
import { Heading } from 'typography/Heading';
import { Link } from 'elements/Link';
import { Modal } from 'elements/Modal';

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
  shallow(<PaymentInformation {...props} {...extraProps} />);

describe('<PaymentInformation />', () => {
  it('should have `Grid` component as a wrapper', () => {
    const wrapper = getPaymentInformation();

    expectComponentToBe(wrapper, Grid);
  });

  describe('the first `Grid` component', () => {
    it('should have the right props', () => {
      const wrapper = getPaymentInformation().find(Grid);

      expectComponentToHaveProps(wrapper, {
        stackable: true,
      });
    });

    it('should render the right children', () => {
      const wrapper = getPaymentInformation().find(Grid);

      expectComponentToHaveChildren(
        wrapper,
        ...getArrayOfLengthOfItem(3, GridRow)
      );
    });
  });

  describe('the first `GridRow` component', () => {
    describe('the first `GridColumn` component', () => {
      const getFirstGridColumn = () =>
        getPaymentInformation()
          .find(GridRow)
          .first()
          .find(GridColumn)
          .first();

      it('should have the right props', () => {
        const wrapper = getFirstGridColumn();

        expectComponentToHaveProps(wrapper, {
          width: 12,
        });
      });

      it('should render the right children', () => {
        const wrapper = getFirstGridColumn();

        expectComponentToHaveChildren(
          wrapper,
          ...getArrayOfLengthOfItem(1, Heading)
        );
      });
    });
  });

  describe('if `props.paymentScheduleText` is passed', () => {
    describe('the second `GridRow` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getPaymentInformation({ paymentScheduleText })
          .find(GridRow)
          .at(1);

        expectComponentToHaveChildren(wrapper, GridColumn);
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ paymentScheduleText })
          .find(GridRow)
          .at(1)
          .find(GridColumn)
          .first();

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveProps(wrapper, {
          width: 6,
        });
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveChildren(wrapper, Heading, Paragraph);
      });

      describe('the `Heading` component', () => {
        const getHeader = () =>
          getConditionalGridColumn()
            .find(Heading)
            .first();

        it('should have the right props', () => {
          const wrapper = getHeader();

          expectComponentToHaveProps(wrapper, {
            size: 'small',
          });
        });

        it('should render the right children', () => {
          const wrapper = getHeader();

          expectComponentToHaveChildren(wrapper, PAYMENT_SCHEDULE);
        });
      });

      describe('the `Paragraph` component', () => {
        const getParagraph = () =>
          getConditionalGridColumn()
            .find(Paragraph)
            .first();

        it('should have the right props', () => {
          const wrapper = getParagraph();

          expectComponentToHaveProps(wrapper, {
            size: 'medium',
          });
        });

        it('should render the right children', () => {
          const wrapper = getParagraph();

          expectComponentToHaveChildren(wrapper, paymentScheduleText);
        });
      });
    });
  });

  describe('if `props.cancellationPolicyText` is passed', () => {
    describe('the second `GridRow` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getPaymentInformation({ cancellationPolicyText })
          .find(GridRow)
          .at(1);

        expectComponentToHaveChildren(wrapper, GridColumn);
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ cancellationPolicyText })
          .find(GridRow)
          .at(1)
          .find(GridColumn)
          .first();

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveProps(wrapper, {
          width: 6,
        });
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveChildren(wrapper, Heading, Paragraph);
      });

      describe('the `Heading` component', () => {
        const getHeader = () =>
          getConditionalGridColumn()
            .find(Heading)
            .first();

        it('should have the right props', () => {
          const wrapper = getHeader();

          expectComponentToHaveProps(wrapper, {
            size: 'small',
          });
        });

        it('should render the right children', () => {
          const wrapper = getHeader();

          expectComponentToHaveChildren(wrapper, CANCELLATION_POLICY);
        });
      });

      describe('the `Paragraph` component', () => {
        const getParagraph = () =>
          getConditionalGridColumn()
            .find(Paragraph)
            .first();

        it('should have the right props', () => {
          const wrapper = getParagraph();

          expectComponentToHaveProps(wrapper, {
            size: 'medium',
          });
        });

        it('should render the right children', () => {
          const wrapper = getParagraph();

          expectComponentToHaveChildren(wrapper, cancellationPolicyText);
        });
      });
    });
  });

  describe('if `props.cleaningCharge` is passed', () => {
    describe('the third `GridRow` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getPaymentInformation({ cleaningCharge })
          .find(GridRow)
          .at(2);

        expectComponentToHaveChildren(wrapper, GridColumn);
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ cleaningCharge })
          .find(GridRow)
          .at(2)
          .find(GridColumn)
          .first();

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveProps(wrapper, {
          width: 6,
        });
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveChildren(wrapper, Heading, Statistic);
      });

      describe('the `Heading` component', () => {
        const getHeader = () =>
          getConditionalGridColumn()
            .find(Heading)
            .first();

        it('should have the right props', () => {
          const wrapper = getHeader();

          expectComponentToHaveProps(wrapper, {
            size: 'small',
          });
        });

        it('should render the right children', () => {
          const wrapper = getHeader();

          expectComponentToHaveChildren(wrapper, CLEANING_CHARGE);
        });
      });

      describe('the `Statistic` component', () => {
        const getStatistic = () =>
          getConditionalGridColumn()
            .find(Statistic)
            .first();

        it('should have the right props', () => {
          const wrapper = getStatistic();

          expectComponentToHaveProps(wrapper, {
            horizontal: true,
            size: 'mini',
            text: true,
            value: cleaningCharge,
          });
        });
      });
    });
  });

  describe('if `props.taxesText` and `props.taxesDescriptionText` are passed', () => {
    describe('the third `GridRow` component', () => {
      it('should render another `GridColumn`', () => {
        const wrapper = getPaymentInformation({
          taxesText,
          taxesDescriptionText,
        })
          .find(GridRow)
          .at(2);

        expectComponentToHaveChildren(wrapper, GridColumn);
      });
    });

    describe('the conditional `GridColumn` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ taxesText, taxesDescriptionText })
          .find(GridRow)
          .at(2)
          .find(GridColumn)
          .first();

      it('should have the right props', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveProps(wrapper, {
          width: 6,
        });
      });

      it('should render the right children', () => {
        const wrapper = getConditionalGridColumn();

        expectComponentToHaveChildren(wrapper, Heading, Statistic);
      });

      describe('the `Heading` component', () => {
        const getHeader = () =>
          getConditionalGridColumn()
            .find(Heading)
            .first();

        it('should have the right props', () => {
          const wrapper = getHeader();

          expectComponentToHaveProps(wrapper, {
            size: 'small',
          });
        });

        it('should render the right children', () => {
          const wrapper = getHeader();

          expectComponentToHaveChildren(wrapper, TAXES);
        });
      });

      describe('the `Statistic` component', () => {
        const getStatistic = () =>
          getConditionalGridColumn()
            .find(Statistic)
            .first();

        it('should have the right props', () => {
          const wrapper = getStatistic();

          expectComponentToHaveProps(wrapper, {
            horizontal: true,
            text: true,
            size: 'tiny',
            label: taxesDescriptionText,
            value: taxesText,
          });
        });
      });
    });
  });

  describe('if `props.damageDepositText` is passed', () => {
    it('should render another `GridRow`', () => {
      const wrapper = getPaymentInformation({ damageDepositText })
        .find(GridRow)
        .at(3);

      expectComponentToHaveChildren(wrapper, GridColumn);
    });

    describe('the conditional `GridRow` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ damageDepositText })
          .find(GridRow)
          .at(3)
          .find(GridColumn)
          .first();

      describe('the first `GridColumn` component', () => {
        it('should have the right props', () => {
          const wrapper = getConditionalGridColumn();

          expectComponentToHaveProps(wrapper, {
            width: 12,
          });
        });

        it('should render the right children', () => {
          const wrapper = getConditionalGridColumn();

          expectComponentToHaveChildren(wrapper, Heading, Paragraph);
        });

        describe('the `Heading` component', () => {
          const getHeader = () =>
            getConditionalGridColumn()
              .find(Heading)
              .first();

          it('should have the right props', () => {
            const wrapper = getHeader();

            expectComponentToHaveProps(wrapper, {
              size: 'small',
            });
          });

          it('should render the right children', () => {
            const wrapper = getHeader();

            expectComponentToHaveChildren(wrapper, DAMAGE_DEPOSIT);
          });
        });

        describe('the `Paragraph` component', () => {
          const getParagraph = () =>
            getConditionalGridColumn()
              .find(Paragraph)
              .first();

          it('should have the right props', () => {
            const wrapper = getParagraph();

            expectComponentToHaveProps(wrapper, {
              size: 'medium',
            });
          });

          it('should render the right children', () => {
            const wrapper = getParagraph();

            expectComponentToHaveChildren(wrapper, damageDepositText);
          });
        });
      });
    });
  });

  describe('if `props.notesText` is passed', () => {
    it('should render another `GridRow`', () => {
      const wrapper = getPaymentInformation({ notesText })
        .find(GridRow)
        .at(3);

      expectComponentToHaveChildren(wrapper, GridColumn);
    });

    describe('the conditional `GridRow` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ notesText })
          .find(GridRow)
          .at(3)
          .find(GridColumn)
          .first();

      describe('the first `GridColumn` component', () => {
        it('should have the right props', () => {
          const wrapper = getConditionalGridColumn();

          expectComponentToHaveProps(wrapper, {
            width: 12,
          });
        });

        it('should render the right children', () => {
          const wrapper = getConditionalGridColumn();

          expectComponentToHaveChildren(wrapper, Heading, Paragraph);
        });

        describe('the `Heading` component', () => {
          const getHeader = () =>
            getConditionalGridColumn()
              .find(Heading)
              .first();

          it('should have the right props', () => {
            const wrapper = getHeader();

            expectComponentToHaveProps(wrapper, {
              size: 'small',
            });
          });

          it('should render the right children', () => {
            const wrapper = getHeader();

            expectComponentToHaveChildren(wrapper, NOTES);
          });
        });

        describe('the `Paragraph` component', () => {
          const getParagraph = () =>
            getConditionalGridColumn()
              .find(Paragraph)
              .first();

          it('should have the right props', () => {
            const wrapper = getParagraph();

            expectComponentToHaveProps(wrapper, {
              size: 'medium',
            });
          });

          it('should render the right children', () => {
            const wrapper = getParagraph();

            expectComponentToHaveChildren(wrapper, notesText);
          });
        });
      });
    });
  });

  describe('if `props.extraNotesText` is passed', () => {
    it('should render another `GridRow`', () => {
      const wrapper = getPaymentInformation({ extraNotesText })
        .find(GridRow)
        .at(3);

      expectComponentToHaveChildren(wrapper, GridColumn);
    });

    describe('the conditional `GridRow` component', () => {
      const getConditionalGridColumn = () =>
        getPaymentInformation({ extraNotesText })
          .find(GridRow)
          .at(3)
          .find(GridColumn)
          .first();

      describe('the first `GridColumn` component', () => {
        it('should have the right props', () => {
          const wrapper = getConditionalGridColumn();

          expectComponentToHaveProps(wrapper, {
            width: 12,
          });
        });

        it('should render the right children', () => {
          const wrapper = getConditionalGridColumn();

          expectComponentToHaveChildren(wrapper, Modal);
        });
      });

      describe('the `Modal` component', () => {
        it('should have the right props', () => {
          const wrapper = getConditionalGridColumn().find(Modal);

          expectComponentToHaveProps(wrapper, {
            children: expect.any(Array),
            trigger: <Link>{VIEW_MORE}</Link>,
          });
        });
      });

      describe('the other `Paragraph` components', () => {
        it('should render the right children', () => {
          getParagraphsFromStrings(extraNotesText).forEach(
            (paragraphText, index) => {
              const wrapper = getConditionalGridColumn()
                .find(Paragraph)
                .at(index);

              expectComponentToHaveChildren(wrapper, paragraphText);
            }
          );
        });
      });
    });
  });

  it('should have `displayName` `PaymentInformation`', () => {
    expectComponentToHaveDisplayName(PaymentInformation, 'PaymentInformation');
  });
});
