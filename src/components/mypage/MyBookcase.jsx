import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';
import { MypageBodySection } from '../MypageStyle';

const MyBookcase = () => {
  const [myBooks, setMyBooks] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  const handleClick = () => {};

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
      {/* 내 책장과 기록
      <br />
      {myBooks.map((mybookItem) => {
        return (
          <div key={mybookItem.id} onClick={() => handleClick(mybookItem)}>
            <MyBookItem mybookItem={mybookItem} />
          </div>
        );
      })} */}
    </MypageBodySection>
  );
};

export default MyBookcase;

const MyBookItem = ({ mybookItem }) => {
  return (
    <></>
    // <Link
    //   to={`/mypage/mybooks/${mybookItem.id}/records`}
    //   state={{
    //     title: mybookItem.title,
    //     thumbnailImage: mybookItem.thumbnail_image,
    //   }}
    // >
    //   <img
    //     src={mybookItem.thumbnail_image}
    //     alt="thumbnail_image"
    //     className="thumbnail_image"
    //     style={{
    //       width: '200px',
    //       height: 'auto',
    //       objectFit: 'cover',
    //       aspectRatio: '11/16',
    //     }}
    //   ></img>
    //   <br />
    // </Link>
  );
};
