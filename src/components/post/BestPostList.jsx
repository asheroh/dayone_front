import React, { useState, useEffect } from 'react';
import * as authAPI from '../../lib/api/auth';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import PostModal from './PostModal';
import PostListItem from './PostListItem';

const BestPostList = () => {
  const [posts, setPosts] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
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
  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };
  return (
    <div>
      <h1>Best comment</h1>
      <br />
      {posts.length === 0 ? (
        <p>이번주 주간 베스트 기록이 없습니다!!!</p>
      ) : (
        <div>
          {posts.map((post) => {
            return (
              <div key={post.id} onClick={() => handleClick(post)}>
                <PostListItem key={post.id} post={post} />
              </div>
            );
          })}
          {modalOpen && (
            <PostModal {...movieSelected} setModalOpen={setModalOpen} />
          )}
        </div>
      )}
    </div>
  );
};

export default BestPostList;
