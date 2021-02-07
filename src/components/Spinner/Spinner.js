import React from 'react';
import PropTypes from 'prop-types';

import SImg from './styled';

const testId = 'spinner-component';

const Spinner = ({ size, dark }) => (
  <SImg dark={dark} size={size} data-testid={testId} />
);

Spinner.defaultProps = {
  dark : false,
};

Spinner.propTypes = {
  size : PropTypes.string.isRequired,
  dark : PropTypes.bool,
};

export default Spinner;
