import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { useKey, useOutsideClick } from '../../hooks';

import {
  SWrapper, SLabel, SCaret, SMenu, SItem,
} from './styled';

/**
 * @see https://developer.mozilla.org/es/docs/Web/API/KeyboardEvent/key/Key_Values
 */
const escapeKeyCode = 'Escape';

const Dropdown = ({ label, options }) => {
  const menuRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);

  const hide = useCallback(
    () => {
      if (showMenu) {
        setShowMenu(false);
      }
    },
    [setShowMenu, showMenu],
  );

  useKey(escapeKeyCode, hide);
  useOutsideClick(menuRef, hide);

  return (
    <SWrapper>
      <SLabel onClick={() => setShowMenu(!showMenu)}>
        {label}
        <SCaret isOpen={showMenu} />
      </SLabel>
      {showMenu && (
        <SMenu ref={menuRef}>
          {options.map(({ id, label: optionLabel, onClick }) => (
            <SItem
              key={id}
              onClick={() => {
                onClick();
                hide();
              }}
            >
              {optionLabel}
            </SItem>
          ))}
        </SMenu>
      )}
    </SWrapper>
  );
};

Dropdown.propTypes = {
  label   : PropTypes.string.isRequired,
  options : PropTypes.arrayOf(PropTypes.shape({
    label   : PropTypes.string.isRequired,
    onClick : PropTypes.func,
  })).isRequired,
};

export default Dropdown;
