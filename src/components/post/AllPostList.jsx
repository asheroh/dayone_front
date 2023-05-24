import React, { useState, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import * as authAPI from '../../lib/api/auth';
import PostModal from './PostModal';
import { redirect, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PostListItem from './PostListItem';

const AllPostList = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log('ㄹㅇㄴㅁㄹ', cookies.access_token);

    const request = await authAPI.allPost(cookies.access_token).then((r) => {
      setPosts(r.data.data);
    });
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  return (
    <div>
      <h1>모든 comment</h1>
      <br />
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
  );
};

export default AllPostList;
