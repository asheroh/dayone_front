import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import KaKaoCallBack from './components/Login/KaKaoCallBack';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/" element={<Main />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/mypage/:userId" element={<Mypage />}></Route>
          <Route path="/myrecord" element={<MyRecord />}></Route>
          <Route path="/demoday" element={<DemoDay />}></Route>
          <Route path="/postform" element={<PostForm />}></Route>
          <Route path="/logintest" element={<LoginTest />}></Route>
          <Route
            path="/auth/kakao/callback"
            element={<KaKaoCallBack />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
