import React from 'react';
import PropTypes from 'prop-types';

import SWrapper from './styled';

const Card = ({ children, className }) => (
  <SWrapper className={className}>
    {children}
  </SWrapper>
);

Card.defaultProps = {
  className : undefined,
};

Card.propTypes = {
  children  : PropTypes.node.isRequired,
  className : PropTypes.string,
};

export default Card;
