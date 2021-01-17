import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectedToolSelector, toolsColorsSelector, isDraggingMapSelector } from '#store';

import { tool2cursor } from './constants';
import { SCanvas, SMap } from './styled';

const Canvas = ({ drawingsId, mapId }) => {
  const tool = useSelector(selectedToolSelector);
  const colors = useSelector(toolsColorsSelector);
  const isDraggingMap = useSelector(isDraggingMapSelector);

  const cursor = useMemo(
    () => (tool2cursor[tool]?.[colors[tool]] || tool2cursor[tool]),
    [tool, colors],
  );

  return (
    <>
      <SCanvas id={drawingsId} cursor={cursor} resize />
      <SMap id={mapId} isDragging={isDraggingMap} />
    </>
  );
};

Canvas.propTypes = {
  drawingsId : PropTypes.string.isRequired,
  mapId      : PropTypes.string.isRequired,
};

export default Canvas;
