import { Link, useNavigate } from 'react-router-dom';
import BestPostList from '../post/BestPostList';
import DatePostList from '../post/DatePostList';
import {
  DayRecordBorder,
  DayRecordButton,
  DayRecordButtonLine,
  DayRecordContainer,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenFancy } from '@fortawesome/free-solid-svg-icons';

const DayRecord = () => {
  const navigate = useNavigate();

  return (
    <DayRecordContainer>
      {/* 실시간 인기 덧붙임 ---------------------------------*/}
      <BestPostList />

      {/* 경계선 --------------------------------------------*/}
      <DayRecordBorder />

      {/* 일자별 기록 ---------------------------------------*/}
      <DatePostList />

      <DayRecordButton onClick={() => navigate('/postform')}>
        <FontAwesomeIcon icon={faPenFancy} />
        기록 쓰기
      </DayRecordButton>
      <DayRecordButtonLine />
    </DayRecordContainer>
  );
};

export default DayRecord;
