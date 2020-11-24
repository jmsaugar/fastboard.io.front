import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { drawingColors } from '#constants';

import { SWrapper, SIcon } from './styled';

const ToolButton = forwardRef(({
  icon, color, selected, onClick, children,
}, ref) => (
  <SWrapper ref={ref} color={color} onClick={onClick} selected={selected}>
    <SIcon color={color}>
      {icon}
    </SIcon>
    {children}
  </SWrapper>
));

ToolButton.defaultProps = {
  children : undefined,
  color    : undefined,
  selected : false,
};

ToolButton.propTypes = {
  children : PropTypes.node,
  color    : PropTypes.oneOf(Object.values(drawingColors)),
  icon     : PropTypes.node.isRequired,
  onClick  : PropTypes.func.isRequired,
  selected : PropTypes.bool,
};

export default ToolButton;
