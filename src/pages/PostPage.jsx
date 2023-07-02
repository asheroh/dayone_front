import React from 'react';
import PostViewerHeader from '../components/post/PostViewerHeader';
import PostViewer from '../components/post/PostViewer';
import { useLocation } from 'react-router-dom';

const PostPage = () => {
  const location = useLocation();
  const post = location.state.post;

  console.log('post:', post);

  console.log('username:', post.username);
  //   console.log('userId:', user.userId);

  return (
    <div>
      <PostViewerHeader post={post} />
      <br /> <br /> <br /> <br /> <br />
      <PostViewer />
    </div>
  );
};

export default PostPage;
