import styled from '@xstyled/styled-components';
import backgroundImg from '../../theme/images/background.jpg';

export const SWrapper = styled.div`
  height: 100%;

  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg});
  background-position: top;
  background-size: cover;
  color:  white;
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

  border: 2px solid white;
  margin-top: 20px;
  margin-right: 20px;
  background: none;

  border-radius: 60px;
  color: white;
  font-family: 'MontserratBold';
  font-size: 30px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2)

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    cursor: pointer;
  }
`;
