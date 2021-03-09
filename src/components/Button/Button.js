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
  children, onClick, isDisabled, isLoading, type, fullWidth, size, className,
}) => {
  const onClickMemo = useMemo(
    () => (isDisabled ? undefined : onClick),
    [isDisabled, onClick],
  );

  return (
    <SWrapper
      onClick={onClickMemo}
      isLoading={isLoading}
      isDisabled={isDisabled || isLoading}
      fullWidth={fullWidth}
      type={type}
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
  type       : 'primary',
};

Button.propTypes = {
  children   : PropTypes.node.isRequired,
  onClick    : PropTypes.func,
  isDisabled : PropTypes.bool,
  isLoading  : PropTypes.bool,
  fullWidth  : PropTypes.bool,
  className  : PropTypes.string,
  size       : PropTypes.string,
  type       : PropTypes.string,
};

export default Button;
