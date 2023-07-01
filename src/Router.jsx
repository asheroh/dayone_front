import React, { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom';
import WritePostPage from './pages/WritePostPage';
import LoginPage from './pages/LoginPage';
import KaKaoLoginCallBackPage from './pages/KaKaoLoginCallBackPage';
import { useDispatch, useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';
import createSagaMiddleware from 'redux-saga';
import { tempSetUser, check } from './modules/user';
import MainPage from './pages/MainPage';
import MyBookPostListPage from './pages/MyBookPostListPage';
import DemodayPage from './pages/DemodayPage';
import CreateDemodayPage from './pages/CreateDemodayPage';
import DemodayListPage from './pages/DemodayListPage';
import NotFoundPage from './pages/NotFoundPage';
import MyPage from './pages/MyPage';
import PostPage from './pages/PostPage';

const ProtectedRoute = ({ redirectPath = '/login', currentPath, children }) => {
  // console.log('ProtectedRoute request path:', currentPath);
  const user = localStorage.getItem('user');
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

const Router = () => {
  const dispatch = useDispatch();
  const sagaMiddleware = createSagaMiddleware();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const { auth, authError, user } = useSelector(({ auth, user }) => ({
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
  }));

  useEffect(() => {
    const localStorageUser = localStorage.getItem('user');
    try {
      if (localStorageUser) {
        // console.log('localstorage user exist');
        dispatch(tempSetUser(JSON.parse(localStorageUser)));
        // console.log(cookies.access_token);
      } else {
        // console.log('localstorage user empty');
        // console.log('route', cookies.access_token);
        dispatch(check(cookies.access_token));
        // console.log('redux user', user);
      }
    } catch (e) {
      // console.log(e);
      // console.log('로컬 스토리지가 작동하지 않거나 쿠키가 없습니다.');
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* private url */}
          <Route
            path="/"
            element={
              <ProtectedRoute currentPath="/">
                <MainPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/posts/:postId"
            element={
              <ProtectedRoute currentPath="/posts/:postId">
                <PostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mypage"
            element={
              <ProtectedRoute currentPath="/mypage">
                <MyPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mypage/mybooks/:bookId/records"
            element={
              <ProtectedRoute currentPath="/mypage/books/:bookId/records">
                <MyBookPostListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/demoday/:demodayId"
            element={
              <ProtectedRoute currentPath="/demoday/:demodayId">
                <DemodayPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/demoday"
            element={
              <ProtectedRoute currentPath="/demoday">
                <DemodayListPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/postform"
            element={
              <ProtectedRoute currentPath="/postform">
                <WritePostPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/demodayform"
            element={
              <ProtectedRoute currentPath="/demodayform">
                <CreateDemodayPage />
              </ProtectedRoute>
            }
          />
          {/* <Route path="/about" element={<About />}></Route> */}

          {/* public url */}
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/auth/kakao/callback"
            element={<KaKaoLoginCallBackPage />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
