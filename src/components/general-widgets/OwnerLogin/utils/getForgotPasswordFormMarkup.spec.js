import { mount } from 'enzyme';

import { getForgotPasswordFormMarkup } from './getForgotPasswordFormMarkup';

const someFunction = () => {};
const forgotPasswordSubmitButtonText = 'A';
const forgotPasswordEmailInputLabel = 'B';
const forgotPasswordHeadingText = 'C';
const forgotPasswordModalTriggerText = 'D';
const forgotPasswordValidation = {};

const getMarkup = ({ errorMessage = '', successMessage = '' }) =>
  mount(
    getForgotPasswordFormMarkup(
      someFunction,
      forgotPasswordSubmitButtonText,
      forgotPasswordEmailInputLabel,
      forgotPasswordHeadingText,
      forgotPasswordModalTriggerText,
      forgotPasswordValidation,
      errorMessage,
      successMessage
    )
  );

describe('getForgotPasswordFormMarkup', () => {
  it('should return the right structure ', () => {
    const wrapper = getMarkup({});

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `forgotPasswordSuccessMessage` is passed', () => {
    it('should render the success message above the reset button', () => {
      const wrapper = getMarkup({
        successMessage: 'This is a successful message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('if `forgotPasswordErrorMessage` is passed', () => {
    it('should render the error message above the reset button', () => {
      const wrapper = getMarkup({
        errorMessage: 'This is an error message',
      });

      expect(wrapper).toMatchSnapshot();
    });
  });
});
