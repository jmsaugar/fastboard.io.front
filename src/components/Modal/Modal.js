import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

import { SContent, SBackground } from './styled';

const Modal = ({ children, target, show }) => {
  const [targetElement, setTargetElement] = useState();

  // Get the DOM element that is target for the modal
  useEffect(
    () => setTargetElement(document.getElementById(target)),
    [target, setTargetElement],
  );

  if (!targetElement) {
    return null;
  }

  return createPortal(
    <SBackground show={show}>
      <SContent show={show}>
        {children}
      </SContent>
    </SBackground>,
    targetElement,
  );
};

Modal.propTypes = {
  children : PropTypes.node.isRequired,
  show     : PropTypes.bool.isRequired,
  target   : PropTypes.string.isRequired,
};

export default Modal;
