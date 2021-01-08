import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import SWrapper from './styled';

const Button = ({
  children, onClick, isDisabled, isLoading, type, fullWidth, className,
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
      className={className}
    >
      {isLoading ? <Spinner /> : children}
    </SWrapper>
  );
};

Button.defaultProps = {
  onClick    : undefined,
  isDisabled : false,
  isLoading  : false,
  fullWidth  : false,
  className  : undefined,
  type       : 'primary',
};

Button.propTypes = {
  children   : PropTypes.node.isRequired,
  onClick    : PropTypes.func,
  isDisabled : PropTypes.bool,
  isLoading  : PropTypes.bool,
  fullWidth  : PropTypes.bool,
  className  : PropTypes.string,
  type       : PropTypes.string,
};

export default Button;
