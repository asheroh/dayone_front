import React from 'react';
import AuthTemplete from '../components/auth/AuthTemplete';
import AuthKakaoLoginForm from '../components/auth/AuthKakaoLoginForm';

const LoginPage = () => {
  return (
    <AuthTemplete>
      <AuthKakaoLoginForm />
    </AuthTemplete>
  );
};

export default LoginPage;
