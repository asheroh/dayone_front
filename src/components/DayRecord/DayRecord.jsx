import { Link } from 'react-router-dom';
import BestPostList from '../post/BestPostList';
import DatePostList from '../post/DatePostList';

const DayRecord = () => {
  return (
    <>
      <BestPostList />
      <br />
      <DatePostList />
      <br />
      <Link to="/postform">
        <button>기록하기</button>
      </Link>
    </>
  );
};

export default DayRecord;
