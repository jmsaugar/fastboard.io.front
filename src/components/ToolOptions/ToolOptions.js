import React from 'react';
import propTypes from 'prop-types';

import SWrapper from './styled';

const ToolOptions = ({ show, children }) => (
  <SWrapper show={show}>
    {children}
  </SWrapper>
);

ToolOptions.propTypes = {
  show     : propTypes.bool.isRequired,
  children : propTypes.node.isRequired,
};

export default ToolOptions;
