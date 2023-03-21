import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import './PostItem.css';
import PostModal from './PostModal';

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchAllPost);
    setPosts(request.data.items);
    console.log(request.data.items);
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
          <div onClick={() => handleClick(post)}>
            <PostItem key={post.id} post={post} />
          </div>
        );
      })}
      {modalOpen && (
        <PostModal {...movieSelected} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default AllPost;

const PostItem = ({ post }) => {
  return (
    <div>
      <img src={post.image_url} alt="logo" className="profile_image"></img>
      <h3>
        {post.bookname} / {post.count_day} 일차
      </h3>
      <p>{post.username}</p>
      <p>{post.passage}</p>
      <p>{post.comment}</p>
      <p>공감수: {post.sympathy_count}</p>
      <p>{post.created}</p>
      <br />
    </div>
  );
};
