import React from 'react';
import PropTypes from 'prop-types';

import SWrapper from './styled';

const MainLayout = ({
  id, header, content, footer,
}) => (
  <SWrapper id={id}>
    {header}
    {content}
    {footer}
  </SWrapper>
);

MainLayout.defaultProps = {
  id : undefined,
};

MainLayout.propTypes = {
  id      : PropTypes.string,
  header  : PropTypes.node.isRequired,
  content : PropTypes.node.isRequired,
  footer  : PropTypes.node.isRequired,
};

export default MainLayout;
