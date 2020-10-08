import styled from '@xstyled/styled-components';
import backgroundImg from '../../theme/images/background.jpg';

export const SWrapper = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${backgroundImg});
  background-size: cover;
  background-position: top;
  color: white;
  height: 100%; // substract padding*2 here
`;

export const STitle = styled.div`
  font-family: 'MontserratBold';
  font-size: 90px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2)
`;

export const STagLine = styled.div`
  font-family: 'MontserratBold';
  font-size: 30px;
  width: 700px;
  font-weight: bold;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2)
`;


export const SButton = styled.button`
  background: none;
  border: 2px solid white;
  width: 300px;
  height: 80px;
  border-radius: 60px;
  color: white;
  font-size: 30px;
  font-family: 'MontserratBold';
  margin-top: 20px;
  margin-right: 20px;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.2)

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.3);
  }
`;
