import React from 'react';

import { SWrapper, SIcon } from './styled';

const ToolButton = ({ icon, onClick, children }) => (
  <SWrapper onClick={onClick}>
    <SIcon>
      {icon}
    </SIcon>
    {children}
  </SWrapper>
);

export default ToolButton;
