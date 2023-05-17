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

const ProtectedRoute = ({
  isLoggedIn,
  redirectPath,
  currentPath,
  children,
}) => {
  console.log('ProtectedRoute request path:', currentPath);

  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const Router = () => {
  const sagaMiddleware = createSagaMiddleware();
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const { auth, authError, user1 } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user1: user.user,
  }));

  useEffect(() => {
    console.log('router useEffect');
    const user = localStorage.getItem('user');

    try {
      if (user) {
        console.log('user exist');
        dispatch(tempSetUser(JSON.parse(user)));
        console.log(cookies.access_token);
        setIsLoggedIn(true);
        console.log('route', isLoggedIn);
        // redirect('/');
      } else {
        console.log('user empty');
        console.log('route', cookies.access_token);
        dispatch(check(cookies.access_token));
        console.log('redux user', user1);

        setIsLoggedIn(true);
      }
      console.log('route1', isLoggedIn);
    } catch (e) {
      console.log(e);
      console.log('로컬 스토리지가 작동하지 않거나 쿠키가 없습니다.');
      setIsLoggedIn(false);
      console.log('route2', isLoggedIn);
    }
  }, []);

  // useEffect(() => {
  //   try {
  //     dispatch(check(cookies.access_token));
  //   } catch (e) {
  //     console.log(e);
  //     console.log('로컬 스토리지가 작동하지 않거나 쿠키가 없습니다.');
  //     setIsLoggedIn(false);
  //     console.log('route2', isLoggedIn);
  //     redirect('/login');
  //   }
  // }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* private url */}
          {/* <Route element={<ProtectedRoute isLoggedIn={isLoggedIn} />}> */}
          <Route
            path="/"
            element={
              <ProtectedRoute
                redirectPath="/login"
                currentPath="/"
                isLoggedIn={isLoggedIn}
              >
                <Main />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mypage/:userId"
            element={
              <ProtectedRoute
                redirectPath="/login"
                currentPath="/mypage/:userId"
                isLoggedIn={isLoggedIn}
              >
                <Mypage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/myrecord"
            element={
              <ProtectedRoute
                redirectPath="/login"
                currentPath="/myrecord"
                isLoggedIn={isLoggedIn}
              >
                <MyRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/demoday"
            element={
              <ProtectedRoute
                redirectPath="/login"
                currentPath="/demoday"
                isLoggedIn={isLoggedIn}
              >
                <DemoDay />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postform"
            element={
              <ProtectedRoute
                redirectPath="/login"
                currentPath="/postform"
                isLoggedIn={isLoggedIn}
              >
                <PostForm />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/signin" element={<SignIn />}></Route> */}
          {/* <Route path="/signup" element={<SignUp />}></Route> */}
          {/* <Route path="/about" element={<About />}></Route> */}
          {/* </Route> */}
          {/* public url */}
          <Route path="/login" element={<Login />} />
          <Route
            path="/auth/kakao/callback"
            element={<KaKaoCallBack setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
