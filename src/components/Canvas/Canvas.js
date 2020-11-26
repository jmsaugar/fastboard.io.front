import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectedToolSelector, toolsColorsSelector } from '#store';

import { tool2cursor } from './constants';
import SCanvas from './styled';

const Canvas = ({ id }) => {
  const tool = useSelector(selectedToolSelector);
  const colors = useSelector(toolsColorsSelector);

  // @todo memo cursor?
  const cursor = tool2cursor[tool]?.[colors[tool]] || tool2cursor[tool];

  return (
    <SCanvas
      id={id}
      cursor={cursor}
      resize
    />
  );
};

Canvas.propTypes = {
  id : PropTypes.string.isRequired,
};

export default Canvas;
