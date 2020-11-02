import React from 'react';
import PropTypes from 'prop-types';

const Canvas = ({ id }) => (
  <canvas id={id} style={{ width: '100%', height: '100%' }} resize />
);

Canvas.propTypes = {
  id : PropTypes.string.isRequired,
};

export default Canvas;
