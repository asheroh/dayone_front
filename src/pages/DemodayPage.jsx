import React from 'react';
import { useLocation } from 'react-router-dom';
import DemodayHeader from '../components/Demoday/DemodayHeader';
import DemodayViewer from '../components/Demoday/DemodayViewer';

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
