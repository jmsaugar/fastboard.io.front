import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';
import { CaretDown } from '@styled-icons/fa-solid/CaretDown';

export const SWrapper = styled.div`
  position: relative;
  font-family: MontserratRegular;
  font-size: 16px;
  
`;

export const SLabel = styled.button`
  border-radius: 4px;
  border-color: border;
  border-style: solid;
  padding: 4px 8px;
  border-width: 1px;
  width: 100%;

  background-color: bg;
  

  transition: default;
  &:hover {
    cursor: pointer;
    box-shadow: default;
  }
`;

export const SCaret = styled(CaretDown)`
  margin-left: 6px;
  width: 22px;
  height: 22px;
  transition: default;
  transform: translate(0, -1px);

  ${variant({
    default  : false,
    prop     : 'isOpen',
    variants : {
      true : css`
        transform: rotate(-180deg);
      `,
      false : '',
    }
  })}
`;

export const SMenu = styled.div`
transition-duration: .3s;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: bg;
  width: 100%;
`;

export const SItem = styled.div`
  padding: 4px 8px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;
