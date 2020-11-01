import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import SInput from './styled';

const Input = forwardRef(({
  name, value, placeholder, onChange, fullWidth,
}, ref) => (
  <SInput
    ref={ref}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    fullWidth={fullWidth}
  />
));

Input.defaultProps = {
  value       : undefined,
  placeholder : undefined,
  fullWidth   : false,
  onChange    : undefined,
};

Input.propTypes = {
  name        : PropTypes.string.isRequired,
  value       : PropTypes.string,
  placeholder : PropTypes.string,
  fullWidth   : PropTypes.bool,
  onChange    : PropTypes.func,
};

export default Input;
