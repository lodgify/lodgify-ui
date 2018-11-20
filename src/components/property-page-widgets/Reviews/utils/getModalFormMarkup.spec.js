import { mount } from 'enzyme';

import {
  guestTypeOptions,
  monthOptions,
  propertyOptions,
  validation,
  yearOptions,
} from '../mock-data/options';

import { getModalFormMarkup } from './getModalFormMarkup';

const props = {
  apartmentInputLabel: 'Sullust',
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
  propertyOptions,
  ratingAverage: '0',
  submitButtonText: 'sumbmutbuttuntuxt',
  successMessage: 'succuss',
  titleInputLabel: 'Duke',
  validation,
  yearInputLabel: 'yuur',
  yearOptions,
};

const getModalForm = props => mount(getModalFormMarkup(props));

describe('getModalFormMarkup', () => {
  it('should have the right structure with default props', () => {
    const wrapper = getModalForm({});

    expect(wrapper).toMatchSnapshot();
  });
  it('should render the right structure when props are passed', () => {
    const wrapper = getModalForm(props);

    expect(wrapper).toMatchSnapshot();
  });
});
