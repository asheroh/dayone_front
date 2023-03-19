import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import requests from '../../api/requests';

const AllPost = () => {
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
      <h1>모든 comment</h1>
      <br />
      {posts.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
    </div>
  );
};

export default AllPost;

const PostItem = ({ post }) => {
  return (
    <div>
      <h3>
        {post.bookname} / {post.count_day} 일차
      </h3>
      <p>{post.username}</p>
      <p>{post.passage}</p>
      <p>{post.comment}</p>
      <p>공감수: {post.sympathy_count}</p>
      <p>{post.created}</p>
    </div>
  );
};
