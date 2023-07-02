import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border: 3px solid brown;
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
`;

export const InfoBox = styled.section`
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 900;
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

export const Navsection = styled.section`
  width: 32%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DMSansBold';
  font-weight: 900;
  border-bottom: ${(props) => `2.5px solid ${props.theme.primaryColor}`};
`;
