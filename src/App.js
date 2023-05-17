import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import Router from './Router';
import { theme } from './Theme';
import React, { useState, useEffect } from 'react';
import {
  useNavigate,
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
  redirect,
} from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import MyRecord from './pages/MyRecord.jsx';
import DemoDay from './pages/DemoDay';
import PostForm from './pages/PostForm';
import LoginTest from './pages/LoginTest';
import Login from './pages/Login';
import KaKaoCallBack from './components/Login/KaKaoCallBack';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import createSagaMiddleware from 'redux-saga';
import user, { tempSetUser, check } from './modules/user';

function App() {
  console.log('app');

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
