import styled, { css, breakpoints, up } from '@xstyled/styled-components';
import { getSize, getSpace, variant } from '@xstyled/system';
import { ExclamationCircle as ErrorIcon } from '@styled-icons/fa-solid/ExclamationCircle';

import { Button, Input } from '#components';

const textShadow = '2px 2px 2px rgba(0,0,0,0.2)';
const focusedBgColor = 'rgba(255, 255, 255, 0.2)';
const formFgAlphaColor = 'rgba(255, 255, 255, 0.7)';
const stepsTransitionDelay = '0.4s';

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
  max-width: 100%;
  flex-direction: column;

  ${up('md', css`width: calc(2 * ${getSize('buttonWidthLg')} + ${getSpace('default')});`)}
`;

// @todo gap property not working on mobile
export const SActions = styled(SBlock)`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${getSpace('default')};

  ${up('md', css`flex-direction: row;`)}
  ${up('xl', css`justify-content: left;`)}
`;

export const SInput = styled(Input)`
  display: block;
  width: 100%;
  height: formHeightLg;
  box-sizing: border-box;
  padding: 0 40px;
  border-width: lg;
  border-style: default;
  border-color: white;
  background-color: transparent;
  border-radius: rounded;
  color: white;
  font-size: xxlg;
  outline: 0;

  text-shadow: ${textShadow};
  transition: default;

  &::placeholder {
    color: ${formFgAlphaColor};
    font-size: 22px;
  }
  &:focus {
    border-color: white;
    background-color: ${focusedBgColor};
  }
  & + & {
    margin-top: ${getSpace('default')};
  }
`;

export const SAction = styled(Button)`
  width: 100%;
  border-width: lg;
  background-color: transparent;
  border-radius: rounded;
  font-size: xxlg;
  text-shadow: ${textShadow};

  &:hover, &:focus {
    background-color: ${focusedBgColor};
  }

  ${up('md', css`
    width: buttonWidthLg;
    order: ${({ isMainAction }) => (isMainAction ? 1 : 0)};
  `)}

  ${variant({
    default  : false,
    prop     : 'isDisabled',
    variants : {
      true : css`
        border-color: ${formFgAlphaColor};
        color: ${formFgAlphaColor};
      `,
      false : css`
        border-color: white;
        color: white;
      `,
    },
  })}
`;

export const SErrorIcon = styled(ErrorIcon)`
  width: 32px;
  height: 32px;
  margin-top: -2px;
  margin-right: sm;
`;

// @todo to constants
// @todo improve positioning of this
export const SErrorMessage = styled.div`
  position: absolute;
  bottom: -80px;

  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 12px default;
  margin-top: 40px;
  background-color: errorAlpha;
  border-radius: rounded;
  color: white;
  font-size: 18px;
  text-align: center;

  ${up('md', css`
    width: calc(2 * ${getSize('buttonWidthLg')} + ${getSpace('default')});
  `)}
`;
