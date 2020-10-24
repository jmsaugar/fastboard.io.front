import styled, { css } from '@xstyled/styled-components';
import { variant } from '@xstyled/system';

export const SWrapper = styled.div`
  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true  : '',
      false : css`
        opacity: 0;
      `,
    },
  })}
`;


export const SContent = styled.div`
  position: absolute;
  padding: 200px;
  transition: .3s;

  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true  : '',
      false : css`
        opacity: 0;
      `,
    },
  })}
`;

export const SContent2 = styled.div`
  position: absolute;
  padding: 200px;
  transition: .3s;
  margin-top: 60px;

  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true  : '',
      false : css`
        opacity: 0;
        pointer-events: none;
      `,
    },
  })}
`;

export const STitle = styled.div`
  font-family: 'MontserratBold';
  font-size: 90px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2)
`;

export const STagLine = styled.div`
  width: 700px;

  font-family: 'MontserratBold';
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2)
`;

export const SButton = styled.button`
  width: 300px;
  height: 80px;

  outline: unset;
  border-width: lg;
  border-style: default;
  border-color: white;
  margin-top: 20px;
  margin-right: 20px;
  background-color: transparent;

  border-radius: rounded;
  color: white;
  font-family: 'MontserratBold';
  font-size: 30px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);

  }
`;