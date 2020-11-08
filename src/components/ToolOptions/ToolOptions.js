import React from 'react';
import { Circle as CircleIcon } from '@styled-icons/fa-solid/Circle';

import ToolButton from '../ToolButton';

import SWrapper from './styled';

const ToolOptions = ({ show }) => {
  return (
    <SWrapper show={show}>
      <ToolButton icon={<CircleIcon />} />
      <ToolButton icon={<CircleIcon />} />
      <ToolButton icon={<CircleIcon />} />
      <ToolButton icon={<CircleIcon />} />
      <ToolButton icon={<CircleIcon />} />
      <ToolButton icon={<CircleIcon />} />
    </SWrapper>
  );
};

export default ToolOptions;
