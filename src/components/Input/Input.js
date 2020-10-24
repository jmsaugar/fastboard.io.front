import React from 'react';
import PropTypes from 'prop-types';

import SInput from './styled';

const Input = ({
  name, value, placeholder, onChange, className,
}) => (
  <SInput
    className={className}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
  />
);

Input.defaultProps = {
  value       : undefined,
  placeholder : undefined,
  onChange    : undefined,
};

Input.propTypes = {
  name        : PropTypes.string.isRequired,
  value       : PropTypes.string,
  placeholder : PropTypes.string,
  onChange    : PropTypes.func,
};

export default Input;
