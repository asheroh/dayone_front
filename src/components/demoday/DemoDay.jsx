import { useLocation } from 'react-router-dom';
import DemodayHeader from './DemodayHeader';
import DemodayViewer from './DemodayViewer';

const DemoDay = () => {
  return (
    <>
      <DemodayHeader demoday={null} />
      <br /> <br /> <br /> <br /> <br />
      <DemodayViewer />
    </>
  );
};

export default DemoDay;
