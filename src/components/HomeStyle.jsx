import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`;

export const Body = styled.div`
  width: 100%;
  height: 85%;
`;

// Navigation---------------------------------------------
export const HeaderContainer = styled.div`
  width: 100%;
  height: 15%;
`;

export const HeaderLogoSection = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
`;

export const SmallLogoBox = styled.img`
  width: 150px;
  transition: all 0.3s;
`;

export const InfoBox = styled.section`
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
  @media all and (max-width: 350px) {
    width: 80px;
  }
`;

export const ThemeButton = styled.button`
  width: 50px;
  height: 20px;
  position: relative;
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.textColor};
  transition: all 0.3s;
  @media all and (max-width: 350px) {
    width: 40px;
  }
  cursor: pointer;
`;

export const ThemeIcon = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.thememode === 'black' ? '25%' : '75%')};
  color: ${(props) => props.theme.bgColor};
  transform: translate(-50%, -50%);
  transition: all 0.3s;
`;

export const SignButton = styled.button`
  width: 70px;
  height: 30px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.textColor};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderNavSection = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Navsection0 = styled.section`
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DMSansBold';
  font-weight: 900;
  border-bottom: ${(props) =>
    props.currentPage === 0 ? `2.5px solid ${props.theme.primaryColor}` : ``};
  border-color: ${(props) =>
    props.themeMode === 'black'
      ? props.theme.primaryColor
      : props.theme.textColor};
  cursor: pointer;
`;

export const Navsection1 = styled.section`
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DMSansBold';
  font-weight: 900;
  border-bottom: ${(props) =>
    props.currentPage === 1 ? `2.5px solid ${props.theme.primaryColor}` : ``};
  border-color: ${(props) =>
    props.themeMode === 'black'
      ? props.theme.primaryColor
      : props.theme.textColor};
  cursor: pointer;
`;

export const Navsection2 = styled.section`
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DMSansBold';
  font-weight: 900;
  border-bottom: ${(props) =>
    props.currentPage === 2 ? `2.5px solid ${props.theme.primaryColor}` : ``};
  border-color: ${(props) =>
    props.themeMode === 'black'
      ? props.theme.primaryColor
      : props.theme.textColor};
  cursor: pointer;
`;
