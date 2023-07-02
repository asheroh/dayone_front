import { Link } from 'react-router-dom';
import BestPostList from '../post/BestPostList';
import DatePostList from '../post/DatePostList';
import { DayRecordContainer } from '../DayRecordStyle';

const DayRecord = () => {
  return (
    <DayRecordContainer>
      <BestPostList />
      <br />
      <DatePostList />
      <br />
      <Link to="/postform">
        <button>기록하기</button>
      </Link>
    </DayRecordContainer>
  );
};

export default DayRecord;
