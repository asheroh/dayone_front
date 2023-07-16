import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../modules/user';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogoSection,
  HeaderNavSection,
  InfoBox,
  Navsection0,
  Navsection1,
  Navsection2,
  SignButton,
  SmallLogoBox,
} from '../HomeStyle';
import SmallWhiteLogo from '../../assets/images/dayone_small_logo_white.svg';
import SmallBlackLogo from '../../assets/images/dayone_small_logo_black.svg';
import { Context } from '../../context/Context';

const Header = ({ currentPage, setCurrentPage }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { themeMode } = useContext(Context);
  const onLogout = () => {
    if (window.confirm('정말 로그아웃하시겠습니까?')) {
      dispatch(logout());
      navigate('/login', { replace: true });
    } else {
      return;
    }
  };
  return (
    <HeaderContainer>
      <HeaderLogoSection>
        <SmallLogoBox
          src={themeMode === 'black' ? SmallWhiteLogo : SmallBlackLogo}
          alt="dayone"
          loading="lazy"
        />
        <InfoBox>
          {user?.username}
          <SignButton onClick={onLogout}>로그아웃</SignButton>
        </InfoBox>
      </HeaderLogoSection>
      <HeaderNavSection>
        <Navsection0
          currentPage={currentPage}
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          데이기록
        </Navsection0>
        <Navsection1
          currentPage={currentPage}
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          데모데이
        </Navsection1>
        <Navsection2
          currentPage={currentPage}
          onClick={() => {
            setCurrentPage(2);
          }}
        >
          나의기록
        </Navsection2>
      </HeaderNavSection>
    </HeaderContainer>
  );
};

export default Header;
