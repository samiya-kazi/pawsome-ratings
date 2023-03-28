import React, { useEffect, useState } from 'react';
import emptyStar from '../assets/emptyStar.svg';
import filledStar from '../assets/filledStar.svg';
import { Link } from "react-router-dom";

function PostCard ({ post }) {

  const starsArr = Array(5).fill(emptyStar);
  const [stars, setStars] = useState(starsArr);

  useEffect(() => {

    const arr = [...starsArr];

    for (let i = 0; i < Math.floor(post.rating); i++) {
      arr[i] = filledStar
    }

    setStars(arr);
  }, [post])

  return (
    <Link to={`/post/${post._id}`} className='card'>
      <div className='image'>
        <img className="pet-img" src={post.imgUrl}></img>
      </div>

      <div className='info'>
        <h3>{post.petName}</h3>
        <p>{post.petType}</p>
        <div className='rating'>
          <div>
          <span>{stars.map((star, index) => <img key={post._id + index} src={star}/>)}</span>
          </div>
          <p className='rating-number'>({post.numOfRatings})</p>
        </div>
      </div>
    </Link>
  )
}

export default PostCard;