import React, { useState, useEffect } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { Link, useNavigate } from 'react-router-dom';
import PostModal from './PostModal';
import PostListItem from './PostListItem';

const BestPostList = () => {
  const [posts, setPosts] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await authAPI
      .bestPost(cookies.access_token)
      .then((r) => {
        setPosts(r.data.data);
      })
      .catch((error) => {
        alert('토큰이 만료되었습니다.');
        localStorage.removeItem('user');
        navigate('/login');
      });
  };

  return (
    <div>
      <h1>실시간 인기 덧붙임</h1>
      <br />
      {posts.length === 0 ? (
        <p>이번주 주간 베스트 기록이 없습니다!!!</p>
      ) : (
        <div>
          {posts.map((post) => {
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
        </div>
      )}
    </div>
  );
};

export default BestPostList;
