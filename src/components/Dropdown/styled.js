import styled, { css } from '@xstyled/styled-components';
import { th, variant } from '@xstyled/system';
import { ChevronDown } from '@styled-icons/fa-solid/ChevronDown';

const menuOffset = '40px';
const caretSize = '12px';
const padding = '8px 14px'; // @todo to theme?

export const SWrapper = styled.div`
  position: relative;
  font-size: 14px;
`;

export const SLabel = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: ${padding};
  border-width: default;
  border-style: default;
  border-color: border;

  background-color: bg;
  border-radius: default;
  color: fg;
  outline: 0;

  transition: default;

  &:hover {
    box-shadow: default;
    cursor: pointer;
  }
`;

export const SCaret = styled(ChevronDown)`
  width: ${caretSize};
  height: ${caretSize};

  transition: default;

  ${variant({
    default  : false,
    prop     : 'isOpen',
    variants : {
      true : css`
        transform: rotate(180deg);
      `,
      false : '',
    },
  })}
`;

export const SMenu = styled.div`
  position: absolute;
  top: ${menuOffset};
  left: 0;
  width: calc(100% - 2*${th('borderWidths.default')});
  border-width: default;
  border-style: default;
  border-color: border;  

  background-color: bg; 
  border-radius: default;
  box-shadow: default;
`;

export const SItem = styled.div`
  padding: ${padding};

  transition: default;

  &:hover {
    background-color: bgHover;
    cursor: pointer;
  }
`;
