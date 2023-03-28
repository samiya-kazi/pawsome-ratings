import React, { useEffect, useState } from 'react';
import AddPostForm from '../Components/AddPostForm.component';
import PageHeader from '../Components/PageHeader.component';
import PostList from '../Components/PostList.component';
import { getAllPosts } from '../Services/api-client.service';

function HomePage () {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getPosts () {
      try {
        const posts = await getAllPosts();
        if (posts) setPosts(posts);
      } catch (error) {
        console.log(error);        
      }
    }

    getPosts();
  }, []);

  return (
    <div className='container'>
      <PageHeader />
      <div className='content-container'>
        <PostList posts={posts} />
        <AddPostForm setPosts={setPosts} />
      </div>
    </div>
  )
}

export default HomePage;