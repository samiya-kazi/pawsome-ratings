import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../Components/PageHeader.component';
import PostDetails from '../Components/PostDetails.component';
import { getPostById } from '../Services/api-client.service';

function PostPage () {

  const { id } = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    async function getPost () {
      try {
        const post = await getPostById(id);
        if (post) setPost(post);
      } catch (error) {
        console.log(error);        
      }
    }

    getPost();
  }, [id])

  return (
    <div className='container'>
      <PageHeader />
      {post ? <PostDetails post={post} id={id} setPost={setPost} /> : null}
    </div>
  )
}

export default PostPage;