import React from 'react';
import { useLocation } from 'react-router-dom';
import DemodayHeader from '../components/demoday/DemodayHeader';
import DemodayViewer from '../components/demoday/DemodayViewer';

const DemodayPage = () => {
  const location = useLocation();
  const demoday = location.state.demoday;

  console.log('demoday:', demoday);

  console.log('username:', demoday.username);
  return (
    <>
      <DemodayHeader demoday={demoday} />
      <br /> <br /> <br /> <br /> <br />
      <DemodayViewer />
    </>
  );
};

export default DemodayPage;
