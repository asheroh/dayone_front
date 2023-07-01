import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/images/dayone_logo.svg';

const AuthContainer = styled.div`
  width: 100%;
`;

const AuthTemplete = ({ children }) => {
  return (
    <AuthContainer>
      DAY ONE
      {children}
    </AuthContainer>
  );
};

export default AuthTemplete;
