import React from 'react';
import propTypes from 'prop-types';

import SImg from './styled';

const testId = 'spinner-component';

const Spinner = ({ size }) => (
  <SImg size={size} data-testid={testId} />
);

Spinner.propTypes = {
  size : propTypes.string.isRequired,
};

export default Spinner;
