import React from 'react';
import PropTypes from 'prop-types';

import SWrapper from './styled';

const Button = ({
  children, onClick, primary, fullWidth, spaceBetween,
}) => (
  <SWrapper
    onClick={onClick}
    fullWidth={fullWidth}
    spaceBetween={spaceBetween}
    primary={primary}
  >
    {children}
  </SWrapper>
);

Button.defaultProps = {
  onClick      : undefined,
  primary      : false,
  fullWidth    : false,
  spaceBetween : false,
};

Button.propTypes = {
  children     : PropTypes.node.isRequired,
  onClick      : PropTypes.func,
  primary      : PropTypes.bool,
  fullWidth    : PropTypes.bool,
  spaceBetween : PropTypes.bool,
};

export default Button;
