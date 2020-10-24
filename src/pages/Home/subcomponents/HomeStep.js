import React from 'react';
import PropTypes from 'prop-types';

import { SWrapper, STitle, STagLine } from './styled';

const HomeStep = ({ show, onCreate, onJoin }) => (
  <SWrapper show={show}>
    <STitle>
      Draw & share
    </STitle>
    <STagLine>
      Draw real-time with anyone on the other side and improve your productivity now.
      Just one click away.
    </STagLine>
  </SWrapper>
);

HomeStep.propTypes = {
  show     : PropTypes.bool.isRequired,
  onCreate : PropTypes.func.isRequired,
  onJoin   : PropTypes.func.isRequired,
};

export default HomeStep;
