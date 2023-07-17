import { useLocation } from 'react-router-dom';
import DemodayHeader from '../components/demoday/DemodayHeader';
import DemodayViewer from '../components/demoday/DemodayViewer';
import { PostDetailContainer } from '../components/MypageStyle';

const DemoDayPage = () => {
  const location = useLocation();
  const demoday = location.state?.demoday;
  return (
    <PostDetailContainer>
      <DemodayHeader demoday={demoday} />
      <DemodayViewer />
    </PostDetailContainer>
  );
};

export default DemoDayPage;
