import React from 'react';

import { SWrapper, SIcon } from './styled';

const ToolButton = ({ icon }) => (
  <SWrapper>
    <SIcon>
      {icon}
    </SIcon>
  </SWrapper>
);

export default ToolButton;
