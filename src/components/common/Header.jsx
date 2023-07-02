import {
  HeaderContainer,
  HeaderLogoSection,
  HeaderNavSection,
  InfoBox,
  Navsection,
  SignButton,
  SmallLogoBox,
} from '../HomeStyle';
import { Link } from 'react-router-dom';
import SmallLogo from '../../assets/images/dayone_small_logo.svg';

const Header = ({ user, onLogout }) => {
  return (
    <HeaderContainer>
      <HeaderLogoSection>
        <SmallLogoBox src={SmallLogo} alt="dayone" loading="lazy" />
        <InfoBox>
          {user?.username}
          <SignButton onClick={onLogout}>로그아웃</SignButton>
        </InfoBox>
      </HeaderLogoSection>
      <HeaderNavSection>
        <Navsection>
          <Link to="/">데이기록</Link>{' '}
        </Navsection>
        <Navsection>
          <Link to="/demoday">데모데이</Link>{' '}
        </Navsection>
        <Navsection>
          <Link to="/mypage">나의기록</Link>
        </Navsection>
      </HeaderNavSection>
    </HeaderContainer>
  );
};

export default Header;
