import styled, { css, breakpoints, up } from '@xstyled/styled-components';
import { getSpace, variant } from '@xstyled/system';

const actionWidth = '300px';
const formElementHeight = '80px';
const textShadow = '2px 2px 2px rgba(0,0,0,0.2)';
const focusedBgColor = 'rgba(255, 255, 255, 0.2)';
const stepsTransitionDelay = '0.4s';
const formsFontSize = '30px';

export const SWrapper = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'MontserratBold';
  text-align: center;
  text-shadow: ${textShadow};
  transition: long;

  ${variant({
    default  : false,
    prop     : 'show',
    variants : {
      true : css`
        transition-delay: ${stepsTransitionDelay};
        transition-property: opacity;
      `,
      false : css`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `,
    },
  })}

  ${breakpoints({
    xs : css`padding: default;`,
    sm : css`padding: 40px;`,
    md : css`padding: 80px;`,
    lg : css`padding: 120px;`,
    xl : css`
      padding-left: 200px;
      align-items: unset;
      text-align: left;
    `,
  })}
`;

// @todo line-height
export const STitle = styled.div`
  line-height: 80%;

  ${breakpoints({
    xs : css`font-size:  40px;`,
    sm : css`font-size:  50px;`,
    md : css`font-size:  60px;`,
    xl : css`font-size:  90px;`,
  })}
`;

const SBlock = styled.div`
  margin-top: default;
`;

export const STagLine = styled(SBlock)`
  font-size: 20px;
  font-weight: bold;

  ${up('md', css`font-size: 24px;`)}
  ${up('xl', css`
    width: 700px;
    font-size: 30px;
  `)}
`;

export const SInputs = styled(SBlock)`
  display: flex;
  width: 100%;
  flex-direction: column;

  ${up('md', css`width: calc(2 * ${actionWidth} + ${getSpace('default')});`)}
`;

// @todo gap property not working on mobile
export const SActions = styled(SBlock)`
  display: flex;
  flex-direction: ${({ isHomeStep }) => (isHomeStep ? 'column' : 'column-reverse')};
  align-items: center;
  justify-content: center;
  gap: ${getSpace('default')};

  ${up('md', css`
    flex-direction: row;
    justify-content: left;
  `)}
`;

export const SInput = styled.input`
  display: block;
  width: 100%;
  height: ${formElementHeight};
  box-sizing: border-box;
  padding: 0 40px;
  border-width: lg;
  border-style: default;
  border-color: white;
  background-color: transparent;
  border-radius: rounded;
  color: white;
  font-size: ${formsFontSize};
  outline: 0;

  text-shadow: ${textShadow};
  transition: default;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
    font-size: 22px;
  }
  &:focus {
    background-color: ${focusedBgColor};
  }
  & + & {
    margin-top: ${getSpace('default')};
  }
`;

export const SAction = styled.button`
  width: ${actionWidth};
  height: ${formElementHeight};
  border-width: lg;
  border-style: default;
  border-color: white;
  background-color: transparent;
  border-radius: rounded;
  color: white;
  cursor : pointer;
  font-size: ${formsFontSize};
  outline: 0;
  text-shadow: ${textShadow};
  transition: default;

  &:hover, &:focus {
    background-color: ${focusedBgColor};
  }
`;
