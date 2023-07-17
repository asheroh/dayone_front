import React from 'react';
import Logo from '../../assets/images/dayone_logo.svg';
import {
  AuthContainer,
  BodySection,
  FooterSection,
  FooterSubText,
  FooterText,
  LogoBoldText,
  LogoSection,
  LogoText,
} from '../AuthStyle';

const AuthTemplete = ({ children }) => {
  return (
    <AuthContainer>
      <BodySection>
        <LogoSection src={Logo} alt="dayone" loading="lazy" />
        <br />
        <LogoText>인생을 바꾸는</LogoText>
        <LogoBoldText>하루 한 줄</LogoBoldText>
      </BodySection>
      <FooterSection>
        <FooterText>인생을 바꿀 준비 되셨나요?</FooterText>
        {children}
        <FooterSubText>고객센터로 문의하기</FooterSubText>
        <FooterSubText>사업자 정보 보기</FooterSubText>
      </FooterSection>
    </AuthContainer>
  );
};

export default AuthTemplete;
