import React from 'react';
import PropTypes from 'prop-types';

import { SWrapper } from './styled';

const CreateStep = ({ show, onCreate, onCancel }) => (
  <SWrapper show={show}>#</SWrapper>
);

CreateStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onCreate : PropTypes.func.isRequired,
  onCancel : PropTypes.func.isRequired,
};

export default CreateStep;
