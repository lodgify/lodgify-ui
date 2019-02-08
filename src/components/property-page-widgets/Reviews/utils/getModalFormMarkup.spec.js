import { mount } from 'enzyme';

import {
  guestTypeOptions,
  monthOptions,
  roomTypeOptions,
  validation,
  yearOptions,
} from '../mock-data/options';

import { getModalFormMarkup } from './getModalFormMarkup';

const props = {
  roomTypeInputLabel: 'Sullust',
  commentInputLabel: 'blablabla',
  emailInputLabel: '@@',
  errorMessage: 'Recue me',
  formHeadingText: 'Beheading',
  guestTypeInputLabel: 'Foreigner',
  guestTypeOptions,
  locationInputLabel: 'Mullurcu',
  monthInputLabel: 'Jinuari',
  monthOptions,
  nameInputLabel: 'opl',
  onSubmit: jest.fn(),
  roomTypeOptions,
  ratingAverage: '0',
  submitButtonText: 'sumbmutbuttuntuxt',
  successMessage: 'succuss',
  titleInputLabel: 'Duke',
  validation,
  yearInputLabel: 'yuur',
  yearOptions,
};

const getModalForm = (props, isShowingPlaceholder) =>
  mount(getModalFormMarkup(props, isShowingPlaceholder));

describe('getModalFormMarkup', () => {
  it('should have the right structure with default props', () => {
    const wrapper = getModalForm({});

    expect(wrapper).toMatchSnapshot();
  });

  it('should render the right structure when props are passed', () => {
    const wrapper = getModalForm(props);

    expect(wrapper).toMatchSnapshot();
  });

  describe('if `isShowingPlaceholder` is `true`', () => {
    it('should render the right structure', () => {
      const wrapper = getModalForm(props, true);

      expect(wrapper).toMatchSnapshot();
    });
  });
});
