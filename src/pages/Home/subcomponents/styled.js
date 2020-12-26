import styled, { css } from '@xstyled/styled-components';
import { getBorderWidth, variant } from '@xstyled/system';

// @todo refactor all this
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
  width: 100%;
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
  margin-top: 30px;
  background-color: transparent;
  border-radius: rounded;
  color: white;
  cursor : pointer;
  font-size: 30px;
  outline: 0;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);

  &:hover, &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SInput = styled.input`
  display: block;
  width: calc(2*300px + 30px - 80px - 4px);
  height: calc(80px - 2*${getBorderWidth('lg')});
  padding: 0 40px;
  border-width: lg;
  border-style: default;
  border-color: white;
  margin-top: 20px;
  background-color: transparent;
  border-radius: rounded;
  color: white;
  font-size: 30px;
  outline: 0;

  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 22px;
  }
  &:focus {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
