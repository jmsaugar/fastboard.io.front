import React from 'react';
import PropTypes from 'prop-types';

import { SWrapper, SContent } from './styled';

const MainLayout = ({ header, content, footer }) => (
  <SWrapper>
    {header}
    <SContent>
      {content}
    </SContent>
    {footer}
  </SWrapper>
);

MainLayout.propTypes = {
  header  : PropTypes.node.isRequired,
  content : PropTypes.node.isRequired,
  footer  : PropTypes.node.isRequired,
};

export default MainLayout;
