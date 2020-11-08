import React, { useRef } from 'react';
// import { Circle as CircleIcon } from '@styled-icons/fa-solid/Circle';

// import ToolButton from '../ToolButton';

import SWrapper from './styled';

const ToolOptions = ({ show, children }) => {
  return (
    <SWrapper show={show}>
      {children}
    </SWrapper>
  );
};

export default ToolOptions;
