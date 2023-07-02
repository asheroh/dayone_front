import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import { Link, useNavigate } from 'react-router-dom';
import PostListItem from './PostListItem';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
  CommentGridContainer,
  DayContainer,
  DayEmptyIcon,
  DayEmptySection,
  DayEmptyText,
  DayTodate,
} from '../DayRecordStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const DatePostList = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [posts, setPosts] = useState([]);
  const [selectedDate, setselectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    // console.log(selectedDate);
    fetchData();
  }, [selectedDate]);

  // yyyyMMdd
  const getFormattedParamsDate = (date) => {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return '' + year + month + day;
  };

  const getFormattedKoreanDate = (date) => {
    // "ko-KR" locale로 날짜를 변환합니다.
    // 이는 "년-월-일" 형태의 날짜를 출력합니다.
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('ko-KR', options);

    // '월' 단위가 한 자리일 경우에도 두 자리로 유지하기 위한 코드입니다.
    return formattedDate.replace(/월 /, '월 ');
  };

  const fetchData = async () => {
    // console.log('ㄹㅇㄴㅁㄹ', cookies.access_token);

    const request = await authAPI
      .datePost(cookies.access_token, getFormattedParamsDate(selectedDate))
      .then((r) => {
        setPosts(r.data.data);
      });
  };

  return (
    <DayContainer>
      <DayTodate>
        {getFormattedKoreanDate(selectedDate)} 덧붙임{' '}
        <FontAwesomeIcon
          icon={faChevronDown}
          onClick={() => setShowDatePicker(!showDatePicker)}
        />
      </DayTodate>
      {showDatePicker && (
        <DatePicker
          selected={selectedDate}
          onChange={(date) => {
            setselectedDate(date);
            setShowDatePicker(false);
          }}
          withPortal
          inline
        />
      )}
      {posts?.length === 0 ? (
        <DayEmptySection>
          <DayEmptyIcon>
            <FontAwesomeIcon icon={faBoxOpen} />
          </DayEmptyIcon>
          <DayEmptyText>오늘 첫 번째 기록을 작성해보세요.!</DayEmptyText>
        </DayEmptySection>
      ) : (
        <CommentGridContainer>
          {posts?.map((post) => {
            return (
              <Link
                to={`/posts/${post.post_id}`}
                state={{ post: post }}
                key={post.post_id}
              >
                <PostListItem post={post} />
              </Link>
            );
          })}
        </CommentGridContainer>
      )}
    </DayContainer>
  );
};

export default DatePostList;
