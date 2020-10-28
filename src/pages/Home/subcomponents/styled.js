import styled, { css } from '@xstyled/styled-components';
import { getBorderWidth, variant } from '@xstyled/system';

export const SWrapper = styled.div`
  position: absolute;
  font-family: 'MontserratBold';
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  transition: long;

  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true : css`
        transition-delay: .4s;
      `,
      false : css`
        opacity: 0;
        pointer-events: none;
      `,
    },
  })}
`;

export const STitle = styled.div`
  font-size: 90px;
`;

export const STagLine = styled.div`
  width: 700px;

  font-size: 30px;
  font-weight: bold;
`;

export const SActions = styled.div`
  & > button + button {
    margin-left: 30px;
  }
`;

export const SAction = styled.button`
  width: 300px;
  height: 80px;

  border-width: lg;
  border-style: default;
  border-color: white;
  margin-top: 20px;
  background-color: transparent;
  border-radius: rounded;

  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);

  color: white;
  cursor : pointer;
  font-size: 30px;

  outline: 0;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SInput = styled.input`
  display: block;
  height: calc(80px - 2*${getBorderWidth('lg')});
  width: 216px;
  border-width: lg;
  border-style: default;
  border-color: white;
  background-color: transparent;
  border-radius: rounded;
  color: white;
  font-size: 30px;
  outline: 0;
  padding: 0 40px;

  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);

  &::placeholder {
    color: #aaa;
    font-size: 30px;
  }
`;
