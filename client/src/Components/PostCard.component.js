import React from 'react';
import { Link } from "react-router-dom";
import StarRating from './StarRating.component';

function PostCard ({ post }) {

  return (
    <Link to={`/post/${post._id}`} className='card'>
      <div className='image'>
        <img className="pet-img" src={post.imgUrl}></img>
      </div>

      <div className='info'>
        <h3>{post.petName}</h3>
        <p>{post.petType}</p>
        <div className='rating'>
          <StarRating item={post} />
          <p className='rating-number'>({post.numOfRatings})</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard;