import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as authAPI from '../../lib/api/auth';

const MyBookPostList = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .bookPost(cookies.access_token, params['bookId'])
      .then((r) => {
        setPosts(r.data.data);
        console.log('r.data.data:', r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };
  return (
    <div>
      <br />
      <h1>덧붙임 모음</h1>
      <br />
      {posts.map((post) => {
        return (
          <Link
            to={`/posts/${post.post_id}`}
            state={{ post: post }}
            key={post.post_id}
          >
            <PostItem post={post} />
          </Link>
        );
      })}
    </div>
  );
};

export default MyBookPostList;

const PostItem = ({ post }) => {
  const formatDate = (isoDateString) => {
    const date = new Date(isoDateString);

    const year = date.getFullYear(); // 연도
    const month = date.getMonth() + 1; // 월 (0부터 시작하므로 +1)
    const day = date.getDate(); // 일

    return `${year}년 ${month}월 ${day}일 기록`;
  };
  return (
    <div>
      <h3>{formatDate(post.created_at)}</h3>
      <br />
      <p>passage: {post.passage}</p>
      <p>comment: {post.comment}</p>
      <br />
      <br />
    </div>
  );
};
