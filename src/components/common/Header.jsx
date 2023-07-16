import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  HeaderContainer,
  HeaderLogoSection,
  HeaderNavSection,
  InfoBox,
  Navsection0,
  Navsection1,
  Navsection2,
  SmallLogoBox,
  ThemeButton,
  ThemeIcon,
} from '../HomeStyle';
import SmallWhiteLogo from '../../assets/images/dayone_small_logo_white.svg';
import SmallBlackLogo from '../../assets/images/dayone_small_logo_black.svg';
import { Context } from '../../context/Context';
import { faSun } from '@fortawesome/free-solid-svg-icons';

const Header = ({ currentPage, setCurrentPage }) => {
  const { user } = useSelector(({ user }) => ({ user: user.user }));
  const { themeMode, setThemeMode } = useContext(Context);
  const themeToggle = () => {
    if (themeMode === 'black') {
      setThemeMode('white');
    } else if (themeMode === 'white') {
      setThemeMode('black');
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
          <ThemeButton themeMode={themeMode} onClick={themeToggle}>
            <ThemeIcon icon={faSun} thememode={themeMode} />
          </ThemeButton>
        </InfoBox>
      </HeaderLogoSection>
      <HeaderNavSection>
        <Navsection0
          currentPage={currentPage}
          themeMode={themeMode}
          onClick={() => {
            setCurrentPage(0);
          }}
        >
          데이기록
        </Navsection0>
        <Navsection1
          currentPage={currentPage}
          themeMode={themeMode}
          onClick={() => {
            setCurrentPage(1);
          }}
        >
          데모데이
        </Navsection1>
        <Navsection2
          currentPage={currentPage}
          themeMode={themeMode}
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
