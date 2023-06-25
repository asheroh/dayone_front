import React, { useEffect, useState } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { useNavigate, useParams } from 'react-router-dom';

const PostViewer = () => {
  const [post, setPost] = useState({});
  const [isSympathy, setIsSympathy] = useState('0');
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();
  const params = useParams();

  // 단건 조회 완료시
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await authAPI
      .postOne(cookies.access_token, params['postId'])
      .then((r) => {
        console.log('기록 단건 조회 res data:', r.data.data[0]);
        setPost(r.data.data[0]);
        setIsSympathy(r.data.data[0].is_sympathy);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  const onClickSympathyBtn = async () => {
    if (isSympathy == '1') {
      const request = await authAPI
        .noSympathize(cookies.access_token, params['postId'])
        .then((r) => {
          setIsSympathy('0');
        })
        .catch((error) => {
          alert('토큰이 만료되었습니다.');
          localStorage.removeItem('user');
          navigate('/login');
        });
    } else {
      const request = await authAPI
        .sympathize(cookies.access_token, params['postId'])
        .then((r) => {
          setIsSympathy('1');
        })
        .catch((error) => {
          alert('토큰이 만료되었습니다.');
          localStorage.removeItem('user');
          navigate('/login');
        });
    }
  };

  return (
    <div>
      {post ? (
        <div>
          <div style={{ display: 'flex' }}>
            <img
              src={post.user_profile_img}
              alt="user image_url"
              className="profile_image"
            ></img>
            <span>
              {post.username} / {post.count_day}일차 기록
            </span>
          </div>
          <p>{post.created_at}</p>

          <img
            src={post.book_image}
            alt="book_image_url"
            className="book_image"
            style={{
              width: '200px',
              height: 'auto',
              objectFit: 'cover',
              aspectRatio: '11/16',
            }}
          ></img>
          <p>bookname: {post.bookname}</p>
          <br />
          <p>passage: {post.passage}</p>
          <br />
          <p>comment: {post.comment}</p>
          <br />
          <button
            onClick={() => {
              onClickSympathyBtn();
            }}
          >
            {isSympathy === '1' ? '❤️공감해요' : '🖤공감해요'}
          </button>
        </div>
      ) : (
        <div>fsd</div>
      )}
    </div>
  );
};

export default PostViewer;