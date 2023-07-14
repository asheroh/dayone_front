import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';
import {
  MypageBodySection,
  MypageBookImage,
  MypageBox,
  MypageGridBox,
  MypageRecordText,
} from '../MypageStyle';

const MyBookcase = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    // console.log('access token', cookies.access_token);
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .bookcase(cookies.access_token)
      .then((r) => {
        setMyBooks(r.data.data);
        // console.log(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return (
    <MypageBodySection>
      <MypageBox>
        <br />
        <MypageRecordText>내 책장과 기록</MypageRecordText>
        <br />
        <MypageGridBox>
          {myBooks.map((mybookItem) => {
            return (
              <Link
                key={mybookItem.id}
                to={`/mypage/mybooks/${mybookItem.id}/records`}
                state={{
                  title: mybookItem.title,
                  thumbnailImage: mybookItem.thumbnail_image,
                }}
              >
                <MypageBookImage
                  src={mybookItem.thumbnail_image}
                  alt="thumbnail_image"
                  style={{
                    objectFit: 'cover',
                    aspectRatio: '11/16',
                  }}
                />
              </Link>
            );
          })}
        </MypageGridBox>
      </MypageBox>
    </MypageBodySection>
  );
};

export default MyBookcase;
