import React from 'react';
import PropTypes from 'prop-types';

import { SWrapper } from './styled';

const JoinStep = ({ show, onJoin, onCancel }) => (
  <SWrapper show={show}>#</SWrapper>
);

JoinStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onJoin   : PropTypes.func.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default JoinStep;
