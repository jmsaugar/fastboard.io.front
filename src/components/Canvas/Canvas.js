import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectedToolSelector, toolsColorsSelector } from '#store';

import { tool2cursor } from './constants';
import SCanvas from './styled';

const Canvas = ({ id }) => {
  const tool = useSelector(selectedToolSelector);
  const colors = useSelector(toolsColorsSelector);

  const cursor = useMemo(
    () => (tool2cursor[tool]?.[colors[tool]] || tool2cursor[tool]),
    [tool, colors],
  );

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
