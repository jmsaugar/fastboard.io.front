import React from 'react';

import { SWrapper, SIcon } from './styled';

const ToolButton = ({ icon, onClick }) => (
  <SWrapper onClick={onClick}>
    <SIcon>
      {icon}
    </SIcon>
  </SWrapper>
);

export default ToolButton;
