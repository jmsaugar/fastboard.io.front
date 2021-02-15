import React, {
  useCallback, useEffect, useRef, useState,
} from 'react';
import PropTypes from 'prop-types';

import SWrapper from './styled';

const escapeKey = 'Escape';
const heightPerLine = 21;
const widthPerChar = 12;
const minWidthInChars = 12;

// @todo improve this
const calculateHeight = (text) => text.split(/\r\n|\r|\n/).length * heightPerLine;
const calculateWidth = (text) => text.split(/\r\n|\r|\n/)
  .reduce((acc, curr) => (acc > curr.length ? acc : curr.length), minWidthInChars)
  * widthPerChar;

const TextAreaItem = ({
  show, top, left, textColor, onChange : onChangeProp, onStop,
}) => {
  const ref = useRef();
  const [width, setWidth] = useState(widthPerChar * minWidthInChars);
  const [height, setHeight] = useState(heightPerLine);
  const [value, setValue] = useState('');

  useEffect(() => {
    if (show) {
      ref.current.focus();
    } else {
      setValue('');
      setWidth(widthPerChar * minWidthInChars);
      setHeight(heightPerLine);
    }
  }, [show]);

  const onChange = useCallback(
    (evt) => {
      const newValue = evt.target.value;

      setValue(newValue);
      onChangeProp(newValue);

      setHeight(calculateHeight(newValue));
      setWidth(calculateWidth(newValue));
    },
    [onChangeProp, setValue, setWidth],
  );

  const onKeyDown = useCallback((evt) => {
    if (evt.key === escapeKey) {
      onStop();
    }
  }, [onStop]);

  if (top === undefined || left === undefined) {
    return null;
  }

  return (
    <SWrapper
      ref={ref}
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
      show={show}
      top={top}
      left={left}
      width={width}
      height={height}
      textColor={textColor}
    />
  );
};

TextAreaItem.defaultProps = {
  top       : undefined,
  left      : undefined,
  textColor : undefined,
};

TextAreaItem.propTypes = {
  show      : PropTypes.bool.isRequired,
  top       : PropTypes.number,
  left      : PropTypes.number,
  textColor : PropTypes.string,
  onChange  : PropTypes.func.isRequired,
  onStop    : PropTypes.func.isRequired,
};

export default TextAreaItem;
