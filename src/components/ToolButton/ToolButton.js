import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { drawingColors, drawingColorCodes } from '#constants';

import Spinner from '../Spinner';
import { SWrapper, SIcon } from './styled';

const testId = 'toolbutton-component';

const ToolButton = forwardRef(({
  icon, color, isLoading, isSelected, onClick, children,
}, ref) => (
  <SWrapper
    ref={ref}
    color={drawingColorCodes[color]}
    onClick={onClick}
    isLoading={isLoading}
    isSelected={isSelected}
    data-testid={testId}
  >
    {isLoading ? <Spinner size="md" dark /> : (
      <>
        <SIcon color={drawingColorCodes[color]}>
          {icon}
        </SIcon>
        {children}
      </>
    )}
  </SWrapper>
));

ToolButton.defaultProps = {
  children   : undefined,
  color      : undefined,
  isLoading  : false,
  isSelected : false,
};

ToolButton.propTypes = {
  children   : PropTypes.node,
  color      : PropTypes.oneOf(Object.values(drawingColors)),
  icon       : PropTypes.node.isRequired,
  onClick    : PropTypes.func.isRequired,
  isLoading  : PropTypes.bool,
  isSelected : PropTypes.bool,
};

export default ToolButton;
