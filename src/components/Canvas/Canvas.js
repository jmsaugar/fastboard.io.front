import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { selectedToolSelector, toolsColorsSelector } from '#store';

import { tool2cursor } from './constants';
import { SCanvas, SViewControl } from './styled';

const Canvas = ({ drawingsId, mapId }) => {
  const tool = useSelector(selectedToolSelector);
  const colors = useSelector(toolsColorsSelector);

  const cursor = useMemo(
    () => (tool2cursor[tool]?.[colors[tool]] || tool2cursor[tool]),
    [tool, colors],
  );

  return (
    <>
      <SCanvas id={drawingsId} cursor={cursor} resize />
      <SViewControl id={mapId} />
    </>
  );
};

Canvas.propTypes = {
  drawingsId : PropTypes.string.isRequired,
  mapId      : PropTypes.string.isRequired,
};

export default Canvas;
