import React from 'react';
import PropTypes from 'prop-types';

import SWrapper from './styled';

const Button = ({
  children, onClick, type, fullWidth,
}) => (
  <SWrapper
    onClick={onClick}
    fullWidth={fullWidth}
    type={type}
  >
    {children}
  </SWrapper>
);

Button.defaultProps = {
  onClick   : undefined,
  fullWidth : false,
};

Button.propTypes = {
  children  : PropTypes.node.isRequired,
  onClick   : PropTypes.func,
  fullWidth : PropTypes.bool,
  type      : PropTypes.string.isRequired,
};

export default Button;
