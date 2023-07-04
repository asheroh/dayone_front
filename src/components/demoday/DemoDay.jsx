import { useLocation } from 'react-router-dom';
import DemodayHeader from './DemodayHeader';
import DemodayViewer from './DemodayViewer';

const DemoDay = () => {
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

export default DemoDay;
