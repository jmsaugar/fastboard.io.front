import React, { useCallback, useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';

import SInput from './styled';

const testId = 'input-component';

const Input = forwardRef(({
  name, value, placeholder : placeholderProp, onChange : onChangeProp,
  fullWidth, isRequired, className,
}, ref) => {
  const onChange = useCallback(
    (evt) => onChangeProp(evt.target.value),
    [onChangeProp],
  );

  const placeholder = useMemo(
    () => (isRequired ? `${placeholderProp} *` : placeholderProp),
    [placeholderProp, isRequired],
  );

  return (
    <SInput
      className={className}
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
  isRequired  : false,
  className   : undefined,
  onChange    : undefined,
};

Input.propTypes = {
  name        : PropTypes.string.isRequired,
  value       : PropTypes.string,
  placeholder : PropTypes.string,
  className   : PropTypes.string,
  isRequired  : PropTypes.bool,
  fullWidth   : PropTypes.bool,
  onChange    : PropTypes.func,
};

export default Input;
