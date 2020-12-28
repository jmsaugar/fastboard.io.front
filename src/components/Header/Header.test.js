import React from 'react';
import { fireEvent } from '@testing-library/react';

import { render } from '#devTools/tests/utils';

import Header from './Header';

const mockCurrentLanguage = 'en';
const mockChangeLanguage = jest.fn();

jest.mock('react-i18next', () => ({
  useTranslation : () => ({
    t    : (str) => str,
    i18n : {
      changeLanguage : mockChangeLanguage,
      language       : mockCurrentLanguage,
    },
  }),
}));

jest.mock('#constants', () => ({
  languageCodes : {
    en : 'en',
    es : 'es',
  },
}));

describe('Component : Header', () => {
  beforeEach(() => {
    mockChangeLanguage.mockReset();
  });

  test('Is visible and reacts to language change', () => {
    const { getByText } = render(<Header />, { router : true });

    expect(getByText('brand')).toBeInTheDocument();
    expect(mockChangeLanguage).toHaveBeenCalledTimes(0);

    fireEvent.click(getByText(`languages.${mockCurrentLanguage}`));
    fireEvent.click(getByText('languages.es'));

    expect(mockChangeLanguage).toHaveBeenCalledTimes(1);
  });

  test('Snapshot', () => {
    const { asFragment } = render(<Header />, { router : true });

    const componentRender = asFragment();
    expect(componentRender).toMatchSnapshot();
  });
});
