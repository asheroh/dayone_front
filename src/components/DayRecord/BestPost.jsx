import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';
import './PostItem.css';

const BestPost = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const request = await axios.get(requests.fetchAllPost);
    setPosts(request.data.items);
    console.log(request.data.items);
  };

  return (
    <div>
      <h1>Best comment</h1>
      <br />
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default BestPost;

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
