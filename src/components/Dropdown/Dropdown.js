import React, { useCallback, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { escapeKeyCode } from '../../constants';
import { useKey, useOutsideClick } from '../../hooks';
import Button from '../Button';

import {
  SWrapper, SLabel, SCaret, SMenu, SItem,
} from './styled';

const Dropdown = ({ label, options }) => {
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  const hide = useCallback(
    () => {
      if (showMenu) {
        setShowMenu(false);
      }
    },
    [showMenu, setShowMenu],
  );

  useKey(escapeKeyCode, hide);
  useOutsideClick(menuRef, hide);

  return (
    <SWrapper>
      <Button
        type="secondary"
        onClick={() => setShowMenu(!showMenu)}
        fullWidth
      >
        <SLabel>
          {label}
          <SCaret isOpen={showMenu} />
        </SLabel>
      </Button>
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
