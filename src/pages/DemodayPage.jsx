import { useLocation } from 'react-router-dom';
import DemodayHeader from '../components/Demoday/DemodayHeader';
import DemodayViewer from '../components/Demoday/DemodayViewer';

const DemoDayPage = () => {
  const location = useLocation();
  const demoday = location.state?.demoday;
  return (
    <>
      <DemodayHeader demoday={demoday} />
      <br /> <br /> <br /> <br /> <br />
      <DemodayViewer />
    </>
  );
};

export default DemoDayPage;
