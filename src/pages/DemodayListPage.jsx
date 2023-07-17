import React from 'react';
import DemodayList from '../components/demoday/DemodayList';
import { useNavigate } from 'react-router-dom';
import { DemodayContainer } from '../components/DemodayStyle';
import {
  DayRecordButton,
  DayRecordButtonLine,
  PlusIcon,
} from '../components/DayRecordStyle';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const DemodayListPage = () => {
  const navigate = useNavigate();

  return (
    <DemodayContainer>
      <DemodayList />
      <DayRecordButton onClick={() => navigate('/demodayform')}>
        <PlusIcon icon={faPlusCircle} />
        데모 만들기
      </DayRecordButton>
      <DayRecordButtonLine />
    </DemodayContainer>
  );
};

export default DemodayListPage;
