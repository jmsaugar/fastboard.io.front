import React from 'react';

import SpinnerIcon from './assets/spinner.svg';

import SImg from './styled';

const testId = 'spinner-component';

const Spinner = () => <SImg src={SpinnerIcon} data-testid={testId} />;

export default Spinner;
