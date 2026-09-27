import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import SWrapper from './styled';

// @todo variants to constants exported by each component?
const button2SpinnerSize = {
  default : 'sm',
  md      : 'sm',
  lg      : 'lg',
};

const Button = ({
  children, onClick, isDisabled, isLoading, variant, type, fullWidth, size, className,
}) => {
  const onClickMemo = useMemo(
    () => (isDisabled ? undefined : onClick),
    [isDisabled, onClick],
  );

  return (
    <SWrapper
      onClick={onClickMemo}
      isLoading={isLoading}
      disabled={isDisabled || isLoading}
      fullWidth={fullWidth}
      type={type}
      variant={variant}
      size={size}
      className={className}
    >
      {isLoading ? <Spinner size={button2SpinnerSize[size]} /> : children}
    </SWrapper>
  );
};

Button.defaultProps = {
  onClick    : undefined,
  isDisabled : false,
  isLoading  : false,
  fullWidth  : false,
  className  : undefined,
  size       : 'default',
  variant    : 'primary',
  type       : 'button',
};

Button.propTypes = {
  children   : PropTypes.node.isRequired,
  onClick    : PropTypes.func,
  isDisabled : PropTypes.bool,
  isLoading  : PropTypes.bool,
  fullWidth  : PropTypes.bool,
  className  : PropTypes.string,
  size       : PropTypes.string,
  variant    : PropTypes.string,
  type       : PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
