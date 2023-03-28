import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../Components/PageHeader.component';
import PostDetails from '../Components/PostDetails.component';
import RatingsList from '../Components/RatingsList.component';
import { getPostById, getRatingstById } from '../Services/api-client.service';

function PostPage () {

  const { id } = useParams();
  const [ post, setPost ] = useState();
  const [ ratings, setRatings ] = useState([]);

  useEffect(() => {
    async function getPost () {
      try {
        const post = await getPostById(id);
        if (post) setPost(post);

        const ratings = await getRatingstById(id);
        setRatings(ratings);
      } catch (error) {
        console.log(error);        
      }
    }

    getPost();
  }, [id])

  return (
    <div className='container'>
      <PageHeader />
      {post ? 
        <div className='content-container post-page'>
          <PostDetails post={post} id={id} setPost={setPost} setRatings={setRatings} /> 
          <RatingsList ratings={ratings}/>
        </div>
        : null}
    </div>
  )
}

export default PostPage;