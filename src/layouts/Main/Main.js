import React from 'react';
import PropTypes from 'prop-types';

import { SWrapper, SContent } from './styled';

const Main = ({ header, content }) => (
  <SWrapper>
    {header}
    <SContent>
      {content}
    </SContent>
  </SWrapper>
);

Main.propTypes = {
  header  : PropTypes.node.isRequired,
  content : PropTypes.node.isRequired,
};

export default Main;
