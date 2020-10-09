import React from 'react';
import PropTypes from 'prop-types';

import { SLabel } from './styled';

const Dropdown = ({ label, options }) => (
  <>
    <SLabel>{label}</SLabel>
    {options.map(({ label: optionLabel, onClick }) => (
      <div onClick={onClick}>
        {optionLabel}
      </div>
    ))}
  </>
);

Dropdown.propTypes = {
  label   : PropTypes.string.isRequired, // @todo improve this to accept a node
  options : PropTypes.arrayOf(PropTypes.shape({
    label   : PropTypes.string.isRequired,
    onClick : PropTypes.func,
  })).isRequired,
};

export default Dropdown;
