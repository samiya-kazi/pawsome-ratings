import React from 'react';
import PostCard from './PostCard.component';

function PostList ({ posts }) {
  return (
    <div className='post-list'>
      {posts.map(post => <PostCard key={post._id} post={post} />)}
    </div>
  )
}

export default PostList;