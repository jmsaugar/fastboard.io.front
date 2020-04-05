import React from 'react';
import PropTypes from 'prop-types';

import { SHeader, SContent } from './styled';

const Main = ({ header, content }) => (
    <>
        <SHeader>
            {header}
        </SHeader>
        <SContent>
            {content}
        </SContent>
    </>
);

Main.propTypes = {
    header: PropTypes.node.isRequired,
    contente: PropTypes.node.isRequired,
};

export default Main;
