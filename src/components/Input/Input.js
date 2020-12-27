import React, { useCallback, forwardRef } from 'react';
import PropTypes from 'prop-types';

import SInput from './styled';

const testId = 'input-component';

const Input = forwardRef(({
  name, value, placeholder, onChange : onChangeProp, fullWidth,
}, ref) => {
  const onChange = useCallback(
    (evt) => onChangeProp(evt.target.value),
    [onChangeProp],
  );

  return (
    <SInput
      ref={ref}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      fullWidth={fullWidth}
      data-testid={testId}
    />
  );
});

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
