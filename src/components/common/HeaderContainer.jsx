import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import { logout } from '../../modules/user';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = () => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogout = () => {
    dispatch(logout());
    navigate('/login');
  };
  return <Header user={user} onLogout={onLogout} />;
};

export default HeaderContainer;
