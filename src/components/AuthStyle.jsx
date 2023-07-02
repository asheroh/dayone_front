import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const BodySection = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoSection = styled.img`
  width: 200px;
  height: 200px;
`;

export const LogoText = styled.span`
  font-family: 'DMSansBold';
  font-weight: 700;
  font-size: 20px;
`;

export const LogoBoldText = styled.span`
  color: ${(props) => props.theme.primaryColor};
  font-family: 'DMSansBold';
  font-weight: 700;
  font-size: 20px;
`;

export const FooterSection = styled.section`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const FooterText = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const FooterSubText = styled.p`
  font-size: 12px;
  color: #8b8b8b;
  cursor: pointer;
`;
