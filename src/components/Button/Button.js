import React from 'react';
import PropTypes from 'prop-types';

import Spinner from '../Spinner';

import SWrapper from './styled';

const Button = ({
  children, onClick, isDisabled, isLoading, type, fullWidth,
}) => (
  <SWrapper
    onClick={onClick}
    isLoading={isLoading}
    isDisabled={isDisabled || isLoading}
    fullWidth={fullWidth}
    type={type}
  >
    {isLoading ? <Spinner /> : children}
  </SWrapper>
);

Button.defaultProps = {
  onClick    : undefined,
  isDisabled : false,
  isLoading  : false,
  fullWidth  : false,
};

Button.propTypes = {
  children   : PropTypes.node.isRequired,
  onClick    : PropTypes.func,
  isDisabled : PropTypes.bool,
  isLoading  : PropTypes.bool,
  fullWidth  : PropTypes.bool,
  type       : PropTypes.string.isRequired,
};

export default Button;
