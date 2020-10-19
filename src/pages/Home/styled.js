import styled from '@xstyled/styled-components';
import backgroundImg from '../../theme/images/homebg.jpg'; // @todo compress this image

// @todo theme values - spaces

export const SWrapper = styled.div`
  height: 100%;
  width: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg});
  background-position: top;
  background-size: cover;
  color: white;
`;

export const SContent = styled.div`
  padding: 200px;
`;

export const SFooter = styled.div`
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
