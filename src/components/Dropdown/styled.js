import styled, { css } from '@xstyled/styled-components';
import { getBorderWidth, variant } from '@xstyled/system';
import { ChevronDown } from '@styled-icons/fa-solid/ChevronDown';

const menuOffset = '40px';
const caretSize = '12px';

export const SWrapper = styled.div`
  position: relative;
`;

export const SLabel = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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
  z-index: top;
  top: ${menuOffset};
  left: 0;
  width: calc(100% - 2*${getBorderWidth('default')});
  border-width: default;
  border-style: default;
  border-color: border;

  background-color: bg;
  border-radius: default;
  box-shadow: default;
`;

export const SItem = styled.div`
  padding: xs md;

  transition: default;

  &:hover {
    background-color: bgHover;
    cursor: pointer;
  }
`;
